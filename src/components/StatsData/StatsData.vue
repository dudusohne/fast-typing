<template>
    <div class="stats-data">
        <span class="text">{{ props.text }}</span>
        <p class="value">{{ props.value }}</p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    text: string
    value?: string | number
}
const props = defineProps<Props>()
</script>

<style lang="scss">
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
</style>