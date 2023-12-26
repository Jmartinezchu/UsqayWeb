<template>
    <div class="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s">
        <!-- <div class=""></div> -->
        <div class="row bg5">
            <div class="col-md-9">
                <div style="max-width: 800px; margin: auto;">
                    <p class="parrafopreguntasF">PREGUNTAS FRECUENTES</p>
                    <div class="animate__animated animate__fadeInLeft"
                        style="width: 250px; height: 5px;background: var(--colorusqay); margin-bottom: 10px;"></div>
                    <v-expansion-panels>
                        <!-- <v-expansion-panel v-for="(item, i) in 5" :key="i"> -->
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                ¿Por qué no puedo imprimir?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Revisar si el servidor de impresión está ejecutado, el icono lo puede ubicar en la barra
                                de tareas > Mostrar iconos ocultos.

                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                ¿Por qué no imprime la impresora que está conectada por cable de red?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Verificar que el conector de red este correctamente conectado, y también que todos los
                                dispositivos que brindan internet estén encendidos.

                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                ¿Por qué no puedo emitir comprobantes electrónicos?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Verificar que tenga conexión con (OSE) a internet o reiniciar su
                                modem de internet y volver a intentar hacer el comprobante, o el servicio de facturación
                                electrónica está en corte, comunicarse con el área de administración para más
                                información.

                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                ¿Por qué mis dispositivos no pueden ingresar al sistema?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Verificar que estén conectados a la misma red local, o el modem principal esta
                                desconfigurado, comunicarse a la central telefónica (Opción 2) para la solución
                                inmediata.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                ¿Por qué no tengo conexión por Usqay-Cloud?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Verificar si la PC principal está encendida y tiene conexión a internet, o reiniciar su
                                servidor.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                ¿Qué es Anydesk y donde lo ubico?
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                Es un software que nos permite conectarnos de manera remota a su computadora, el icono
                                se caracteriza de color rojo y lo puede ubicar en el escritorio de su pantalla, al abrir
                                obtendrá un código el cual se comparte con el área de soporte.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
            </div>
        </div><br><br><br>
    </div>
</template>

<script>
export default {
    name: 'UsqayPreguntas',

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

<style lang="scss" scoped></style>