# elections-federal2025-hex

A project generated from [aunty](https://github.com/abcnews/aunty)'s `svelte` project template.

## iframe embed

The country hex map is available as an iframe embed at `/iframe`

This is a naive implementation and only shows the data you send into it. So you're responsible for any live data fetching.

The iframe communicates over postMessage and limits communication to ABC origins in ALLOWED_HOSTS, so it can't be used by other sites without a custom build.

### Events emitted:

- When clicking a hexagon: `{type: 'click', payload: {code: 'ADEL', clientX:0, clientY:0 }}`

### postMessage actions available:

- `postMessage({ type: 'setAllocations', payload: {ADEL: 'OTH'}})`
  - You should set all electorate codes at once. Codes should align with Antony Green's database. Supported codes are listed in [./data/parties.json]()

## WebComponent embed

The country hex map is exported as a web component in [dist-wc/elections-federal2025-hex.js].

Load it in as type="module" and then you have access to the <abcnews-hexmap /> component.

The properties are:

```
{
  allocations = {},
  showStateLabels = false,
  showElectorateLabels = false,
  onClick = () => {}
}
```
