<template>
  <div>
    <h1>Ejemplo Directivas</h1>
    <h3>{{ $data }}</h3>
    <label>Introduzca numero: </label>
    <input type="number" v-model="numero">
    <h3 v-if="numero > 0">Positivo</h3>
    <h3 v-else-if="numero < 0">Negativo</h3>
    <h3 v-else>Cero</h3>
    <ul v-if="series.length > 0">
        <li v-for="serie in series" :key="serie">
            {{ serie }}
        </li>
    </ul>
    <input type="text" v-model="serieNueva">
    <button @click="nuevaSerie()">Añadir Serie</button>
  </div>
</template>

<script>
export default {
    name:"DirectivasComponent",
    data(){
        return{
            series: ["Futurama","Mindhunter","The boys","Stranger Things"],
            numero:0,
            nombre:"Alumno",
        }
    },
    methods: {
        nuevaSerie(){
            this.series.push(this.serieNueva);
        }
    }
}
</script>