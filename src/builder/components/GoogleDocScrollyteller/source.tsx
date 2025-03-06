import React, { useRef, useState } from 'react';
import { loadScrollyteller, ScrollytellerDefinition } from '@abcnews/scrollyteller';
import styles from './index.module.scss';

const URL_LOCALSTORAGE_KEY = 'last-successfully-loaded-google-doc-url';

function GoogleDocScrollyteller<T>({
  loadScrollytellerArgs = {
    className: 'u-full',
    markerName: 'mark'
  },
  preprocessCoreEl,
  postprocessScrollytellerDefinition,
  renderPreview,
  renderFallbackImagesButton
}) {
  const { name, className, markerName } = loadScrollytellerArgs;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [coreText, setCoreText] = useState<string>();
  const [coreHTML, setCoreHTML] = useState<string>();
  const [preview, setPreview] = useState<React.ReactElement>();
  const [fallbackImagesButton, setFallbackImagesButton] = useState<React.ReactElement>();

  return (
    <div className={styles.root} data-is-loading={isLoading ? '' : undefined}>
      <div className={styles.preview}>{preview}</div>
      <div className={styles.controls}>
        <div className={styles.row}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Public Google Doc URL"
            onKeyDown={event => event.keyCode === 13 && load()}
            defaultValue={localStorage.getItem(URL_LOCALSTORAGE_KEY) || ''}
          ></input>
          <button disabled={isLoading} onClick={load}>
            Load
          </button>
        </div>
        {coreText && (
          <div className={styles.row}>
            <button
              onClick={() => {
                const listener = (event: ClipboardEvent) => {
                  event.clipboardData?.setData('text/plain', coreText);

                  if (coreHTML) {
                    event.clipboardData?.setData('text/html', coreHTML);
                  }

                  event.preventDefault();
                };

                document.addEventListener('copy', listener);
                document.execCommand('copy');
                document.removeEventListener('copy', listener);
              }}
            >
              Core Text
            </button>
            {fallbackImagesButton}
          </div>
        )}
      </div>
    </div>
  );
}

export default GoogleDocScrollyteller;
