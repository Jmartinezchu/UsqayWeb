<template>
    <div class="wow fadeIn space_componet2 " data-wow-duration="2s" data-wow-delay="0.5s">
        <div class="container-fluid">
            <h3 class="animate__animated animate__fadeInRight subTitleProduct" style="font-size:35px">¿Qué nos
                diferencia de la competencia?
            </h3>
            <div class="animate__animated animate__fadeInLeft centerflexrow"
                style="width: 300px; margin: auto; height: 15px;">
                <div style="width: 250px; margin: auto; height: 12px;background: var(--colorblue); border-radius: 20px;">
                </div>
                <span style="opacity: 0;">0</span>
                <div style="width: 50px; margin: auto; height: 12px;background: var(--colorusqay); border-radius: 20px;">
                </div>
            </div>
        </div>
        <div class="centerflexcol">
            <div class="row">
                <div class="circleRecom">
                    <img src="@/assets/img/product/1.png" alt="Usqay nos eligen">
                    <p> Facturación electrónica </p>
                </div>
                <div class="circleRecom">
                    <img src="@/assets/img/product/2.png" alt="Usqay nos eligen">
                    <p>Siempre disponibles</p>
                </div>
                <div class="circleRecom">
                    <img src="@/assets/img/product/3.png" alt="Usqay nos eligen">
                    <p>Notificaciones por correo electrónico</p>
                </div>
                <div class="circleRecom">
                    <img src="@/assets/img/product/4.png" alt="Usqay nos eligen">
                    <p>Reportes detallados y gráficos</p>
                </div>
                <div class="circleRecom">
                    <img src="@/assets/img/product/5.png" alt="Usqay nos eligen">
                    <p>Toma de pedido desde cualquier dispositivo</p>
                </div>
            </div>
            <div class="row">
                <div class="circleRecom">
                    <img src="@/assets/img/product/6.png" alt="Usqay nos eligen">
                    <p>Recepción de pedidos en cocina por Ticketera o pantalla</p>
                </div>
                <div class="circleRecom">
                    <img src="@/assets/img/product/7.png" alt="Usqay nos eligen">
                    <p>Administración de delivery y pedidos para llevar</p>
                </div>
                <div class="circleRecom">
                    <img src="@/assets/img/product/8.png" alt="Usqay nos eligen">
                    <p>Administrar múltiples almacenes</p>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
export default {
    name: 'UsqayDiferencia',

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

<style  scoped>
.circleRecom p {
    color: var(--colorblue);
    font-weight: 600;
    background-color: #fff;
}
</style>