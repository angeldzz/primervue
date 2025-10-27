
//Necesutamos las librerias de navegacion que hemos
// incluido con npm install vue-router
import { createRouter,createWebHistory } from 'vue-router'
import CineComponent from '../components/CineComponent.vue'
import HomeComponent from '../components/HomeComponent.vue'
import MusicaComponent from '../components/MusicaComponent.vue'
import CiclosVida from '../components/CiclosVida.vue'
import DirectivasComponent from "../components/DirectivasComponent.vue";
import ParImpar from "../components/ParImpar.vue";
import PropiedadConmutada from "../components/PropiedadConmutada.vue";
//Un array con las rutas de navegacion

const myRoutes = [
    {path:"/", component: HomeComponent},
    {path:"/cine", component: CineComponent},
    {path:"/musica", component: MusicaComponent},
    {path:"/ciclosVida", component: CiclosVida},
    {path:"/directivas", component: DirectivasComponent},
    {path:"/parimpar", component: ParImpar},
    {path:"/propiedadConmutada", component: PropiedadConmutada},
]
//Creamos una variable para el router indicando el tipo de navegacion y las rutas
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

// La contante router es la que utilizara el fichero main.js
// debemos exportarla para que sea utilizada
export default router;