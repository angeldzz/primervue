<template>
  <div>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cine">Cine</router-link></li>
        <li><router-link to="/musica">Musica</router-link></li>
        <li><router-link to="/ciclosVida">Ciclos Vida</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
    name: "MenuComponent"
}
</script>