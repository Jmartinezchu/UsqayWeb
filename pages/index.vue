<template>
  <div
    style="height:90vh ;margin: auto; display: flex; flex-direction: column; align-items: center;justify-content: center">
    <img class="animate__animated animate__backInDown" src="@/assets/img/logo.svg" alt=""
      style="height: 50px; width: 100%;">
    <br><br>
    <div class="animate__animated animate__bounceIn">
      <span class="loader "></span>
    </div>
  </div>
</template>

<script>

export default {
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  layout: 'loading',
  name: 'IndexPage',
  data() {
    return {
      country: null,
      city: null,
      country_code: null
    };
  },
  async created() {
    await this.getLocation();
  },
  methods: {
    // async getLocation() {
    //   if ("geolocation" in navigator) {
    //     navigator.geolocation.getCurrentPosition(async (position) => {
    //       try {
    //         const lat = position.coords.latitude;
    //         const lon = position.coords.longitude;

    //         const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`;
    //         console.log(apiUrl);

    //         const data = await this.$axios.$get(apiUrl).catch((error) => {
    //           console.log('Request canceled', error);
    //         });

    //         // Resto de tu lógica con el objeto data
    //         this.country = data.address.country;
    //         this.city = data.address.city;
    //         switch (this.country) {
    //           case 'Perú':
    //             location.href = `/pe`;
    //             break;
    //           case 'Ecuador':
    //             location.href = `/ec`;
    //             break;
    //           case 'Colombia':
    //             location.href = `/co`;
    //             break;
    //           default:
    //             location.href = '/pe';
    //             break;
    //         }
    //       } catch (error) {
    //         console.error('Error:', error);
    //       }
    //     });
    //   } else {
    //     console.log("La geolocalización no está disponible en este navegador");
    //     location.href = `/pe`;
    //   }
    // }
    async getLocation() {
      // var navigator = null;
      // if ("geolocation" in navigator) {
      if (typeof navigator !== 'undefined' && "geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;

              const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`;


              const data = await this.$axios.$get(apiUrl).catch((error) => {
                console.log('Request canceled', error);
              });
              console.log(data.address);
              // Resto de tu lógica con el objeto data
              localStorage.setItem("rutag", JSON.stringify(data.address));
              this.country = data.address.country;
              this.city = data.address.city;
              this.country_code = data.address.country_code
              switch (this.country) {
                case 'Perú':
                  // localStorage.setItem("rutag", JSON.stringify('/pe'));
                  location.href = `/${this.country_code}`;
                  break;
                case 'Ecuador':
                  // localStorage.setItem("rutag", JSON.stringify('/ec'));
                  location.href = `/${this.country_code}`;
                  break;
                case 'Colombia':
                  // localStorage.setItem("rutag", JSON.stringify('/co'));
                  location.href = `/${this.country_code}`;
                  break;
                default:
                  let address = {
                    "road": "Avenida Independencia",
                    "neighbourhood": "Urbanización El Bosque",
                    "city": "Castilla",
                    "ISO3166-2-lvl4": "PE-PIU",
                    "country": "Perú",
                    "country_code": "pe",
                    "postcode": "20000",
                    "region": "Piura",
                    "state": "Piura"
                  }
                  localStorage.setItem("rutag", JSON.stringify(address));
                  location.href = `/${address.country_code}`;
                  break;
              }
            } catch (error) {
              console.error('Error:', error);
            }
          },
          async (error) => {
            if (error.code === error.PERMISSION_DENIED) {
              try {
                const result = await this.$swal({
                  icon: 'info',
                  title: "",
                  text: 'Accede con tu ubicación para una mejor experiencia',
                  showDenyButton: true,
                  showCancelButton: false,
                  confirmButtonText: "Activar",
                  denyButtonText: `Continuar...`
                });

                if (result.isConfirmed) {
                  // Usuario eligió activar, intentar obtener la ubicación nuevamente
                  await this.getLocation();
                } else if (result.isDenied) {
                  // Usuario eligió continuar sin geolocalización
                  let address = {
                    "road": "",
                    "neighbourhood": "",
                    "city": "",
                    "ISO3166-2-lvl4": "PE-PIU",
                    "country": "Perú",
                    "country_code": "pe",
                    "postcode": "",
                    "region": "",
                    "state": ""
                  }
                  localStorage.setItem("rutag", JSON.stringify(address));
                  location.href = `/${address.country_code}`;
                }
              } catch (swalError) {
                console.error('Error al mostrar SweetAlert:', swalError);
              }
            } else {
              console.error('Error al obtener la ubicación:', error);
              location.href = '/pe';
            }
          }
        );
      } else {
        console.log("La geolocalización no está disponible en este navegador");
        // Puedes proporcionar una experiencia alternativa aquí
      }
    }

  },
};
</script>
<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #242d7a;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left: 4px solid #FF3D00;
  border-bottom: 4px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
