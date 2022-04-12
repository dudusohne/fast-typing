<template>
    <div class="stats">
        <span>Time's Up!</span>
        <div class="container">
            <div style="flex-direction: row; display: flex;">
                <StatsData text="ACC" value="90%" />
                <StatsData text="ACC" value="90%" />
                <StatsData text="ACC" value="90%" />
            </div>
            <div style="flex-direction: row; display: flex;">
                <StatsData text="ACC" value="90%" />
                <StatsData text="ACC" value="90%" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import StatsData from '../../components/StatsData/StatsData.vue';
</script>

<style lang="scss">
.stats {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 97vh;

    span {
        font-family: "Fira Code", monospace;
        font-size: 39px;
        color: #e7de79;
        margin-bottom: 7rem;
    }

    .container {
        align-items: center;
        justify-content: center;
        height: fit-content;
    }
}
</style>