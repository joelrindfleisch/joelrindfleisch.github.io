<script>
    import { onMount } from 'svelte';
    import Bash from '../components/bash.svelte';
    import Keys from '../components/keys.svelte';

    let keyName = '';
    const onKeyChange = (key) => {
    	console.log('key changed: ', key);
        keyName = key;
    };

    onMount(async () => document.onkeypress = (e) => onKeyChange(e.key.toUpperCase()));

</script>

<Bash {keyName}/>
<Keys {keyName} {onKeyChange} />