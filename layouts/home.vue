<template>
    <!-- <v-app> -->
    <v-main style="overflow: hidden !important;">
        <!-- <v-container> -->
        <!-- <div style="width: 100%;"> -->
        <CustomersHeaderBlog></CustomersHeaderBlog>
        <Nuxt />
        <CustomersFooterBlog></CustomersfooterBlog>
        <!-- </div> -->
        <!-- </v-container> -->
        <a @click="scrollToTop" class="back-to-top">
            <img style="width: 50px;" src="@/assets/img/component/flecha.png" alt="">
        </a>
    </v-main>
    <!-- </v-app> -->
</template>
  
<script>

export default {

    name: 'homeLayout',
    head: {
        link: [
            { rel: "stylesheet", type: "text/css", href: "/css/blog_bootstrap.min.css" },
            { rel: "stylesheet", type: "text/css", href: "/css/blog_owl.carousel.css" },
            { rel: "stylesheet", type: "text/css", href: "/css/blog.css" },
            { rel: "stylesheet", type: "text/css", href: "/css/blog_responsive.css" },
        ],
        script: [
            { type: "text/javascript", src: "/js/blog_jquery-min.js" },
            { type: "text/javascript", src: "/js/blog_bootstrap.min.js" },
            { type: "text/javascript", src: "/js/blog_owl.carousel.js" },
            { type: "text/javascript", src: "/js/blog.js" },
        ],
    },
    // plugins: [
    //     // { src: '~/plugins/aos.js', ssr: false },
    //     // { src: '~/plugins/weetalert2.js' },
    //     { src: '~/plugins/wow.js', ssr: false },
    // ],
    data() {
        return {
            rutaPage: {},
            code: null,
        };
    },
    mounted() {
        this.rutaPage = JSON.parse(localStorage.getItem("rutag"));
        this.code = this.rutaPage.country_code
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    },
    methods: {
        scrollToTop() {
            // Utiliza smooth scrolling para desplazarte al inicio de la página
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}
</style>