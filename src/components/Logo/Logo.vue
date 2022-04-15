<template>
    <div class="logo">
        <i class="fa fa-keyboard icon" aria-hidden="true"></i>
        <div style="display: flex; flex-direction: row;">
            <span class="fast">fast</span>
            <span class="typing">TYPING</span>
        </div>
    </div>
</template>
<style lang="scss">
.logo {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;

    .fast {
        font-family: "Fira Code", monospace;
        font-size: 39px;
        color: #e7de79;
        margin-bottom: 1rem;
        z-index: 12;

        font-style: italic;
        letter-spacing: 1px;
        margin-top: 5px;
    }

    .typing {
        font-family: "DM Mono", sans-serif;
        font-weight: 900;
        font-size: 42px;
        color: #ffffff;
        letter-spacing: 3px;
    }

    .icon {
        font-size: 28px;
        color: #e7de79;
        z-index: 12;
    }
}
</style>