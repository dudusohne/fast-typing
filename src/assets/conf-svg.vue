<template>
    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"
        @click="$emit('click')" class="conf">
        <path
            d="M21 11.08V12C20.9988 14.1564 20.3005 16.2547 19.0093 17.9818C17.7182 19.709 15.9033 20.9725 13.8354 21.5839C11.7674 22.1953 9.55726 22.1219 7.53447 21.3746C5.51168 20.6273 3.78465 19.2461 2.61096 17.4371C1.43727 15.628 0.879791 13.4881 1.02168 11.3363C1.16356 9.18455 1.99721 7.13631 3.39828 5.49706C4.79935 3.85781 6.69279 2.71537 8.79619 2.24013C10.8996 1.7649 13.1003 1.98232 15.07 2.85999"
            stroke="#67E480" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21 4L11 14.01L8 11.01" stroke="#67E480" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
</template>

<style lang="scss">
.conf {
    &:hover {
        cursor: pointer;
        transform: translateY(-1.8px);
        transition: transform 0.1s ease-in-out;

        path {
            stroke: #ffffff;
        }
    }
}
</style>
