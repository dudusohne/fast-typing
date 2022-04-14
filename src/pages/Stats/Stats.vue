<template>
    <div class="stats">
        <span>Time's Up!</span>
        <div class="container">
            <div style="flex-direction: row; display: flex;">
                <StatsData text="CON" value="70%" />
                <StatsData text="ACC" value="90%" />
                <StatsData text="LPM" value="390" />
            </div>
            <div style="flex-direction: row; display: flex;">
                <StatsData text="LETTERS" value="390/460" />
                <StatsData text="TIME" value="01:00" />
            </div>

        </div>
        <i class="fa fa-arrow-circle-left" style="color: #e7de79; font-size: 28px; margin-top: 2rem;" aria-hidden="true" @click="restartAll()"></i>
    </div>
</template>

<script setup lang="ts">
import StatsData from '../../components/StatsData/StatsData.vue';

interface StatsProps {
    letterError: number;
    letterFind: number;
}

function restartAll() {
    window.location.href = '/'
}
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
        margin-bottom: 5rem;
    }

    .container {
        align-items: center;
        justify-content: center;
        height: fit-content;
    }
}
</style>