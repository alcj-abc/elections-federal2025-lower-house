import { mount } from 'svelte';
import { matchAllocation } from '../../builder/components/SpreadsheetImport/util';
import InlineHighlights from './InlineHighlights.svelte';

function mountInlineHighlight(node, props) {
  const newParent = document.createElement('span');
  node.replaceWith(newParent);
  mount(InlineHighlights, {
    target: newParent,
    props: {
      ...props
    }
  });
}

/**
 * Search panels for any <strong> elements with a party or electorate name and
 * colourise them accordingly.
 */
export function applyColourToPanels(panels, { config }) {
  const electorates = config.groups.flatMap(group => group.hexes.map(hex => hex.name));
  const electorateIds = config.groups.flatMap(group => group.hexes.map(hex => hex.id));
  panels.forEach(({ data, nodes }, i) => {
    (nodes as HTMLElement[]).forEach(node =>
      node.querySelectorAll('span,strong').forEach(stronk => {
        const textContent = String(stronk.textContent).trim();

        // Party names
        const allocationText = matchAllocation(textContent.toLowerCase());
        if (allocationText) {
          mountInlineHighlight(stronk, {
            name: textContent,
            allocation: allocationText,
            certainty: true
          });
        }

        // Electorate names w allocation corresponding to the map
        const electorateIndex = electorates.indexOf(textContent);
        if (electorateIndex !== -1) {
          const electorateId = electorateIds[electorateIndex];
          const allocation = data.allocations?.[electorateId] ?? null;
          const certainty = data.certainties?.[electorateId] ?? true;

          mountInlineHighlight(stronk, {
            name: textContent,
            allocation,
            certainty
          });
        }
      })
    );
  });
}
