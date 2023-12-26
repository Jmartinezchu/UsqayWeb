<template>
    <div class="wow fadeIn" data-wow-delay="0.5s">
        <br><br><br><br>
        <h2 class="titlepage">
            Contactanos
        </h2>
        <br><br>
        <div>
            <PeruContact />
        </div>
        <br>
        <!-- Nos eligen -->
        <div class="wow fadeIn space_componet " data-wow-delay="0.5s">
            <!-- <div class=""></div> -->
            <div>
                <img src="@/assets/img/logo.svg" alt="Usqay" class=" animate__animated animate__fadeInRight "
                    style="height: 80px; width: 100%;">
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
            <br>
            <div class="container-fluid centerflexcol bg3">
                <p>CORPORACION USQAY SOCIEDAD ANONIMA CERRAD</p>
                <p>www.sistemausqay.com | Jiron Tacna 258 Oficina 1B - Piura | administracion@sistemausqay.com | 016429247
                </p>
            </div>
        </div>
        <!-- End nos eligen -->

    </div>
</template>

<script>
export default {
    name: 'UsqayContacto',
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

<style >
.titlepage {
    /* text-align: center; */
    padding-left: 50px;
    font-size: 4em;
    font-weight: bold;
    letter-spacing: 0px;
    font-family: 'Poppins', sans-serif;
    color: var(--colorblue);
}
</style>