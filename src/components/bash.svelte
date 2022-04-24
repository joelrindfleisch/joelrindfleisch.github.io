<script>
    import Employment from './employment.svelte';
    import Education from './education.svelte';
    import Empty from './empty.svelte';
    import Contact from './contact.svelte';

    export let keyName;
</script>

<div class='window'>bash</div>
<div class='bash'>
    <span class='instructions'>
        Press 'E' for employment information <br/>
        Press 'S' for school information <br/>
        Press 'C' for contact information <br/>
        Press 'X' to clear
  </span>
    {#if keyName === 'X'}
        <Empty/>
    {:else if keyName === 'C'}
        <Contact/>
    {:else if keyName === 'S'}
        <Education/>
    {:else if keyName === 'E'}
        <Employment/>
    {:else}
        <Empty/>
    {/if}

</div>

<style lang="scss">
    @import '../../static/styles/bash.scss';

    :global(.bash-content) {
        color: white;
        margin-left: 5px;

    > span {
        margin: 0 5px;
    }
    }
</style>
