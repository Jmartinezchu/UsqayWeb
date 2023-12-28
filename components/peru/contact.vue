<template>
    <div class="row bg6">
        <div class="col-md-2 col-1"></div>
        <div class="col-md-9 col-10">
            <div class="row ">
                <div class="col-md-11 "
                    style=" background: #fff; border-radius: 30px; box-shadow:-1px 4px 12px 0px rgba(51, 49, 51, 1) ">
                    <div class="cuadroblue"></div>
                    <div class="row">
                        <div class="col-md-8">
                            <v-form v-model="valid">
                                <v-row class="">
                                    <div class="col-md-10 orderform">
                                        <v-text-field v-model="cliente.name" :rules="nameRules" label="Nombre completo"
                                            required></v-text-field>
                                    </div>
                                    <!-- <v-col md="10" class="orderform">
                                        
                                    </v-col> -->
                                    <!-- <br> -->
                                    <div class="col-md-10 orderform">
                                        <v-text-field v-model="cliente.business" :rules="nameRules"
                                            label="Nombre del negocio" required></v-text-field>
                                    </div>
                                    <div class="col-md-10 orderform">
                                        <v-text-field v-model="cliente.number" :rules="nameRules" label="Tel. o Celular"
                                            required></v-text-field>
                                    </div>
                                </v-row>
                                <v-row>
                                    <div class="col-md-10 orderform">
                                        <v-text-field v-model="cliente.email" :rules="emailRules" label="E-mail"
                                            required></v-text-field>
                                    </div>
                                    <div class="col-md-10 orderform">
                                        <v-text-field v-model="cliente.ciudad" :rules="nameRules" label="Ciudad"
                                            required></v-text-field>
                                    </div>
                                </v-row>

                            </v-form>
                            <div style="display: flex; justify-content: end;">
                                <button @click="solicitarDemo(cliente)" class="btn animated-btn btn-primary static"
                                    style="position: relative;width: 200px;top: 25px;">
                                    Enviar
                                </button>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="centerflexcol">
                                <img style="width: 105%" src="@/assets/img/component/mascota.png" alt="Usqay Mascota">

                            </div>
                        </div>
                    </div>
                </div>
                <!-- <pre>{{ cliente }}</pre> -->
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data: () => ({
        valid: false,
        numberusqay: 943741512,
        cliente: {
            name: '',
            business: '',
            number: '',
            email: '',
            ciudad: ''
        },
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
        nameRules: [
            v => !!v || 'Campo Requerido',
            // v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail Requerido',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
    }),
    mounted() {
        this.rutaPage = JSON.parse(localStorage.getItem("rutag"));
        this.code = this.rutaPage.country_code;
        // console.log(this.rutaPage.country_code);
    },
    methods: {
        solicitarDemo(cliente) {
            const num = this.socialMediaLinks[this.code].whatsapp;
            if (cliente.name === '' || cliente.business === '' || cliente.number === '' || cliente.email === '' || cliente.ciudad === '') {
                this.$swal({
                    icon: 'error',
                    title: "Faltan Campos",
                    text: 'Todos los campos son requeridos',
                    //   showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: "ok",
                    //   denyButtonText: `Continuar...`
                });
            } else {
                let mensaje = `Me brindas información del Sistema Usqay, soy ${cliente.name} de la ciudad de ${cliente.ciudad}, el nombre de mi negocio es ${cliente.business}, espero mayor iformacion n/ ${cliente.email}-${cliente.number}`
                window.open(`https://api.whatsapp.com/send?phone=51${num}&text=${mensaje}`, "Whatsapp");

                this.cliente.name = '';
                this.cliente.business = '';
                this.cliente.number = '';
                this.cliente.email = '';
                this.cliente.ciudad = '';
            }

        },
    }
}

</script>

<style scoped>
.orderform {
    padding: 0 !important;
    margin: auto
}

.cuadroblue {
    width: 50px !important;
    height: 340px;
    background-color: var(--colorblue);
    position: absolute;
    left: -31px !important;
    border-radius: 10px;
}
</style>