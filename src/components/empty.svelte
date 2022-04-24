<style lang="scss">
    :global(.prompt) {
        color: white;
    }

    :global(.cursor) {
        color: white;
        animation: blinkingText 1.5s infinite;
    }

    @keyframes blinkingText {
        0% {
            color: white;
        }
        25% {
            color: transparent;
        }
        50% {
            color: transparent;
        }
        100% {
            color: white;
        }
    }
</style>

<div>
    <span class='prompt'>> joelrindfleisch $ </span>
    <span class='cursor'>_</span>
</div>