<template>
  <div class="hello">
    <h1>Mi primer vue de viernes. que ilusion!!!</h1>
    <h2>Su nombre es {{ nombre }}</h2>
    <h2>Su edad es {{ edad }}</h2>
    <h2>Su Array es {{ miArray }}</h2>
  </div>
</template>

<script>
// VUE UTILIZA CODIGO JS (ESPECIAL)
// CADA COMPONENT QUE GENEREMOS DEBE TENER UN NOMBRE OBLIGATORIO
// Y DEBEMOS EXPORTARLO CON DICHO NOMBRE. EL name ES LA ETIQUETA QUE
// UTILIZARAN OTROS COMPONENTES PARA DIBUJAR.
export default {
  name: "HolaMundo",
  data(){
    // Las variable son declaradas en formato JSON 
    // dentro de un return
    return {
      nombre: "Alumno",
      edad: 25,
      miArray: [1,1,1],
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{ color:blue }
</style>
