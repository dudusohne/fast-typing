<template>
    <div class="stats-dash">
        <span class="text">{{ props.text }}</span>
        <p class="value">{{ props.value }}</p>
    </div>
</template>

<script setup lang="ts">
import { LocationQueryValue } from 'vue-router';

interface Props {
    text: string
    value?: LocationQueryValue | LocationQueryValue[]
}
const props = defineProps<Props>()
</script>

<style lang="scss">
.stats-dash {
    margin-left: 1rem;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;

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
</style>