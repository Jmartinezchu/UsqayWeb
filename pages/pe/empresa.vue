<template>
    <div>
        <!-- home -->
        <div class="space_componet">
            <div class="row" style=" height:87vh">
                <div class="col-md-1" style="margin:auto"></div>
                <div class="col-md-3" style="margin:auto">
                    <div class="text-center d-flex flex-column align-items-center animate__animated animate__backInLeft">
                        <h1 class="titleGeneral">
                            <b>Nuestros Inicios</b>
                        </h1>
                        <br><br>
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

                    </div>
                </div>
                <div class="col-md-8 animate__animated animate__backInDown" style="margin:auto">
                    <img style="width: 100%;" src="@/assets/img/imagenes/dispositivos.png" alt="Usqay">
                </div>

            </div>
        </div>

        <LandingIniciousqay />
        <div id="mision" class="wow fadeIn space_componet" data-wow-duration="2s" data-wow-delay="0.5s">
            <div class="animate__animated animate__fadeInLeft"
                style="width: 300px; margin: auto; height: 5px;background: var(--colorusqay);"></div>
            <br>
            <LandingMvv />
        </div>
        <div id="teams" class="wow fadeIn space_componet " data-wow-duration="2s" data-wow-delay="0.5s">
            <div class="bg4 flexcentercol row">
                <div class="col-md-3"></div>
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <!-- jsjjs -->
                    <h2 class=" animate__animated animate__fadeInRight titleGeneral" style="font-size:3em">NUESTRO EQUIPO
                    </h2>
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
                </div>
            </div>
            <PeruTeam />
            <div class="bg5"><br><br><br><br></div>
            <br>
        </div>
        <div>

        </div>
        <PeruClientes id="clientes" />
    </div>
</template>

<script>
export default {
    name: 'UsqayEmpresa',
    layout: 'home',
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