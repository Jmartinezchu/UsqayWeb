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
                <div class="row pricing-tables container" style="margin:auto">
                    <div v-for="plan in planes" :key="plan.nombre" class="col-lg-4 col-md-4 col-xs-12">
                        <div class="pricing-table">
                            <div class="pricing-details positioncardprice">
                                <h3 class="text-center titlecardprice">Versión <b>{{ plan.nombre }}</b></h3>
                                <h4 style="color: var(--colorblue);font-weight: 800;font-size: 30px;">{{ plan.precioAnual }}
                                    <span style="font-size: 15px;">/año</span>
                                </h4>
                                <h6 style="color: var(--colorblue);font-weight: 800;">{{ plan.precioMensual }}<span
                                        style="font-size: 12px;">/mes</span>
                                </h6>
                                <p>{{ plan.comprobantes }}</p>
                                <ul>
                                    <li v-for="modulo in plan.modulos" :key="modulo">
                                        <img src="@/assets/img/product/0.png" style="width: 20px;" alt="Usqay check">
                                        {{ modulo }}
                                    </li>
                                </ul>
                                <div>
                                    <button class="btnPrice" @click="solicitarDemo('Restaurantes', plan.nombre)">
                                        Contáctanos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            planes: [
                {
                    "nombre": "Lite",
                    "precioAnual": "s/ 1,290.00",
                    "precioMensual": "s/ 129.00",
                    "comprobantes": "Hasta 500 comprobantes al mes",
                    "modulos": [
                        "Módulo de ventas",
                        "Registro de platos y productos",
                        "Reporte de ventas",
                        "Control de caja",
                        "Usuarios",
                        "Precuentas",
                        "Boletas",
                        "Tickets de venta",
                        "Backup de respaldo",
                        "Múltiples dispositivos",
                        "Online y offline",
                        "Facturas"
                    ]
                },
                {
                    "nombre": "Emprende",
                    "precioAnual": "s/ 1,690.00",
                    "precioMensual": "s/ 169.00",
                    "comprobantes": "1000 comprobantes al mes",
                    "modulos": [
                        "Dashboard",
                        "Módulo de ventas",
                        "Registro de platos y productos",
                        "Reporte de ventas",
                        "Usuarios",
                        "Control de caja",
                        "Precuentas",
                        "Tickets de venta",
                        "Backup de respaldo",
                        "Boletas",
                        "Múltiples Dispositivos",
                        "Online y offline",
                        "Cloud (1 Usuario)",
                        "Arma tu menú (entrada, fondo, postre)",
                        "Almacén",
                        "Inventario",
                        "Kardex",
                        "Facturas"
                    ]
                },
                {
                    "nombre": "Premium",
                    "precioAnual": "s/ 2,490.00",
                    "precioMensual": "s/ 249.00",
                    "comprobantes": "Comprobantes ilimitados al mes",
                    "modulos": [
                        "Dashboard",
                        "Módulo de ventas",
                        "Registro de platos y productos",
                        "Reporte de ventas",
                        "Usuarios",
                        "Control de caja",
                        "Precuentas",
                        "Tickets de venta",
                        "Backup de respaldo",
                        "Múltiples dispositivos",
                        "Online y Offline",
                        "Cloud (Múltiples usuarios)",
                        "Boletas",
                        "Arma tu menú (entrada, fondo postre)",
                        "Múltiples almacenes",
                        "Insumo",
                        "Módulo de receta",
                        "Compras",
                        "Transferencia entre almacenes",
                        "Inventario",
                        "Kardex",
                        "Mermas",
                        "Facturas"
                    ]
                }
            ]
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