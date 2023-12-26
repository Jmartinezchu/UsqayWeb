<template>
<div class="row pricing-tables container" style="margin:auto">
                    <div v-for="plan in verplanes" :key="plan.nombre" class="col-lg-4 col-md-4 col-xs-12">
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
</template>

<script>
export default {
    name: 'UsqayPrices',

    data() {
        return {
            numberusqay: '573241010233', 
            nameproduct:'pos',
            verplanes:[],
            "licencias": {
                "restaurantes": {
                "planes": [
                    {
                    "nombre": "Lite",
                    "modulos": [
                        "Módulo de ventas",
                        "Registro de platos y productos",
                        "Reporte de ventas",
                        "Control de caja",
                        "Usuarios",
                        "Precuentas",
                        "Tickets de venta",
                        "Backup de respaldo",
                        "Múltiples dispositivos",
                        "Online y offline",
                        "Facturas"
                    ],
                    "precioMensual": "$149,000",
                    "precioAnual": "$1,490,000"
                    },
                    {
                    "nombre": "Emprende",
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
                        "Online y offline",
                        "Cloud (1 Usuario)",
                        "Arma tu menú (entrada, fondo, postre)",
                        "Almacén",
                        "Inventario",
                        "Kardex",
                        "Facturas"
                    ],
                    "precioMensual": "$249,000",
                    "precioAnual": "$2,490,000"
                    },
                    {
                    "nombre": "Premium",
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
                        "Online y offline",
                        "Cloud (Múltiples usuarios)",
                        "Arma tu menú (entrada, fondo, postre)",
                        "Múltiples almacenes",
                        "Insumo",
                        "Módulo de receta",
                        "Compras",
                        "Transferencia entre almacenes",
                        "Kardex",
                        "Mermas",
                        "Inventario",
                        "Facturas"
                    ],
                    "precioMensual": "$349,000",
                    "precioAnual": "$3,490,000"
                    }
                ]
                },
                "pos": {
                "planes": [
                    {
                    "nombre": "Lite",
                    "modulos": [
                        "Módulo de ventas",
                        "Registro de Productos",
                        "Reporte de ventas",
                        "Usuarios",
                        "Control de caja",
                        "Pre-cuentas",
                        "Productos",
                        "Servicios",
                        "Tickets de venta",
                        "Múltiples dispositivos",
                        "Online y offline",
                        "Backup de respaldo",
                        "Facturas"
                    ],
                    "precioMensual": "$149,000",
                    "precioAnual": "$1,490,000"
                    },
                    {
                    "nombre": "Emprende",
                    "modulos": [
                        "Dashboard",
                        "Módulo de ventas",
                        "Registro de Productos",
                        "Reporte de ventas",
                        "Usuarios",
                        "Control de caja",
                        "Pre-cuentas",
                        "Tickets de venta",
                        "Múltiples dispositivos",
                        "Productos",
                        "Online y offline",
                        "Backup de respaldo",
                        "Cotizaciones",
                        "Productos",
                        "Usqay Cloud (1 Usuario)",
                        "Facturas",
                        "Inventario",
                        "Kardex",
                        "Servicios"
                    ],
                    "precioMensual": "$249,000",
                    "precioAnual": "$2,490,000"
                    },
                    {
                    "nombre": "Premium",
                    "modulos": [
                        "Dashboard",
                        "Módulo de ventas",
                        "Registro de Productos",
                        "Reporte de ventas",
                        "Usuarios",
                        "Control de caja",
                        "Pre-cuentas",
                        "Tickets de venta",
                        "Backup de respaldo",
                        "Múltiples dispositivos",
                        "Online y offline",
                        "Inventario",
                        "Productos",
                        "Usqay Cloud (Múltiples usuarios)",
                        "Múltiples almacenes",
                        "Compras",
                        "Kardex",
                        "Facturas",
                        "Productos",
                        "Servicios"
                    ],
                    "precioMensual": "$349,000",
                    "precioAnual": "$3,490,000"
                    }
                ]
                },
                "hoteles": {
                "planes": [
                    {
                    "nombre": "Lite",
                    "modulos": [
                        "Dashboard",
                        "Hospedar",
                        "Ventas",
                        "Habitaciones",
                        "Tarifas",
                        "Caja",
                        "Reportes",
                        "Configuración",
                        "Facturas",
                        "Tickets de venta"
                    ],
                    "precioMensual": "$149,000",
                    "precioAnual": "$1,490,000"
                    },
                    {
                    "nombre": "Emprende",
                    "modulos": [
                        "Dashboard",
                        "Hospedar",
                        "Ventas",
                        "Habitaciones",
                        "Tarifas",
                        "Caja",
                        "Reservas",
                        "Almacén",
                        "Productos",
                        "Servicios",
                        "Kardex",
                        "Reportes",
                        "Configuración",
                        "Facturas",
                        "Tickets de venta",
                        "Cloud para 1 dispositivo"
                    ],
                    "precioMensual": "$249,000",
                    "precioAnual": "$2,490,000"
                    },
                    {
                    "nombre": "Premium",
                    "modulos": [
                        "Dashboard",
                        "Hospedar",
                        "Ventas",
                        "Habitaciones",
                        "Tarifas",
                        "Múltiples cajas",
                        "Reservas",
                        "Múltiples almacenes",
                        "Productos",
                        "Servicios",
                        "Kardex",
                        "Movimiento de almacenes",
                        "Reportes",
                        "Configuración",
                        "Facturas",
                        "Tickets de venta",
                        "Cloud para múltiples dispositivos"
                    ],
                    "precioMensual": "$349,000",
                    "precioAnual": "$3,490,000"
                    }
                ]
                }
            }
        }

    },
    created() {
        // Obtén la parte del path que indica el tipo de producto (por ejemplo, "restaurantes")
        const pathSegments = this.$route.path.split('/');
        const tipoProducto = pathSegments[pathSegments.length - 1];

        // Verifica si el tipo de producto existe en tu objeto JSON
        if (this.licencias.hasOwnProperty(tipoProducto)) {
        // Asigna los planes correspondientes a la variable verplanes
        this.verplanes = this.licencias[tipoProducto].planes;
        } else {
        // Si el tipo de producto no existe, muestra un mensaje de error o realiza otra acción según sea necesario
        console.error('Tipo de producto no válido');
        }
    },
    mounted() {

        // console.log(this.$route);
        
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

            window.open(`https://api.whatsapp.com/send?phone=${num}&text=${mensaje}`, "Whatsapp")
        }
    },
};
</script>

<style lang="scss" scoped>

</style>