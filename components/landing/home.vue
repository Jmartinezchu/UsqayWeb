<template>
    <div class="bg1">

        <div class="row">
            <div class="col-md-7">
                <div>
                    <img src="" alt="Usqay Sistema de negocios">
                </div>
            </div>
            <div class="col-md-5" style="display: flex; flex-direction: column; justify-content: center">
                <!-- <div> -->
                <h1>Usqay</h1>
                <div>
                    <h2>{{ country }}</h2>
                </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UsqayHome',
    props: {
        country: {
            type: String,
            default: 'Default content',
        },
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.bg1 {
    background-image: url('@/assets/img/component/bg1.png');
    height: 100vh;
    width: 100vw;
}
</style>