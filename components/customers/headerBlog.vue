<template>
    <nav class="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar" style="background: #ffffff">
        <div class="newHeigth container">
            <nuxt-link :to="`/${this.code}`" class="navbar-brand "><img src="@/assets/img/logo.svg" alt=""
                    style="height: 50px; width: 100%;"></nuxt-link>
            <!-- <nuxt-link to="/" class="navbar-brand "><img src="/img/Logo_b.png" alt=""
                    style="height: 50px; width: 100%;"></nuxt-link> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <v-icon class="text-white">menu</v-icon>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto w-100" style="justify-content: space-evenly;">
                    <!-- <li class="nav-item">
                        <nuxt-link :to="`/${this.code}`" class="nav-link page-scroll" href="#home">Inicio</nuxt-link>
                    </li> -->
                    <li class="nav-item">
                        <nuxt-link :to="`/${this.code}/empresa`" class="nav-link page-scroll">Empresa</nuxt-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <div class="dropdown-menu">
                            <nuxt-link :to="`/${this.code}/productos/restaurantes`"
                                class="nav-link page-scroll">Restaurante</nuxt-link>
                            <nuxt-link :to="`/${this.code}/productos/pos`" class="nav-link page-scroll">Pos</nuxt-link>
                            <nuxt-link :to="`/${this.code}/productos/hoteles`"
                                class="nav-link page-scroll">Hoteles</nuxt-link>
                            <!-- <nuxt-link :to="`/${this.code}/productos/restaurantes`"
                                class="nav-link page-scroll">Empresa</nuxt-link> -->
                        </div>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="`/${this.code}/contacto`" class="nav-link page-scroll">Contacto</nuxt-link>
                        <!-- <a class="nav-link page-scroll" href="contacto"></a> -->
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
                            Soporte
                        </a>
                        <div class="dropdown-menu" style="width: 300px;">
                            <div v-for="suport in suports" :key="suport.i">
                                <div v-if="suport.type === '1'" class="nav-link page-scroll">
                                    <button @click="solicitarSoporte(suport)"><img style="width:20px;"
                                            src="@/assets/img/imagenes/whatsapp.png" alt="Usqay Whatsapp"> ({{ suport.code
                                            }}) {{ suport.number }}</button>
                                </div>
                                <div class="dropdown-divider"></div>
                                <div v-if="suport.type === '0'">
                                    <a class="nav-link page-scroll" :href="'tel:' + suport.number"><img style="width:20px;"
                                            src="@/assets/img/imagenes/phone.png" alt="Usqay ">
                                        {{ suport.code }} {{ suport.number }}</a>
                                </div>
                                <div v-if="suport.type === '2'">
                                    <a class="nav-link page-scroll" :href="'mailto:' + suport.number"><img
                                            style="width:20px;" src="@/assets/img/imagenes/mail.png" alt="Usqay ">
                                        {{ suport.code }} {{ suport.number }}</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <img v-if="this.code === 'pe'" style="width:40px;" src="@/assets/img/iconos/Recurso 1@3x.png"
                            alt="Usqay Perú">
                        <img v-if="this.code === 'ec'" style="width:40px;" src="@/assets/img/iconos/Recurso 2@3x.png"
                            alt="Usqay Ecuador">
                        <img v-if="this.code === 'co'" style="width:40px;" src="@/assets/img/iconos/Recurso 3@3x.png"
                            alt="Usqay Colombia">
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: '',
    layout: 'home',

    data() {
        return {
            rutaPage: {},
            code: null,
            suports: [
                {
                    name: 'Pedro Valladares',
                    code: '+51',
                    number: 973105651,
                    msj: '',
                    type: '1'
                },
                {
                    name: 'Alexander Ríos',
                    code: '+51',
                    number: 951297182,
                    msj: '',
                    type: '1'
                },
                {
                    name: 'Sergio Valladares',
                    code: '+51',
                    number: 956224141,
                    msj: '',
                    type: '1'
                },
                {
                    name: 'Central Telefonica',
                    code: '0',
                    number: 16429247,
                    msj: 'Opcion 2',
                    type: '0'
                },
                {
                    name: 'Correo',
                    code: '',
                    number: 'soporte@sistemausqay.com',
                    msj: '',
                    type: '2'
                }
            ]
        };
    },

    mounted() {
        this.rutaPage = JSON.parse(localStorage.getItem("rutag"));
        this.code = this.rutaPage.country_code
        // console.log(this.rutaPage);
    },

    methods: {
        solicitarSoporte(suport) {
            console.log(suport)
            let num = suport.number;
            let mensaje = `Hola ${suport.name}, necesito asistencia del soporte Técnico de Usqay`;

            window.open(`https://api.whatsapp.com/send?phone=${suport.code}${num}&text=${mensaje}`, "Whatsapp")
        }
    },
};
</script>

<style scoped>
.displaymovil {
    display: none
}

@media screen and (max-width:767px) {
    .displaymovil {
        display: block
    }

    .displaymovil a {
        width: 90%;
        margin: 0 15px;
    }

    .displaypc {
        display: none
    }
}
</style>