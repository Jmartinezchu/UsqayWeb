<template>
    <div>

        <div class="row" style=" height:200px">
            <div class="col-md-4 animate__animated animate__backInDown" style="margin:auto">
                <div class="text-center d-flex flex-column align-items-center animate__animated animate__backInLeft">
                    <nuxt-link :to="`/${code}`"><img src="@/assets/img/logo.svg" alt="Usqay"
                            style="height: 50px; width: 100%;"></nuxt-link>
                    <br>
                    <div style="display: flex;width: 30%; justify-content: space-evenly;">
                        <a @click="RedWhatsappp()">
                            <img class="imgredes" src="@/assets/img/iconos/Recurso 31@.png" alt="Redes Usqay"
                                style="height: 30px;">
                        </a>
                        <a @click="RedInsta()"><img class="imgredes" src="@/assets/img/iconos/Recurso32@.png"
                                alt="Redes Usqay" style="height: 30px;"></a>
                        <a @click="RedFace()"><img class="imgredes" src="@/assets/img/iconos/Recurso33@.png"
                                alt="Redes Usqay" style="height: 30px;"></a>
                    </div>
                </div>
            </div>
            <div class="col-md-8 curved-container">
                <div class="text-center animate__animated animate__backInLeft curved-content">
                    <div class="row">
                        <div style="transform: skewX(25deg)" class=" col-md-3">
                            <h6 class="titlefooter colorfooter">
                                Empresa
                            </h6>
                            <div>
                                <p><nuxt-link :to="`/${this.code}/empresa#somos`" class="colorfooter">¿Quienes
                                        Somos?</nuxt-link>
                                </p>
                                <p><nuxt-link :to="`/${this.code}/empresa#mision`" class="colorfooter">Mision</nuxt-link>
                                </p>
                                <p><nuxt-link :to="`/${this.code}/empresa#clientes`"
                                        class="colorfooter">Clientes</nuxt-link>
                                </p>
                                <p><nuxt-link :to="`/${this.code}#testimonios`" class="colorfooter">Testimonios</nuxt-link>
                                </p>
                                <p><nuxt-link :to="`/${this.code}/empresa#teams`" class="colorfooter">Equipo</nuxt-link>
                                </p>
                            </div>

                        </div>
                        <div style="transform: skewX(25deg)" class=" col-md-3">
                            <h6 class="titlefooter colorfooter">
                                Productos
                            </h6>
                            <div>
                                <p><nuxt-link :to="`/${this.code}/productos/restaurantes`"
                                        class="colorfooter">Restaurante</nuxt-link></p>
                                <p><nuxt-link :to="`/${this.code}/productos/pos`" class="colorfooter">Pos</nuxt-link></p>
                                <p><nuxt-link :to="`/${this.code}/productos/hoteles`"
                                        class="colorfooter">Hoteles</nuxt-link></p>
                                <p><a class="colorfooter" @click="RedFact()">Facturación Electronica</a></p>
                            </div>

                        </div>
                        <div style="transform: skewX(25deg)" class=" col-md-3">
                            <h6 class="titlefooter colorfooter">
                                Información
                            </h6>
                            <div>
                                <p><nuxt-link :to="`/${this.code}/contacto`" class="colorfooter">Contacto</nuxt-link></p>
                                <p><a class="colorfooter" @click="RedWhatsappp()">Administracion</a></p>
                                <p><a class="colorfooter" @click="RedWhatsappp()">Area Comercial</a></p>
                                <!-- <p><a class="colorfooter">Soporte</a></p> -->
                            </div>

                        </div>
                        <div style="transform: skewX(25deg)" class=" col-md-3">
                            <h6 style="opacity: 0;">
                                Empresa
                            </h6>
                            <div>
                                <p>
                                    <a class="colorfooter" @click="RedFact()">
                                        <img style="width:50px" src="/icon.png" alt="Usqqay"><br>Comprobantes</a>

                                </p>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>
    <!-- <div></div> -->
</template>

<script>
export default {
    name: 'UsqayIndex',
    layout: 'home',
    data() {
        return {

            rutaPage: {},
            code: null,
            socialMediaLinks: {
                pe: {
                    whatsapp: '51943741512',
                    instagram: 'https://www.instagram.com/sistemausqay?igsh=MW1ianlwMXk2am11Ng==',
                    facebook: 'https://www.facebook.com/UsqayPeru?mibextid=hIlR13',
                    facturador: 'https://usqay.pse.pe/buscar'
                },
                ec: {
                    whatsapp: '593939315189',
                    instagram: 'https://www.instagram.com/sistemausqay_ec?igsh=MWlhdXd3OXB1OXNzcg==',
                    facebook: 'https://www.facebook.com/UsqayPeru?mibextid=hIlR13',
                    facturador: 'https://ecufact.usqay-cloud.net/'
                },
                co: {
                    whatsapp: '573241010233',
                    instagram: 'https://www.instagram.com/usqaycolombia?igsh=Njh0bjFvMHZyNTY2',
                    facebook: 'https://www.facebook.com/profile.php?id=61550925360429&mibextid=hIlR13',
                    facturador: ''
                },
                cl: {
                    whatsapp: '51943741512',
                    instagram: 'https://www.instagram.com/sistemausqay?igsh=MW1ianlwMXk2am11Ng==',
                    facebook: 'https://www.facebook.com/UsqayPeru?mibextid=hIlR13',
                    facturador: 'https://usqay.pse.pe/buscar'
                },
            },

        };
    },

    mounted() {
        this.rutaPage = JSON.parse(localStorage.getItem("rutag"));
        this.code = this.rutaPage.country_code;
        // console.log(this.rutaPage.country_code);
    },

    methods: {
        RedWhatsappp() {
            const number = this.socialMediaLinks[this.code].whatsapp;
            const mensaje = `Me brindas información del Sistema Usqay`;
            window.open(`https://api.whatsapp.com/send?phone=${number}&text=${mensaje}`, "Whatsapp");
        },

        RedInsta() {
            const link = this.socialMediaLinks[this.code].instagram;
            window.open(`${link}`, "Instagram");
        },

        RedFace() {
            const link = this.socialMediaLinks[this.code].facebook;
            window.open(`${link}`, "Facebook");
        },
        RedFact() {
            const link = this.socialMediaLinks[this.code].facturador;
            window.open(`${link}`, "Facturador");
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');

.titlefooter {
    font-size: 20px;
    font-weight: bold
}

.colorfooter {
    color: #fff
}

.imgredes {
    cursor: pointer;
}

.curved-container {
    background-color: #124c83;
    height: 100%;
    position: relative;
    overflow: hidden;
    transform-origin: right !important;
    transform: skewX(-25deg);
    border-radius: 20px 0 0 0;
    margin-right: -30px;
    padding-right: 100px;
    /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); */
}

/* .curved-content {
    transform: skewX(50deg);
} */
</style>