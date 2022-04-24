<script>
    export let keyName, onKeyChange;
    const handleKeyChange = () => {
        onKeyChange(keyName);
    };
</script>

<style lang="scss">
    @import '../../static/styles/key.scss';

</style>
<div
        class='key'
        on:click={handleKeyChange}
>
    {keyName}
</div>