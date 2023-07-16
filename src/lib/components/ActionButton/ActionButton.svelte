<script>
  export let iconSrc;
  export let isOnGlobalCooldown = false;
  export let onCooldownEnd;
  export let cooldownDuration = 1000;
  // export let isOnCooldown;
  // export let globalCooldownDuration;
  // export let cooldownDuration;



</script>
<button class="rpgui-action-button" on:click>
  <img class="rpgui-action-button-icon" src={iconSrc} alt="" aria-hidden="true" />
  <span class="rpgui-action-button-inner">
    <slot></slot>
  </span>
  <svg 
    class="rpgui-action-button-cooldown" 
    class:rpgui-action-button-cooldown--active={isOnGlobalCooldown} 
    style:--duration="{cooldownDuration}ms"
    viewBox="0 0 100 100">
    <circle cx='50' cy='50' r='50' on:animationend={onCooldownEnd} />
  </svg>
</button>