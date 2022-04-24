<script>
    import Empty from "./empty.svelte"
    import DateTooltip from "./date-tooltip.svelte"
</script>

<style lang="scss">
    .education:nth-of-type(1){
    span:nth-child(2) {
        color: darkgreen;
    }

    span:nth-child(3) {
        color: magenta;
    }
    }

    .education:nth-of-type(2) {
    span:first-child {
        color: dodgerblue;
    }

    span:nth-child(2) {
        color: darkred;
    }

    span:nth-child(3) {
        color: magenta;
    }
    }


</style>

<div>
    <span class='prompt'>> joelrindfleisch $ </span>
    <span class='prompt'>e</span>
    <br />
    <div class='bash-content education'>
        <DateTooltip epochDate=1450461600 /> |
        <span>NDSU</span> |
        <span>Masters of Software Engineering</span>
    </div>
    <div class='bash-content education'>
        <DateTooltip epochDate=1273856400 /> |
        <span>Iowa State University</span> |
        <span>Management Information Systems</span>
    </div>
    <Empty/>
</div>