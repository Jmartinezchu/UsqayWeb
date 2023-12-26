<template>
    <div class="row bg6">
        <div class="col-md-3"></div>
        <div class="col-md-9">
            <div class="row ">
                <div class="col-md-10 "
                    style=" background: #fff; border-radius: 30px; box-shadow:-1px 4px 12px 0px rgba(51, 49, 51, 1) ">
                    <div class="cuadroblue"></div>
                    <div class="row">
                        <div class="col-md-8">
                            <v-form v-model="valid">
                                <v-row class="">
                                    <v-col md="10" class="orderform">
                                        <v-text-field v-model="cliente.name" :rules="nameRules" label="Nombre completo"
                                            required></v-text-field>
                                    </v-col>
                                    <!-- <br> -->
                                    <v-col md="10" class="orderform">
                                        <v-text-field v-model="cliente.business" :rules="nameRules"
                                            label="Nombre del negocio" required></v-text-field>
                                    </v-col>
                                    <v-col md="10" class="orderform">
                                        <v-text-field v-model="cliente.number" :rules="nameRules" label="Tel. o Celular"
                                            required></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col md="10" class="orderform">
                                        <v-text-field v-model="cliente.email" :rules="emailRules" label="E-mail"
                                            required></v-text-field>
                                    </v-col>
                                    <v-col md="10" class="orderform">
                                        <v-text-field v-model="cliente.ciudad" :rules="nameRules" label="Ciudad"
                                            required></v-text-field>
                                    </v-col>
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
    methods: {
        solicitarDemo(cliente) {
            let num = this.numberusqay;
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
                window.open(`https://api.whatsapp.com/send?phone=51${num}&text=${mensaje}`, "Whatsapp")
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