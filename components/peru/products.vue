<template>
    <div class="wow fadeIn space_componet " data-wow-duration="2s" data-wow-delay="0.5s">
        <!-- <div class=""></div> -->
        <h2 class="bg2 animate__animated animate__fadeInRight titleGeneral" style="font-size:50px">NUESTROS PRODUCTOS
        </h2>
        <br>
        <div class="animate__animated animate__fadeInLeft"
            style="width: 300px; margin: auto; height: 5px;background: var(--colorusqay);"></div>
        <br>
        <div class="row container-fluid">
            <div class="col-md-8 col-lg-6">
                <div class="row" style="margin: 0 auto; width:500px;height: 300px; text-align: center">
                    <img class="col-md-6 img_prod" src="@/assets/img/imagenes/restaurante.jpg" alt="Usqay Restaurante">
                    <div class="col-md-6">
                        <h4 style="color: var(--colorusqay);margin-bottom: -5px;position: relative; z-index: 3;">Usqay
                        </h4>
                        <h3
                            style="color: #fff; background-color: var(--colorblue); font-size: 18px; padding: 3px 0; margin: 0 30px; position: relative; z-index: 2;">
                            Restaurante
                        </h3>
                        <p
                            style="border: 1px solid #155998; border-radius: 0 0 20px 20px; font-size: 12px;  position: relative; z-index: 1;padding: 18px 5px; margin-top: -15px">

                            Toma pedidos, recíbelos en cocina y maneja tu almacén de una manera sencilla e intuitiva.
                            Incluye facturación
                            electronica.
                        </p>
                        <button @click="handleButtonClick, solicitarDemo('Restaurantes')"
                            @mouseover="handleButtonHover(true)" @mouseout="handleButtonHover(false)"
                            :class="{ 'btn-primary': !isButtonStatic, 'static': isButtonStatic, 'animated-btn': isButtonAnimated }"
                            class="btn" style="position: relative; z-index: 2;">
                            Solicitar demo
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md-8 col-lg-6">
                <div class="row" style="margin: 0 auto; width:500px;height: 300px; text-align: center">
                    <img class="col-md-6 img_prod" src="@/assets/img/imagenes/pos.jpg" alt="Usqay Restaurante">
                    <div class="col-md-6">
                        <h4 style="color: var(--colorusqay);margin-bottom: -5px;position: relative; z-index: 3;">Usqay
                        </h4>
                        <h3
                            style="color: #fff; background-color: var(--colorblue); font-size: 18px; padding: 3px 0; margin: 0 30px; position: relative; z-index: 2;">
                            Pos
                        </h3>
                        <p
                            style="border: 1px solid #155998; border-radius: 0 0 20px 20px; font-size: 12px;  position: relative; z-index: 1;padding: 18px 5px; margin-top: -15px">
                            Lleva un control de tus ventas,
                            compras, cuentas por cobrar y
                            pagar, ademas de gestionar tus
                            almacenes en un solo click.
                            Incluye facturación electronica.
                        </p>
                        <button @click="handleButtonClick, solicitarDemo('Pos')" @mouseover="handleButtonHover(true)"
                            @mouseout="handleButtonHover(false)"
                            :class="{ 'btn-primary': !isButtonStatic, 'static': isButtonStatic, 'animated-btn': isButtonAnimated }"
                            class="btn" style="position: relative; z-index: 2;">
                            Solicitar demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row container-fluid">
            <div class="col-md-12 col-lg-12">
                <div class="row" style="margin: 0 auto; width:500px;height: 300px; text-align: center">
                    <img class="col-md-6 img_prod" src="@/assets/img/imagenes/hoteles.jpg" alt="Usqay Restaurante">
                    <div class="col-md-6" style="box-shadow: rgb(51, 49, 51) 9px 9px 20px -10px;border-radius:0 0 50px 0;">
                        <h4 style="color: var(--colorusqay);margin-bottom: -5px;position: relative; z-index: 3;">Usqay
                        </h4>
                        <h3
                            style="color: #fff; background-color: var(--colorblue); font-size: 18px; padding: 3px 0; margin: 0 30px; position: relative; z-index: 2;">
                            Hoteles
                        </h3>
                        <p
                            style="border: 1px solid #155998; border-radius: 0 0 20px 20px; font-size: 12px;  position: relative; z-index: 1;padding: 18px 5px; margin-top: -15px">

                            Registra reservas, maneja tus
                            huéspedes, vende productos y
                            servicios.
                            También emite comprobantes
                            electrónicos.
                        </p>
                        <button @click="handleButtonClick, solicitarDemo('Hoteles')" @mouseover="handleButtonHover(true)"
                            @mouseout="handleButtonHover(false)"
                            :class="{ 'btn-primary': !isButtonStatic, 'static': isButtonStatic, 'animated-btn': isButtonAnimated }"
                            class="btn" style="position: relative; z-index: 2;">
                            Solicitar demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UsqayProducts',

    data() {
        return {
            isButtonStatic: false,
            isButtonAnimated: false,
            numberusqay: 943741512,
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
        handleButtonClick() {
            this.isButtonStatic = true;
        },
        handleButtonHover(isHovered) {
            this.isButtonStatic = isHovered;
            this.isButtonAnimated = isHovered;
        },
        solicitarDemo(product) {
            // console.log(product)
            const num = this.socialMediaLinks[this.code].whatsapp;
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

<style lang="scss" scoped></style>