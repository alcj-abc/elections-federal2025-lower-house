// import { union, Polygon, Ring, MultiPolygon } from 'polygon-clipping';
import { defineHex, Grid, Orientation, rectangle } from 'honeycomb-grid';
import fs from 'fs';
import path from 'path';
import polygonClipping from 'polygon-clipping';
const config = JSON.parse(fs.readFileSync('data/config.json', 'utf8'));

/** Round number to 1 decimal place */
const round = number => Math.round(number * 10) / 10;

/** Get max x,y dimensions for the grid of hexagons */
function getDims(coords) {
  // Grid of hexagons
  let gridDimensions = {
    minRow: Infinity,
    maxRow: -Infinity,
    minCol: Infinity,
    maxCol: -Infinity,
    width: 1,
    height: 1
  }; // to be determined next
  Object.values(coords).forEach(([col, row]) => {
    gridDimensions.minRow = Math.min(gridDimensions.minRow, row);
    gridDimensions.maxRow = Math.max(gridDimensions.maxRow, row);
    gridDimensions.minCol = Math.min(gridDimensions.minCol, col);
    gridDimensions.maxCol = Math.max(gridDimensions.maxCol, col);
  });
  gridDimensions.height = gridDimensions.maxRow - gridDimensions.minRow + 1;
  gridDimensions.width = gridDimensions.maxCol - gridDimensions.minCol + 1;
  return gridDimensions;
}

/** Convert a `ring` array of coordinates to a <polygon> string for the browser to render */
function svgCoordsToPolygonString({ ring, className = '', id = '' }) {
  const coordString = ring.map(xy => xy.join(',')).join(' ');
  return `<polygon
  data-id='${id}'
  class='${className}'
  points='${coordString}'
  />`
    .replace(/\n/g, ' ')
    .replace(/(\n|\s{2,})/g, ' ');
}

const gridDimensions = getDims(
  config.flatMap(state => {
    return state.hexes.map(hex => hex.coord);
  })
);

// // Hexagon shape
const radius = 16;
const hexagonDefinition = defineHex({
  dimensions: radius,
  orientation: Orientation.POINTY,
  origin: 'topLeft',
  offset: -1
});
const grid = new Grid(hexagonDefinition, rectangle({ width: gridDimensions.width, height: gridDimensions.height }));
let svgWidth = Math.ceil(radius * Math.sqrt(3) * (gridDimensions.width + 0.5));
let svgHeight = Math.ceil(radius * 1.5 * (gridDimensions.height + 1 / 3));

const idCheckMap = {};
const groups = config.map(({ name, hexes }) => {
  const svgHexCoords = hexes
    .map(({ code, coord, id, ...meta }) => {
      if (idCheckMap[id]) {
        throw new Error('ID check map contains duplicates, must be unique');
      }
      idCheckMap[id] = true;
      const [x, y] = coord;
      const hex = grid.getHex({
        row: y - gridDimensions.minRow,
        col: x - gridDimensions.minCol
      });
      if (!hex) {
        console.log('no hex for', code, [x, y]);
        return;
      }
      const ring = hex.corners.map(({ x, y }) => [round(x), round(y)]);
      return { ring, className: 'hex', code, id, hexCoord: [hex.x, hex.y].map(round) };
    })
    .filter(Boolean);

  const svgHexes = svgHexCoords.map(svgCoordsToPolygonString).join('');

  const hexRings = svgHexCoords.map(hex => [hex.ring]);
  const outlineCoords = (svgHexCoords.length ? polygonClipping.union(...hexRings) : []).sort(
    (a, b) => b[0].length - a[0].length
  );
  const svgOutline = svgCoordsToPolygonString({ ring: outlineCoords, className: 'hex-outline', code: name });

  return {
    name,
    svgHexes,
    svgOutline,
    hexes: hexes.map((hex, i) => ({ ...hex, coordPx: svgHexCoords[i].hexCoord }))
  };
});

const dataString = JSON.stringify({ svgWidth, svgHeight, groups });

console.timeEnd('build');

console.log('built data for ', config.length, 'groups @', Math.round(dataString.length / 1024), 'kb before gzip');

fs.writeFileSync('data/appdata-built.json', dataString);
