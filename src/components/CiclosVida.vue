<template>
  <div>
    <h1>Ciclo vida y metodos VUE</h1>
    <h2 style="color:red">{{ mensaje }}</h2>
    <button @click="cambiarMensaje()">Cambiar mensaje</button>
  </div>
</template>

<script>
export default {
    name: "CiclosVida",
    data(){
        return{
            mensaje:"Hoy es viernes!!!",
            
        }
    },
    methods:{
        cambiarMensaje(){
            // PARA ACCEDER A LS VARIABLES DE data() DEL COMPONENT
            // DEBEMOS UTILIZAR LA PALABRA this
            this.mensaje = "Hoy se sale!!!"
        }
    },
    mounted(){
        console.log("Component Mount");
    },
    created(){
        console.log("Component created");
    },
    updated(){
        console.log("Component updated");
    },
    unmounted(){
        console.log("Component unmounted");
    }
}
</script>