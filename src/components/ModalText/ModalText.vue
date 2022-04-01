<template>
    <div id="myModal" class="modal" v-show="props.isOpen">
        <!-- Modal content -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
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
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.171);
    background-color: rgba(0, 0, 0, 0.4);
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>