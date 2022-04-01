<template>
    <div class="home">
        <div class="header">
            <span>00:00</span>
        </div>
        <input type="textarea" class="input" />

        <MiddleText />
        <ModalText :is-open="true" />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import MiddleText from '../../components/MiddleText/MiddleText.vue';
import ModalText from '../../components/ModalText/ModalText.vue';

onMounted(() => {
    console.log('mounted');
})

</script>

<style scoped lang="scss">
.home {
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
        margin-top: 5rem;

        span {
            font-family: "Fira Code", monospace;
            font-size: 2rem;
            color: #e7de79;
        }
    }

    input {
        width: 50rem;
        height: 9.6rem;
        margin-top: 2rem;
        padding: 0 1rem;

        border: none;
        border-radius: 0.5rem;
        background-color: rgba(226, 188, 107, 0.158);
        /* background: none; */
        color: rgb(255, 255, 255);
        font-family: "Inter", sans-serif;
        font-size: 25px;

        z-index: 5;
        overflow-x: auto;

        &:focus {
            outline: none;
        }
    }
}
</style>