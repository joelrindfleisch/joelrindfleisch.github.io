<script>
    import Empty from "./empty.svelte"
</script>

<div>
    <span class='prompt'>> joelrindfleisch $ </span>
    <span class='prompt'>c</span>
    <br />
    <div class='bash-content contact'>
        <span>LinkedIn</span> |
        <span><a href='https://www.linkedin.com/in/joelrindfleisch' target='_blank'>https://www.linkedin.com/in/joelrindfleisch</a></span>
    </div>
    <div class='bash-content contact'>
        <span>Twitter</span> |
        <span><a href='https://twitter.com/rindfleisch' target='_blank'>https://twitter.com/rindfleisch</a></span>
    </div>
    <Empty/>
</div>

<style lang="scss">
    .contact {
        span {
            color: dodgerblue;

            a {
                color: #71eeb8;
            }
        }
    }
</style>