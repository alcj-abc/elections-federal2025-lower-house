function replaceNodeWithTextState(node, props) {
  const newParent = document.createElement('span');
  node.replaceWith(newParent);
  // render(createElement(TextState, props), newParent);
}

export function applyColourToPanels(panels) {
  panels.forEach(({ data, nodes }, i) => {
    const hasFocuses = getHasFocuses(data.focuses);

    (nodes as HTMLElement[]).forEach(node =>
      node.querySelectorAll('strong').forEach(stronk => {
        const textContent = String(stronk.textContent).trim();
        const magicWords = ['solid', 'likely', 'lean', 'leans', 'leaning'];

        if (magicWords.includes(textContent.toLowerCase())) {
          const redWords = ['trump', 'donald', 'republican'];
          const blueWords = ['harris', 'kamala', 'democrat'];
          const blockText = String(node.textContent).toLowerCase();
          const isRed = hasWords(redWords, blockText);
          const isBlue = hasWords(blueWords, blockText);

          let allocation = 'n';
          if (isBlue) {
            allocation = textContent === 'solid' ? 'd' : 's';
          }
          if (isRed) {
            allocation = textContent === 'solid' ? 'r' : 'e';
          }

          replaceNodeWithTextState(stronk, {
            name: textContent,
            allocation: allocation,
            showAbbr: false
          });

          return;
        }

        const state = STATES.find(({ name }) => name === stronk.textContent?.trim());
        const stateId = state ? StateId[state.id] : null;
        if (!stateId) {
          return;
        }

        const { allocations } = data as GraphicProps;
        let stateMainAllocation = allocations && getStateAllocations(stateId, allocations)[0];
        if (stateMainAllocation === 'n' && hasFocuses) {
          stateMainAllocation = Allocation.UnallocatedFocused;
        }

        replaceNodeWithTextState(stronk, {
          name: state?.name,
          id: stateId,
          allocation: stateMainAllocation,
          showAbbr: true
        });
      })
    );
  });
}
