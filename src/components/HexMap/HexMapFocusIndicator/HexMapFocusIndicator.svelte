<script lang="ts">
  import { hexToPx } from '../../../lib/utils';

  let { groups, userFocusedElectorate, layout } = $props();

  let flatGroups = $derived.by(() =>
    groups.flatMap(group => group.hexes.map(hex => ({ ...hex, group: group.name }))).sort((a, b) => a.index - b.index)
  );

  let coords = $derived.by(() => {
    if (!userFocusedElectorate) {
      return;
    }
    const hex = flatGroups.find(hex => hex.id === userFocusedElectorate);
    const [groupX, groupY] = layout.positions[hex.group];
    const [hexX, hexY] = hex.coord;
    const xOffset = hexY % 2 ? 0.5 : 0;
    const [xPx, yPx] = hexToPx([groupX + hexX + xOffset, groupY + hexY], '').map(Number);
    return [xPx - 3, yPx - 3];
  });
</script>

{#if coords}
  <g transform={`translate(${coords.join(' ')}) scale(0.95)`}>
    <path
      style="color:#000000;fill:#0058cc;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none"
      d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z"
      id="path6-1"
    />
    <path
      id="path11-2"
      style="color:#000000;fill:#ffffff;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none"
      d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"
    />
    <path
      style="color:#000000;fill:#0058cc;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none"
      d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z"
      id="path3-3"
    />
  </g>
{/if}
