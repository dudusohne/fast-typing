<template>
    <div class="container">
        <slot name="text"></slot>
       
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    position: fixed;
    margin-top: 12rem;
    max-width: 50rem;
    // z-index: 1;
}
</style>