<script>
  export let duration = 2000;
  export let isCasting = false;
  export let onCastEnd;
  
  let isCastFinished = false;

  const onCastFinished = () => {
    isCastFinished = true;
    onCastEnd();
  }

  console.log(isCasting);
</script>
<div 
  class="rpgui-cast-bar-container"
  class:rpgui-cast-bar-container--active={isCasting}
  class:rpgui-cast-bar-container--finished={isCastFinished}>
  <div 
    class="rpgui-cast-bar" 
    style:--duration="{duration}ms">
    <div class="rpgui-cast-bar-indicator"  class:rpgui-cast-bar-indicator--active={isCasting} on:animationend={onCastFinished}></div>
  </div>
</div>