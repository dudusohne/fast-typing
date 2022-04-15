<template>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" @click="$emit('click')" class="decl">
        <path
            d="M13 1L1 13"
            stroke="#E96379"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M1 1L13 13"
            stroke="#E96379"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>

<style scoped lang="scss">
.decl {
    &:hover {
        cursor: pointer;
        transform: translateY(-1.8px);
        transition: transform 0.1s ease-in-out;

        path {
            stroke: #ffffff;
        }
    }
}
</style>