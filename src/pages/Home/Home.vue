<template>
    <div class="home">
        <div class="header">
            <span id="time"></span>
        </div>
        <input type="textarea" class="input" />

        <MiddleText />
        <ModalText :is-open="modalOpen" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import MiddleText from '../../components/MiddleText/MiddleText.vue';
import ModalText from '../../components/ModalText/ModalText.vue';

const modalOpen = ref<boolean>(false)

onMounted(() => {
    let duration = 60 * 2;
    let display = document.querySelector('#time');

    startTimer(duration, display);
})


function startTimer(duration: number, display: any) {
    let timer: number = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }

    }, 1000);
}
</script>

<style scoped lang="scss">
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-wrap: break-word;

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
        /* background-color: rgba(226, 188, 107, 0.158); */
        background: none;
        color: rgb(255, 255, 255);
        font-family: "Inter", sans-serif;
        font-size: 25px;

        z-index: 5;

        &:focus {
            outline: none;
        }
    }
}
</style>