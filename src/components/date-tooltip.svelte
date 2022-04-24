<script>
    export let epochDate;
</script>

<span class='tooltip'>
  {epochDate}
    <span class="tooltiptext">
      {new Date(epochDate * 1000).toLocaleDateString()}
    </span>
  </span>

<style lang="scss">
  span:first-child {
    color: dodgerblue;
  }

  .tooltip {
    color: white;
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    opacity: 80%;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: absolute;
    top: -5px;
    right: 130px;
    z-index: 1;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>