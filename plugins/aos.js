import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(
  AOS.init({
    // Configuraciones de AOS (opcional)
    duration: 800, // Duración de las animaciones
    easing: 'ease-in-out', // Tipo de easing
    once: true, // La animación se ejecuta solo una vez
  })
)
