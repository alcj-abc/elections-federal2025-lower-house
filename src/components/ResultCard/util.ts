const getHeldPartyData = (gainRetain: string, isSafe?: boolean, leadingCandidate?, holdingParty?) => {
  if (
    gainRetain === 'Too close' ||
    gainRetain === 'No votes' ||
    gainRetain.includes('retain') ||
    leadingCandidate?.party.code === holdingParty?.code ||
    !holdingParty
  )
    return null;

  // Check if it's a "From" or "Held" scenario
  // If it's "safe" or "gain", it means is settle and no longer are the holding party
  const isSafeOrGain = isSafe || !!gainRetain.includes('gain');

  return {
    heldPartyAriaLabel: isSafeOrGain ? `From ${holdingParty?.short ?? ''}` : `${holdingParty?.short ?? ''} held`,
    heldParty: isSafeOrGain ? `From ${holdingParty?.code ?? ''}` : `${holdingParty?.code ?? ''} held`,
    id: holdingParty?.code
  };
};

/**
 * News Web logic for gain/retain string, extracted from GainRetain.tsx
 */
export function getGainRetain({ leadingCandidate, predicted, swingDial, holdingParty }) {
  let ariaLabel = 'No Votes';
  let label = 'No Votes';
  let id = '';
  let isSafe = false;

  // We don't have a full prediction yet, but there are some votes in.
  // Show who is in the lead
  if (!predicted && !!swingDial?.length) {
    let leading;

    const leftVotes = swingDial?.[0]?.predicted2CP?.votes ?? 0;
    const rightVotes = swingDial?.[1]?.predicted2CP?.votes ?? 0;

    // If both votes are 0, let the "no votes" default handle it
    if (leftVotes !== 0 || rightVotes !== 0) {
      // Determine the leading party or if the result is too close
      if (leftVotes > rightVotes) {
        leading = swingDial[0];
      } else if (rightVotes > leftVotes) {
        leading = swingDial[1];
      }

      // If the votes are equal, set "too close" values
      if (leftVotes === rightVotes) {
        ariaLabel = 'Too close';
        label = 'Too close';
        id = '';
      } else {
        // Otherwise, set the leading party values
        ariaLabel = `${leading?.party?.short || ''} ahead`;
        label = `${leading?.party?.code || ''} ahead`;
        id = leading?.party?.code;
      }
    }
  }

  if (predicted && leadingCandidate) {
    const isAhead = predicted?.predictionString?.toLowerCase().includes('ahead');
    const isLikely = predicted?.predictionString?.toLowerCase().includes('likely');
    isSafe = predicted?.predictionString?.startsWith('SAFE');

    if (isAhead || isLikely) {
      let predictionKeyword = '';

      if (isAhead) {
        predictionKeyword = 'ahead';
      }

      if (isLikely) {
        predictionKeyword = 'likely';
      }

      ariaLabel = `${leadingCandidate?.party?.short || ''} ${predictionKeyword}`;
      label = `${leadingCandidate?.party?.code || ''} ${predictionKeyword}`;
      id = leadingCandidate?.party?.code;
    } else if (isSafe || !predicted?.predictionString) {
      ariaLabel = `${leadingCandidate?.party?.short || ''} ${predicted?.gainretain?.toLowerCase() || ''}`;
      label = `${leadingCandidate?.party?.code || ''} ${predicted?.gainretain || ''}`;
      id = leadingCandidate?.party?.code;
    }
  }
  // Compares current leading party with holding party
  const heldPartyData = getHeldPartyData(label, isSafe, leadingCandidate, holdingParty);

  return {
    heldPartyData,
    label,
    id,
    isSafe
  };
}
