<script>
    import Key from './key.svelte';
    export let onKeyChange;
</script>

<style lang="scss">
    @import '../../static/styles/keys.scss';
</style>

<div class='keys'>
    <Key keyName='E' onKeyChange={onKeyChange} />
    <Key keyName='S' onKeyChange={onKeyChange} />
    <Key keyName='C' onKeyChange={onKeyChange} />
    <Key keyName='X' onKeyChange={onKeyChange} />
</div>