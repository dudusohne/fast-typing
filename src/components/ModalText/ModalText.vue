<template>
    <div id="myModal" class="modal" v-show="props.isOpen">
        <!-- Modal content -->
        <div class="modal-content">
            <span style="color: #e7de79; font-size: 22px;">▷</span>
            <p style="font-size: 28px;">press <b style="color: #e7de79;">ENTER</b>  to start</p>
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
    background-color: rgba(0, 0, 0, 0.582);
    background-color: rgba(0, 0, 0, 0.596);
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
</style>