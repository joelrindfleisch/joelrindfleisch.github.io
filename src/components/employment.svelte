<script>
    import Empty from "./empty.svelte"
    import DateTooltip from "./date-tooltip.svelte"
</script>

<div>
    <span class='prompt'>> joelrindfleisch $ </span>
    <span class='prompt'>e</span>
    <br/>
    <div class='bash-content employment'>
        <DateTooltip epochDate=1627907400 /> |
        <span>Stash</span> |
        <span>Senior Software Engineer</span>
    </div>
    <div class='bash-content employment'>
        <DateTooltip epochDate=1559397600 /> |
        <span>Dwolla</span> |
        <span>Senior Software Engineer</span>
    </div>
    <div class='bash-content employment'>
        <DateTooltip epochDate=1440597600 /> |
        <span>John Deere</span> |
        <span>Senior Software Developer / Dev Lead</span>
    </div>
    <div class='bash-content employment'>
        <DateTooltip epochDate=1389020400 /> |
        <span>DuPont Pioneer</span> |
        <span>Senior Software Developer</span>
    </div>
    <div class='bash-content employment'>
        <DateTooltip epochDate=1304949600 /> |
        <span>ADP</span> |
        <span>Associate Application Developer</span>
    </div>
    <br/>
    <Empty/>
</div>

<style lang="scss">
    .employment:nth-of-type(1) {
    span:first-child {
        color: dodgerblue;
    }

    span:nth-child(2) {
        color: #009ceb;
    }

    span:nth-child(3) {
        color: magenta;
    }
    }
    .employment:nth-of-type(2) {
    span:first-child {
        color: dodgerblue;
    }

    span:nth-child(2) {
        color: darkorange;
    }

    span:nth-child(3) {
        color: magenta;
    }
    }

    .employment:nth-of-type(3) {
    span:first-child {
        color: dodgerblue;
    }

    span:nth-child(2) {
        color: darkgreen;
    }

    span:nth-child(3) {
        color: magenta;
    }
    }

    .employment:nth-of-type(4) {
    span:first-child {
        color: dodgerblue;
    }

    span:nth-child(2) {
        color: limegreen;
    }

    span:nth-child(3) {
        color: magenta;
    }
    }

    .employment:nth-of-type(5) {
    span:first-child {
        color: dodgerblue;
    }

    span:nth-child(2) {
        color: red;
    }

    span:nth-child(3) {
        color: magenta;
    }
    }

</style>
