<template>
    <div class="home">
        <div class="header">
            <span id="time" @click="openModalTimer"></span>
        </div>
        <MiddleText>
            <template #text>
                <div class="middle-text">
                    <p id="text-upper"></p>
                    <p class="back-text">{{ text }}</p>
                </div>
            </template>
        </MiddleText>
        <ModalText :is-open="modalStart" />
        <!-- <ModalTimer :is-open="modalTimer" /> -->
        <div id="myModal" class="modal-timer" v-show="modalTimer">
            <!-- Modal content -->
            <div class="modal-content">
                <input v-model="minutes" type="number" />
                <p>:</p>
                <input v-model="seconds" type="number" style="margin-left: 8px" />
                <div style="display: flex;flex-direction: column;">
                    <button style="color: green" @click="sendInputs(minutes, seconds)">V</button>
                    <button style="color: red" @click="!modalTimer">X</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, withDefaults } from 'vue'

import MiddleText from '../../components/MiddleText/MiddleText.vue';
import ModalText from '../../components/ModalText/ModalText.vue';
import ModalTimer from '../../components/ModalTimer/ModalTimer.vue';

const modalStart = ref<boolean>(false)
const modalTimer = ref<boolean>(false)

const minutes = ref(0);
const seconds = ref(60);

const text = 'lorem ipsum dolor sit amet consectetur adipisicing elit error temporibus accusamus saepe amet quos cumque optio eos quibusdam velit dicta maxime vitae repellat repudiandae est et eius perspiciatis quo earum'

onMounted(() => {
    //TODO: check if has a way to use this
    // const keyBoard: any = document.querySelector('.keyboard')

    let display = document.querySelector('#time');

    let textPrint = document.querySelector('#text-upper')

    let keyCount: number = -1;

    modalStart.value = true;
    window.addEventListener('keydown', (e: any) => {
        modalStart.value = false;
        modalTimer.value = true;
    });

    // startTimer(duration, display);

    // window.addEventListener('keypress', function (key: any) {
    //     keyCount++
    //     handleKeyEvent(key, textPrint, keyCount);
    // });
})

function handleKeyEvent(keypressed: any, textPrint: any, keyCount: number) {
    // console.log('tecla: ', keypressed.key);
    // console.log('texto: ', text[keyCount]);
    let redTextPrint = document.getElementById('text-upper')

    if (keypressed.key.toLowerCase() === text[keyCount]) {
        //@ts-ignore
        document.getElementById('text-upper').style.color = 'white';
        textPrint.textContent = textPrint.textContent + text[keyCount];
    } else {
        //@ts-ignore
        document.getElementById('text-upper').style.color = 'red';
        textPrint.textContent = textPrint.textContent + text[keyCount];
    }

}

function openModalTimer() {
    modalTimer.value = true
    console.log('open timer modal')
}

function sendInputs(minutes: any, seconds: any) {
    console.log('send')
    let duration = seconds.value * minutes.value;
    modalTimer.value = false;
    let timer = setInterval(() => {
        //@ts-ignore
        display.innerHTML = `${duration}`;
        duration--;
        if (duration < 0) {
            clearInterval(timer);
            modalTimer.value = false;
            modalStart.value = true;
            //@ts-ignore
            display.innerHTML = '0';
        }
    }, 1000);
}

function startTimer(duration: number, display: any) {
    let timer: number = duration, minutes, seconds;

    setInterval(function () {
        //@ts-ignore
        minutes = parseInt(timer / 60, 10)
        //@ts-ignore
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

    .middle-text {


        #text-upper {
            font-family: "DM Mono", sans-serif;
            font-weight: 900;
            font-size: 28px;
        }

        .back-text {
            font-family: "DM Mono", sans-serif;
            font-weight: 900;
            font-size: 28px;
            color: rgba(51, 51, 51, 0.719);
            margin-top: -4.05rem;
        }
    }

    .header {
        margin-top: 5rem;

        span {
            font-family: "Fira Code", monospace;
            font-size: 2rem;
            color: #e7de79;
        }
    }

    .modal-timer {
    display: block;
    position: fixed;
    z-index: 4;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.836);
    background-color: rgba(0, 0, 0, 0.863);

    .modal-content {
        display: flex;
        flex-direction: row;
        margin: 15% auto;
        padding: 20px;
        width: fit-content;
        justify-content: center;
        align-items: center;
        background-color: #191622;

        p {
            font-family: "Fira Code", monospace;
            font-size: 1.5rem;
            color: #ffffff;

            margin-left: 0.5rem;
        }

        input {
            height: 4rem;
            width: 4rem;
            background-color: #191622;
            border: 2px solid #fff;
        }

        button {
            /* background: none;
            border: none; */
            font-size: 24px;
            font-weight: bold;
            margin-left: 1rem;
        }
    }

    .close {
        color: #67e480;
        float: right;
        font-size: 23px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: rgb(24, 70, 13);
        text-decoration: none;
        font-size: 28px;
        cursor: pointer;
    }
}
}
</style>