<template>
    <div>
        <!-- home -->
        <div class="space_componet">
            <div class="row bg1" style=" height:85vh">
                <div class="col-md-8 animate__animated animate__backInDown" style="margin:auto">
                    <img style="width: 100%;" src="@/assets/img/imagenes/dispositivos.png" width alt="Usqay">
                </div>
                <div class="col-md-3" style="margin:auto">
                    <div class="text-center d-flex flex-column align-items-center animate__animated animate__backInLeft">
                        <h1 class="titleGeneral">
                            <b>Usqay</b>
                        </h1>
                        <h3 class="titlePais">Perú {{ year }}</h3>
                        <p class="titletext">Controla, simplifica y <br> crece con Usqay.</p>
                        <br><br>

                        <button @click="handleButtonClick, solicitarDemo()" @mouseover="handleButtonHover(true)"
                            @mouseout="handleButtonHover(false)"
                            :class="{ 'btn-primary': !isButtonStatic, 'static': isButtonStatic, 'animated-btn': isButtonAnimated }"
                            class="btn">
                            Solicitar demo
                        </button>

                    </div>
                </div>
                <div class="col-md-1" style="margin:auto"></div>
            </div>
            <div class="row animate__animated animate__bounceInLeft">
                <div class="col-md-1 element1paises"></div>
                -
                <div class="col-md-4 element2paises">
                    <p class="textpaises">Más de <span style="color:var(--colorusqay); font-weight: bold">2000</span>
                        Clientes en
                        latinoamerica</p>
                </div>
                <div class="element3paises"></div>
                <div class="col-md-5" style="margin-top:0; padding-top: 5px;">
                    <img style="width:40px;" src="@/assets/img/iconos/Recurso 1@3x.png" alt="Usqay">
                    <img style="width:40px;" src="@/assets/img/iconos/Recurso 2@3x.png" alt="Usqay">
                    <img style="width:40px;" src="@/assets/img/iconos/Recurso 3@3x.png" alt="Usqay">
                    <img style="width:40px;" src="@/assets/img/iconos/Recurso 4@3x.png" alt="Usqay">
                </div>
            </div>
        </div>
        <!-- End Home -->
        <!-- Que es Usqay -->
        <div class="wow fadeIn space_componet" data-wow-duration="2s" data-wow-delay="0.5s">
            <h2 class="animate__animated animate__fadeInRight titleGeneral" style="font-size:50px">¿Que es Usqay?</h2>
            <br>
            <p style="text-align:center; font-size:25px" class="animate__animated animate__fadeInLeft" data-aos="fade-up">
                Somos un sistema de acompañamiento en el proceso <br>
                de transformación digital de las empresas
            </p>
            <br>
            <div class="animate__animated animate__fadeInLeft"
                style="width: 300px; margin: auto; height: 5px;background: var(--colorusqay);"></div>
            <br>
            <LandingMvv />

        </div>

        <!-- end Que es Usqay -->
        <!-- Productos -->
        <PeruProducts />
        <!-- End productos -->
        <!-- Nos eligen -->
        <div class="wow fadeIn space_componet " data-wow-duration="2s" data-wow-delay="0.5s">
            <!-- <div class=""></div> -->
            <div class="bg3">
                <h2 class=" animate__animated animate__fadeInRight titleGeneral" style="font-size:50px">¿Por que nos eligen?
                </h2>
                <br>
                <div class="animate__animated animate__fadeInLeft"
                    style="width: 300px; margin: auto; height: 5px;background: var(--colorusqay);"></div>
            </div>
            <br>
            <div class="container-fluid centerflexcol ">
                <div class="row">
                    <div class="circleElige">
                        <img src="@/assets/img/iconos/recurso 30@3x.png" alt="Usqay nos eligen">
                        <p>INTERFAZ SIMPLE E INTUITIVA</p>
                    </div>
                    <div class="circleElige">
                        <img src="@/assets/img/iconos/recurso 29@3x.png" alt="Usqay nos eligen">
                        <p>MAYOR CONTROL</p>
                    </div>
                    <div class="circleElige">
                        <img src="@/assets/img/iconos/recurso 28@3x.png" alt="Usqay nos eligen">
                        <p>CONSTANTE MEJORA</p>
                    </div>
                    <div class="circleElige">
                        <img src="@/assets/img/iconos/recurso 27@3x.png" alt="Usqay nos eligen">
                        <p>DESDE CUALQUIER LUGAR</p>
                    </div>
                    <div class="circleElige">
                        <img src="@/assets/img/iconos/recurso 26@3x.png" alt="Usqay nos eligen">
                        <p>SEGURIDAD</p>
                    </div>
                </div>
                <div class="row">
                    <div class="circleElige">
                        <img src="@/assets/img/iconos/recurso 25@3x.png" alt="Usqay nos eligen">
                        <p>DESDE CUALQUIER DISPOSITIVO</p>
                    </div>
                    <div class="circleElige">
                        <img src="@/assets/img/iconos/recurso 24@3x.png" alt="Usqay nos eligen">
                        <p>MÁS TIEMPO PARA TI</p>
                    </div>
                    <div class="circleElige">
                        <img src="@/assets/img/iconos/recurso 23@3x.png" alt="Usqay nos eligen">
                        <p>PLANES ACCESIBLES</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End nos eligen -->
        <!-- Nos nos recomenidan -->
        <div id="testimonios" class="wow fadeIn space_componet " data-wow-duration="2s" data-wow-delay="0.5s">
            <div class="bg4 flexcentercol">
                <div class="cardnosrecomiendan">
                    <!-- jsjjs -->
                    <h2 class=" animate__animated animate__fadeInRight titleGeneral" style="font-size:25px">NUESTROS
                        CLIENTES NOS RECOMIENDAN
                    </h2>
                    <br>
                    <div class="container-fluid centerflexcol ">
                        <div class="row">
                            <div class="circleRecom">
                                <img src="@/assets/img/iconos/recurso 16@3x.png" alt="Usqay nos eligen">
                                <h6 class="titlenumbercard">2000+</h6>
                                <p>NEGOCIOS ACTIVOS</p>
                            </div>
                            <div class="circleRecom">
                                <img src="@/assets/img/iconos/recurso 17@3x.png" alt="Usqay nos eligen">
                                <h6 class="titlenumbercard">1400+</h6>
                                <p>USQAY RESTAURANT</p>
                            </div>
                            <div class="circleRecom">
                                <img src="@/assets/img/iconos/recurso 18@3x.png" alt="Usqay nos eligen">
                                <h6 class="titlenumbercard">400+</h6>
                                <p>USQAY POS</p>
                            </div>
                            <div class="circleRecom">
                                <img src="@/assets/img/iconos/recurso 19@3x.png" alt="Usqay nos eligen">
                                <h6 class="titlenumbercard">100+</h6>
                                <p>USQAY HOTELES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
        </div>
        <!-- End Nos nos recomenidan -->
        <!-- Testimonios -->
        <PeruTestimonios />
        <!-- end Testimonios -->
        <!-- clientes -->
        <PeruClientes />
        <!-- End clientes -->
        <!-- Preguntas frecuentes -->
        <PeruPreguntas />
        <!-- end preguntas frecuentes -->
        <!-- Contacto -->
        <div class="wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s">
            <!-- <div class=""></div> -->
            <PeruContact />

        </div>
        <br><br><br><br>
        <!-- end Contacto -->
        <!-- {{ this.$route.name }} -->

    </div>
</template>

<script>
export default {
    name: 'UsqayIndex',
    layout: 'home',
    data() {
        return {
            isButtonStatic: false,
            isButtonAnimated: false,
            numberusqay: '51943741512',
            year: null,
        };
    },

    mounted() {
        this.year = new Date().getFullYear()

        // console.log(this.$route);
    },

    methods: {
        handleButtonClick() {
            this.isButtonStatic = true;
        },
        handleButtonHover(isHovered) {
            this.isButtonStatic = isHovered;
            this.isButtonAnimated = isHovered;
        },
        solicitarDemo(product) {
            console.log(product)
            let num = this.numberusqay;
            let mensaje = '';
            if (product === undefined) {
                mensaje = `Me brindas información del Sistema Usqay`
            } else {
                mensaje = `Me brindas información del Sistema Usqay ${product}`
            }

            window.open(`https://api.whatsapp.com/send?phone=${num}&text=${mensaje}`, "Whatsapp")
        }
    },
};
</script>

<style></style>