<template>
    <div class="home">
        <!-- header -->
        <div class="header">
            <span id="time" @click="openModalTimer"></span>
        </div>

        <!-- middle text -->
        <MiddleText>
            <template #text>
                <div class="middle-text">
                    <p id="text-upper"></p>
                    <p class="back-text">{{ text }}</p>
                </div>
                <i
                    class="fa fa-arrow-circle-left"
                    style="color: #e7de79; font-size: 28px; margin-top: 20rem;"
                    aria-hidden="true"
                    @click="restartAll()"
                ></i>
            </template>
        </MiddleText>

        <ModalText :is-open="modalStart" />

        <!-- modal-timer -->
        <div id="myModal" class="modal-timer" v-show="modalTimer">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="modal-content-header">Defina um novo tempo abaixo</span>
                <div class="form-timer">
                    <input v-model="minutes" maxlength="2" type="number" class="timer-input" />
                    <p>:</p>
                    <input
                        v-model="seconds"
                        maxlength="2"
                        type="number"
                        class="timer-input"
                        style="margin-left: 8px"
                    />
                    <div style="display: flex;flex-direction: column;">
                        <button style="color: green" @click="sendInputs(minutes, seconds)">V</button>
                        <button style="color: red" @click="sendInputs(minutes, seconds)">X</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { HtmlHTMLAttributes, onBeforeMount, onMounted, ref, watch, withDefaults } from 'vue'

import MiddleText from '../../components/MiddleText/MiddleText.vue';
import ModalText from '../../components/ModalText/ModalText.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const modalStart = ref<boolean>(false)
const modalTimer = ref<boolean>(false)

const minutes = ref<number>(0);
const seconds = ref<number>(60);

const text = 'lorem ipsum dolor sit amet consectetur adipisicing elit error temporibus accusamus saepe amet quos cumque optio eos quibusdam velit dicta maxime vitae repellat repudiandae est et eius perspiciatis quo earum'

onBeforeMount(() => {
    //TODO: check if has a way to use this
    // const keyBoard: any = document.querySelector('.keyboard')
    // let display = document.querySelector('#time');

    modalStart.value = true;

    window.addEventListener('keydown', (e: any) => {
        if (e.key == 'Enter') {
            modalStart.value = false;
            modalTimer.value = true;
        }
    });
})

function restartAll() {
    window.location.reload();
}

function handleKeyEvent(keypressed: any, textPrint: HTMLBaseElement, keyCount: number) {
    // let redTextPrint = document.getElementById('text-upper')

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
}

function sendInputs(minutes: any, seconds: any) {
    let duration = 0;

    if (minutes > 1) {
        duration = seconds * minutes;
    } else {
        duration = seconds
    }
    modalTimer.value = false;

    let textPrint = document.querySelector('#text-upper')
    let keyCount: number = -1;

    window.addEventListener('keypress', function (key: any) {
        keyCount++
        //@ts-ignore
        handleKeyEvent(key, textPrint, keyCount);
    });

    let display = document.querySelector('#time');

    startTimer(duration, display);
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
            clearInterval(duration);
            router.push('/stats')
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
    height: 80vh;

    .middle-text {
        #text-upper {
            position: fixed;
            width: 57rem;
            top: 15rem;
            right: 23rem;
            font-family: "DM Mono", sans-serif;
            font-weight: 900;
            font-size: 28px;
        }

        .back-text {
            position: fixed;
            width: 57rem;
            top: 15rem;
            right: 23rem;
            font-family: "DM Mono", sans-serif;
            font-weight: 900;
            font-size: 28px;
            color: rgba(51, 51, 51, 0.719);
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
            flex-direction: column;
            margin: 15% auto;
            padding: 20px;
            width: fit-content;
            justify-content: center;
            align-items: center;
            background-color: #191622;
            border-radius: 12px;

            .modal-content-header {
                font-size: 1rem;
                color: #e7de79;
                justify-content: center;
                align-items: center;
            }

            .form-timer {
                display: flex;
                flex-direction: row;
                margin-top: 1.4rem;
                
                p {
                    font-family: "Fira Code", monospace;
                    font-size: 1.5rem;
                    color: #ffffff;

                    margin-left: 0.5rem;
                }

                button {
                    background: none;
                    border: none;
                    font-size: 24px;
                    font-weight: bold;
                    margin-left: 1rem;

                    &:hover {
                        font-size: 26px;
                    }
                }

                .timer-input {
                    height: 4rem;
                    width: 4rem;
                    text-align: center;
                    justify-content: center;
                    background-color: #191622;
                    color: rgb(216, 216, 216);
                    border: 3px solid rgb(216, 216, 216);
                    border-radius: 2px;
                    font-size: 38px;
                    font-weight: bold;
                    font-family: "Fira Code", monospace;

                    &:focus {
                        color: rgb(235, 210, 69);
                        border-color: rgb(235, 210, 69);
                        opacity: 0.8;
                    }
                }
            }

            input[type="number"]::-webkit-inner-spin-button,
            input[type="number"]::-webkit-outer-spin-button {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                margin: 0;
            }
        }
    }
}
</style>