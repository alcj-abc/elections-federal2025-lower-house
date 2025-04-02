import { debounce } from 'lodash-es';

/**
 * Return onclick/hover handlers when isInteractive. This implements standard
 * onClick and onHover events for the hex map.
 */
export function getInteractionHandlers({ isInteractive = false, onClick, onHover }) {
  if (!isInteractive) {
    return {};
  }
  const debouncedOnHover = () => {
    return debounce(onHover, 60);
  };

  const onclick = ({ target, clientX, clientY }) => {
    const code = (target as HTMLElement)?.dataset?.id;
    if (!code || !onClick) {
      return;
    }
    onClick({ code, clientX, clientY });
  };

  const onmouseover = e => {
    const target = e.target as HTMLElement;
    const { clientX, clientY } = e;
    const code = target.dataset.id;
    if (target.nodeName !== 'polygon' || !code) {
      return;
    }
    debouncedOnHover({ code, clientX, clientY });
  };

  const onblur = e => {
    debouncedOnHover({ code: null });
  };

  return {
    onblur,
    onmouseout: onblur,
    onmouseover,
    onclick
  };
}
