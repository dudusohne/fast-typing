<template>
    <div class="stats">
        <span>Time's Up!</span>
        <div class="container">
            <div style="flex-direction: row; display: flex;">
                <StatsData text="CON" :value="CON" />
                <StatsData text="ACC" :value="ACC" />
                <StatsData text="ERR" :value="ERR" />
            </div>
            <div style="flex-direction: row; display: flex;">
                <StatsDash text="LETTERS" :value="lettersFinal" />
                <StatsDash text="TIME" :value="time" />
            </div>

        </div>
        <ResetSvg @click="restartAll()" style="margin-top: 5rem ;" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import StatsData from '../../components/StatsData/StatsData.vue';
import ResetSvg from '../../assets/reset-svg.vue';
import StatsDash from '../../components/StatsDash/StatsDash.vue'

function restartAll() {
    window.location.href = '/'
}

const route = useRoute()

const lettersFinal = ref(route.query.letters)
const time = ref(route.query.time)
const ACC = ref(route.query.acc)
const ERR = ref(route.query.err)
const CON = ref(route.query.con)
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