<script>
  import ActionButton from '$lib/components/ActionButton/ActionButton.svelte';
  import ActionButtonText from '$lib/components/ActionButton/ActionButtonText.svelte';
  import ActionBar from '$lib/components/ActionBar/ActionBar.svelte';
  import CastBar from '$lib/components/CastBar/CastBar.svelte';

  import { gcdActive, isCasting } from './store.js';
  
  const setGlobal = () => {
    gcdActive.set(true);
  }

  const onGlobalEnd = () => {
    gcdActive.set(false);
  }

  const onCastEnd = () => {
    isCasting.set(false);
  }

  const castIncarnate = () => {
    setGlobal();
    isCasting.set(true);
  }

  let gcdActive_value;
  let isCasting_value;

	gcdActive.subscribe((gcdActive) => {
		gcdActive_value = gcdActive;
	});

  isCasting.subscribe((isCasting) => {
		isCasting_value = isCasting;
	});

</script>  

<div style="width: 300px">
  <CastBar duration="1200" isCasting={isCasting_value} onCastEnd={() => onCastEnd()} />
</div>

<ActionBar columns={2}>
  <ActionButton iconSrc="/spell-icons/incarnation.jpg" onCooldownEnd={() => onGlobalEnd()} isOnGlobalCooldown={gcdActive_value} on:click={() => castIncarnate()}>
    <ActionButtonText position="top-right">Q</ActionButtonText>
    <ActionButtonText position="bottom-right">4</ActionButtonText>
  </ActionButton>
  <ActionButton iconSrc="/spell-icons/incarnation.jpg" onCooldownEnd={() => onGlobalEnd()} isOnGlobalCooldown={gcdActive_value} on:click={() => setGlobal()}>
    <ActionButtonText position="top-right">Q</ActionButtonText>
    <ActionButtonText position="bottom-right">4</ActionButtonText>
  </ActionButton>
</ActionBar>
