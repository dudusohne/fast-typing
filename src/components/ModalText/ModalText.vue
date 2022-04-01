<template>
    <div id="myModal" class="modal" v-show="props.isOpen">
        <!-- Modal content -->
        <div class="modal-content">
            <span class="close">▷</span>
            <p>click or press any key to start</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface ModalProps {
    isOpen: boolean;
}

const props = defineProps<ModalProps>()

</script>

<style lang="scss" scoped>
.modal {
    display: block;
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.171);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    display: flex;
    margin: 15% auto;
    padding: 20px;
    width: 80%;
    justify-content: center;
    align-items: center;

    p { 
        font-family: "Fira Code", monospace;
        font-size: 1rem;
        color: #ffffff;

        margin-left: 0.5rem;
    }
}

.close {
    color: #67E480;
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