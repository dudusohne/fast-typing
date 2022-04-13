<template>
    <div class="home">
        <div class="header">
            <span id="time"></span>
        </div>

        <MiddleText>
            <template #text>
                <div>
                    <span id="text-upper" style="color: red;"></span>
                    <p class="back-text">{{ text }}</p>
                </div>
            </template>
        </MiddleText>
        <ModalText :is-open="modalOpen" />
        <ModalTimer :is-open="false" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, withDefaults } from 'vue'

import MiddleText from '../../components/MiddleText/MiddleText.vue';
import ModalText from '../../components/ModalText/ModalText.vue';
import ModalTimer from '../../components/ModalTimer/ModalTimer.vue';

interface HomeProps {
    letterCount: number;
}

const props = withDefaults(defineProps<HomeProps>(), {
    letterCount: 0,
})

const modalOpen = ref<boolean>(false)

const text = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus accusamus saepe amet quos cumque optio eos quibusdam velit dicta, maxime vitae repellat repudiandae est et, eius perspiciatis quo earum.'

onMounted(() => {
    // const keyBoard: any = document.querySelector('.keyboard')
    let duration = 60 * 1;
    let display = document.querySelector('#time');

    let textPrint = document.querySelector('#text-upper')



    let keyCount: number = -1;

    startTimer(duration, display);

    window.addEventListener('keypress', function (key: any) {
        keyCount++
        handleKeyEvent(key, textPrint, keyCount);
    });
})

function handleKeyEvent(keypressed: any, textPrint: any, keyCount: number) {
    console.log('tecla: ', keypressed.key);
    console.log('texto: ', text[keyCount]);
    let redTextPrint = document.getElementById('text-upper')

    if (keypressed.key.toLowerCase() === text[keyCount]) {
        document.getElementById('text-upper').style.color = 'white';
        textPrint.textContent = textPrint.textContent + text[keyCount];
    } else {
        document.getElementById('text-upper').style.color = 'red';
        textPrint.textContent = textPrint.textContent + text[keyCount];
    }

}

//watch to get any keypress and show letter by letter from the setted text

function openModalTimer() {
    console.log('open timer modal')
}


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