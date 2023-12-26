<template>
    <div v-if="loading"
        style="height:100vh ;margin: auto; display: flex; flex-direction: column; align-items: center;justify-content: center;">
        <img class="animate__animated animate__backInDown" src="@/assets/img/logo.svg" alt=""
            style="height: 50px; width: 100%;">
        <br><br>
        <div class="animate__animated animate__bounceIn">
            <span class="loader"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UsqayLoadingBar',

    data: () => ({
        loading: false
    }),
    methods: {
        start() {
            this.loading = true
        },
        finish() {
            this.loading = false
        }
    }
};
</script>

<style scoped>
.loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #242d7a;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

.loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-left: 4px solid #FF3D00;
    border-bottom: 4px solid transparent;
    animation: rotation 0.5s linear infinite reverse;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>