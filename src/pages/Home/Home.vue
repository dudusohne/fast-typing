<template>
    <div class="home">
        <!-- header -->
        <div class="header">
            <span id="time"></span>
        </div>

        <!-- middle text -->
        <MiddleText>
            <template #text>
                <div class="middle-text">
                    <p id="text-upper"></p>
                    <p class="back-text">{{ text }}</p>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <ResetSVG @click="restartAll()" style="margin-top: 20rem;" />
                </div>
            </template>
        </MiddleText>

        <div class="dashboard">
            <div class="left-stats">
                <span v-show="wrongLetters > 0">WRONG:</span>
                <p id="wrong"></p>
            </div>
            <div class="right-stats">
                <span v-show="correctLetters > 0">CORRECT:</span>
                <p id="right"></p>
            </div>
        </div>

        <ModalStart :is-open="modalStart" />

        <!-- modal-timer -->
        <div id="myModal" class="modal-timer" v-show="modalTimer">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="modal-content-header">Defina um novo tempo abaixo</span>
                <div class="form-timer">
                    <input v-model="minutes" maxlength="2" type="number" class="timer-input" />
                    <p>:</p>
                    <input v-model="seconds" maxlength="2" type="number" class="timer-input" style="margin-left: 8px" />
                    <div style="display: flex; flex-direction: column;">
                        <button style="color: green; background: none; border: none"
                            @click="sendInputs(minutes, seconds)">
                            <ConfSvg />
                        </button>
                        <button style="color: red; background: none; border: none"
                            @click="sendInputs(minutes, seconds)">
                            <DeclSvg />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Logo />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import MiddleText from '../../components/MiddleText/MiddleText.vue';
import ModalStart from '../../components/ModalStart/ModalStart.vue';
import Logo from '../../components/Logo/Logo.vue';
import ResetSVG from '../../assets/reset-svg.vue';
import DeclSvg from '../../assets/decl-svg.vue';
import ConfSvg from '../../assets/conf-svg.vue';

const router = useRouter()

const modalStart = ref<boolean>(true)
const modalTimer = ref<boolean>(false)

const minutes = ref<number>(0);
const seconds = ref<number>(60);

const wrongLetters = ref<number>(0);
const correctLetters = ref<number>(0);
const lettersTyped = ref<number>(0);
const totalLetters = ref<number>(0);
const letters = ref();

const text = 'lorem ipsum dolor sit amet consectetur adipisicing eli error temporibus accusamus saepe amet quos cumque opti eos quibusdam velit dicta maxime vitae repellat repudi andae est et eius perspiciatis quo earum'

const firstEvent = ref()
const secEvent = ref()

onMounted(() => {
    firstEvent.value = window.addEventListener('keydown', (e: any) => {
        if (e.key == 'Enter') {
            if (!modalTimer.value && modalStart.value) {
                openModalTimer()
            }
        }
    });
})

function openModalTimer() {
    modalStart.value = false;
    modalTimer.value = true;
}

function handleKeyEvent(keypressed: any, textPrint: HTMLBaseElement, keyCount: number) {
    lettersTyped.value++;

    let wrongPrint = document.querySelector('#wrong')
    let rightPrint = document.querySelector('#right')


    if (keypressed.key.toLowerCase() === text[keyCount]) {
        //@ts-ignore
        document.getElementById('text-upper').style.color = 'white';
        textPrint.textContent = textPrint.textContent + text[keyCount];
        correctLetters.value++;

        //@ts-ignore
        rightPrint.textContent = correctLetters.value;


    } else {
        //@ts-ignore
        document.getElementById('text-upper').style.color = 'red';
        textPrint.textContent = textPrint.textContent + text[keyCount];
        wrongLetters.value++;

        //@ts-ignore
        wrongPrint.textContent = wrongLetters.value;

        console.log(text[keyCount])
    }

    if (keyCount >= text.length) {
        sendStats()
    }
}

function sendInputs(minutes: any, seconds: any) {
    let duration = 0;

    if (minutes > 0) {
        duration = (60 * minutes) + seconds;
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

    secEvent.value = window.addEventListener('keydown', (e: any) => {
        if (e.key == 'Backspace') {
            restartAll()
        }
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
            sendStats()
        }

    }, 1000);
}

function sendStats() {
    totalLetters.value = text.length;
    letters.value = `${correctLetters.value}/${totalLetters.value}`;

    //letterCorrect * 100 / totalLetters = % acerto ACC
    const ACC = (correctLetters.value * 100) / totalLetters.value;
    //letterError * 100 / totalLetters = % erro ERR
    const ERR = (100 * wrongLetters.value) / totalLetters.value;
    //lettersTyped * 100 / totalLetters = % consistency CON
    const CON = (100 * lettersTyped.value) / totalLetters.value;

    router.push({
        path: '/stats',
        query: {
            letters: letters.value,
            time: `${minutes.value}:${seconds.value}`,
            acc: ACC,
            err: ERR,
            con: CON
        }
    })

}

function restartAll() {
    window.location.reload();
}
</script>

<style scoped lang="scss">
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-wrap: break-word;
    height: 80vh;

    .dashboard {
        display: flex;
        width: 70%;
        justify-content: space-between;
        flex-direction: row;

        .right-stats {
            display: flex;
            flex-direction: column;
            align-items: center;

            width: 7rem;
            height: 4.5rem;

            span {
                font-size: 0.7rem;
                font-weight: bold;
                color: rgb(47, 167, 36);
            }

            p {
                text-align: center;
                margin: 0;

                font-size: 1.5rem;
                font-weight: bold;
                font-family: "Fira Code", monospace;

                color: rgb(47, 167, 36);
            }
        }

        .left-stats {
            display: flex;
            flex-direction: column;
            align-items: center;

            width: 7rem;
            height: 4.5rem;

            span {
                font-size: 0.7rem;
                font-weight: bold;
                color: rgb(155, 30, 30);
            }

            p {
                text-align: center;
                margin: 0;

                font-size: 1.5rem;
                font-weight: bold;
                font-family: "Fira Code", monospace;

                color: rgb(155, 30, 30);
            }
        }
    }

    .middle-text {
        display: flex;
        align-items: center;
        justify-content: center;

        #text-upper {
            position: fixed;
            width: 57rem;
            top: 15rem;
            font-family: "DM Mono", sans-serif;
            font-weight: 900;
            font-size: 28px;
        }

        .back-text {
            position: fixed;
            width: 57rem;
            top: 15rem;
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
                font-family: "Fira Code", monospace;
            }

            .form-timer {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                align-content: center;
                margin-top: 1.4rem;

                p {
                    font-family: "Fira Code", monospace;
                    font-size: 1.5rem;
                    color: #ffffff;

                    margin-left: 0.5rem;
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