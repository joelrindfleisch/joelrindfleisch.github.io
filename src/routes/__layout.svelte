<script>
    import Header from '../components/header.svelte';
</script>

<style>
    :global(body) {
        margin: 0;
    }
    .body {
        margin: 0 auto;
        max-width: 960px;
    }
    footer {
        text-align: center;
        margin-top: 40px;
        font-family: 'IBM Plex Mono', monospace;
    }
</style>

<Header/>
<div class="body">
    <main>
        <slot/>
    </main>
    <footer>
        © {'Joel Rindfleisch ' + new Date().getFullYear()}
    </footer>
</div>
