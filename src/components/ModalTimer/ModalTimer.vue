<template>
    <div id="myModal" class="modal-timer" v-show="props.isOpen">
    <!-- modal header -->
    <span>Define um novo tempo abaixo ou continue:</span>
        <!-- Modal content -->
        <div class="modal-content">
            <input v-model="props.minutes" type="number"/>
            <p>:</p>
            <input v-model="props.seconds" type="number" style="margin-left: 8px" />
            <div style="display: flex;flex-direction: column;">
                <button style="color: green">V</button>
                <button style="color: red" :click="props.decline">X</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface ModalProps {
    isOpen: boolean;
    minutes: number;
    seconds: number;
    confirm: boolean;
    decline: boolean;
}

const props = defineProps<ModalProps>()

</script>

<style lang="scss" scoped>
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
}

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
        background: none;
        border: none;
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
</style>