<template>
  <div>
    <h1>Metodos filters</h1>
    <ul>
        <li v-for="num in numeros" :key="num">
            Numero:  {{ num }} - 
            Doble:  {{ $filters.getNumeroDoble(num) }}
        </li>
    </ul>
    <ul>
        <li v-for="nombre in nombres" :key="nombre">
            Nombre: {{ nombre }} - 
            Mayusculas: {{ $filters.mayuscula(nombre) }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"MetodosFilters",
    data(){
        return {
            numeros : [55,33,44,55,22,11],
            nombres:["Juan","Jesus","Jose","Javier","Jaime"]
        }
    }
}
</script>
