<template>
  <div>
    <label>Introduzca un numero: </label>
    <input type="text" v-model="numero">
    <h3 v-if="numero % 2 === 0">PAR</h3>
    <h3 v-else-if="numero % 2 !== 0">IMPAR</h3>
    <button v-on:click="generarRandom">GenerarRandom</button>
  </div>
</template>

<script>
export default {
    name: "ParImpar",
    data() {
        return{
            numero:0
        }
    },
    methods:{
      generarRandom(){
        this.numero = parseInt(Math.random() * 100) + 1
      }
    }
}
</script>
