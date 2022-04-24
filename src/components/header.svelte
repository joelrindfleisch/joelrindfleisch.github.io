<script>
    import MediaQuery from "./media-query.svelte";
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Londrina+Shadow|Open+Sans|IBM+Plex+Mono");

    .header{
        font-family: 'Londrina Shadow', cursive;
        background: #71eeb8;
        margin-bottom: 1.45rem;
        margin: 0 auto;
        padding: 1rem 7%;
    }

    h1 {
        margin: 0;
    }


</style>
<header
        class='header'
>
    <div class="header">
        <MediaQuery query="(min-width: 481px)" let:matches>
            {#if matches}
                <h1>
                    Joel Rindfleisch Dot Com
                </h1>
                {:else}
                    <h1>
                        Joel Rindfleisch
                    </h1>

            {/if}
        </MediaQuery>
    </div>
</header>