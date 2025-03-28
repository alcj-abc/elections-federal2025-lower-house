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
  onClick = ({code, clientX, clientY}) => {},
  onHover = ({code, clientX, clientY}) => {}
}
```

You should set all electorate codes at once. Codes should align with Antony Green's database. Supported codes are listed in [./data/parties.json]()
