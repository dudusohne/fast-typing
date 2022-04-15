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
                <StatsData text="LETTERS" :value="lettersFinal" />
                <StatsData text="TIME" :value="time" /> 
            </div>

        </div>
        <i class="fa fa-arrow-circle-left" style="color: #e7de79; font-size: 28px; margin-top: 2rem;" aria-hidden="true"
            @click="restartAll()"></i>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import StatsData from '../../components/StatsData/StatsData.vue';

function restartAll() {
    window.location.href = '/'
}

const route = useRoute()

const lettersFinal = ref(route.query.letters)
const letterError = ref(route.query.letterError)
const letterFind = ref(route.query.letterFind)
const time = ref(route.query.time)
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

        .stats-data {
            margin-left: 1rem;
            justify-content: center;
            align-items: flex-start;

            .text {
                font-family: "DM Mono", sans-serif;
                font-weight: 900;
                font-size: 37px;
                color: #ffffff;
            }

            .value {
                font-family: "Fira Code", monospace;
                font-size: 32px;
                color: #e7de79;
                margin: 0;
            }
        }
    }
}
</style>