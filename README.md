# elections-federal2025-hex

A project generated from [aunty](https://github.com/abcnews/aunty)'s `svelte` project template.

## WebComponent embed

The country hex map is exported as a web component in [dist-wc/elections-federal2025-hex.js].

1. Install with `npm i github:abcnews/elections-federal2025-lower-house`
2. Then load the module either by:
   ** `import '@abcnews/elections-federal2025-lower-house/wc';";`
   ** or load the code in as `<script type="module"`
3. The <abcnews-hexmap /> component is available in the page

The properties are:

```
{
  allocations = { ADEL: 'OTH' },
  certainties = { ADEL: true }
  showStateLabels = false,
  showElectorateLabels = false,
  layoutName = "COUNTRY",
  onClick = ({code, clientX, clientY}) => {},
  onHover = ({code, clientX, clientY}) => {},
  onApi = (api) => { global.api = api },
  selectedElectorate='ADEL',
  customViewbox = null | [x, y, w, h],
  onViewboxChange = ({newViewbox}) => {}
}
```

Once onApi returns, you can use the API to query hexagon dimensions. `screenCoord` gives you the hexagon coordinate on-screen so you can tie popups to the hexagon. `svgCoord` gives you the coordinate inside the SVG, so you can set the viewbox based on a hexagon position.

```
  const el = document.querySelector('abcnews-hexmap');
  el.onApi = function (api) {
    // Get hex info
    console.log(api.getHex('BRIS'));
    // {
    //   "code": "BRIS",
    //   "screenCoord": [
    //     772.380615234375,
    //     271.9005126953125
    //   ],
    //   "svgCoord": [
    //     277.3,
    //     112
    //   ]
    // }

    // put keyboard focus on the given hex
    api.focusHex('BRIS');
  };
```

You should set all electorate codes at once. Codes should align with Antony Green's database. Supported codes are listed in [./data/parties.json]()
