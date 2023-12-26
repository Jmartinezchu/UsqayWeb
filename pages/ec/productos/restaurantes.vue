<template>
    <div>
        <!-- home -->
        <div class="space_componet">
            <div class="row" style=" height:85vh">
                <div class="col-md-1" style="margin:auto"></div>
                <div class="col-md-5" style="margin:auto">
                    <div class="d-flex flex-column align-items-center animate__animated animate__backInLeft">
                        <h2 class="titleProduct">
                            <b><span style="color:var(--colorblue)">Usqay</span> Restaurantes</b>
                        </h2>
                        <p class="textProduct">Ideal para pollerías, bares, cevicherías, pubs,<br>
                            discotecas o cualquier negocio de venta de
                            comida <br> y bebidas con atención al público.</p>
                        <br>
                        <div class="animate__animated animate__fadeInLeft centerflexrow"
                            style="width: 300px; margin: auto; height: 15px;">
                            <div
                                style="width: 250px; margin: auto; height: 12px;background: var(--colorblue); border-radius: 20px;">
                            </div>
                            <span style="opacity: 0;">0</span>
                            <div
                                style="width: 50px; margin: auto; height: 12px;background: var(--colorusqay); border-radius: 20px;">
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-5">
                                <button @click="solicitarDemo('Restaurantes')" class="btn  animated-btn static">
                                    Solicitar Ahora
                                </button>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-5">
                                <button @click="solicitarDemo('Restaurantes')" class="btn animated-btn static"
                                    style="background-color: var(--colorblue) !important;">
                                    Ver Demo
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="col-md-6 animate__animated animate__backInDown" style="margin:auto">
                    <img style="width: 100%;" src="@/assets/img/imagenes/restaurante.png" width alt="Usqay">
                </div>
            </div>
        </div>
        <!-- end Home -->
        <!-- Nos nos recomenidan -->
        <LandingDiferencia />
        <!-- End Nos nos recomenidan -->
        <!-- home -->
        <div class="space_componet">
            <div class="animate__animated animate__fadeInLeft centerflexrow"
                style="width: 300px; margin: auto; height: 15px;">
                <div style="width: 250px; margin: auto; height: 12px;background: var(--colorblue); border-radius: 20px;">
                </div>
                <span style="opacity: 0;">0</span>
                <div style="width: 50px; margin: auto; height: 12px;background: var(--colorusqay); border-radius: 20px;">
                </div>
            </div>
            <div class="row">
                <!-- <div class="col-md-1" style="margin:auto"></div> -->
                <div class="col-md-5 animate__animated animate__backInDown" style="margin:auto">
                    <img style="width: 100%;" src="@/assets/img/imagenes/restaurante2.png" width alt="Usqay">
                </div>
                <LandingNoseligen />

            </div>
        </div>
        <!-- end Home -->
        <section id="pricing" class="section">
            <div>
                <!-- Start Row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="pricing-text section-header text-center ">
                            <div>
                                <h2 class="section-title"
                                    style="color: var(--colorblue);font-size: 4em; font-weight: 100 !important">Nuestros
                                </h2>
                                <h2 class="section-title"
                                    style="color: var(--colorusqay);font-size: 4em; font-weight: 800;">Planes
                                </h2>
                                <div class="centerflexrow bg7">
                                    <div style="width: 120px; height:50px"></div>
                                    <p
                                        style="background-color: var(--colorblue); color:#fff;padding:3px 6px; width: 130px; font-weight: 600;">
                                        Anualidad
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="bg7">
                    l
                </div> -->
                <EcuadorPrices/>
                <!-- End Row -->
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'UsqayRestaurantes',
    layout: 'home',
    data() {
        return {
            numberusqay: 943741512,
           
        };
    },

    mounted() {

    },

    methods: {
        solicitarDemo(product, plan) {
            console.log(product)
            let num = this.numberusqay;
            let mensaje = '';
            if (plan === undefined) {
                mensaje = `Me brindas información del Sistema Usqay ${product}`
            } else {
                mensaje = `Me brindas información del Sistema Usqay ${product}-${plan}`
            }

            window.open(`https://api.whatsapp.com/send?phone=51${num}&text=${mensaje}`, "Whatsapp")
        }
    },
};
</script>

<style scoped>
.circleRecom p {
    color: var(--colorblue);
    font-weight: 600;
    background-color: #fff;
}
</style>