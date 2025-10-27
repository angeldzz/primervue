<template>
  <div>
    <ul class="menu-nav">
        <li class="menu-item"><router-link to="/" class="menu-link">Home</router-link></li>
        <li class="menu-item"><router-link to="/cine" class="menu-link">Cine</router-link></li>
        <li class="menu-item"><router-link to="/musica" class="menu-link">Musica</router-link></li>
        <li class="menu-item"><router-link to="/ciclosVida" class="menu-link">Ciclos Vida</router-link></li>
        <li class="menu-item"><router-link to="/directivas" class="menu-link">Directivas</router-link></li>
        <li class="menu-item"><router-link to="/parimpar" class="menu-link">Par Impar</router-link></li>
        <li class="menu-item"><router-link to="/propiedadConmutada" class="menu-link">Propiedad Conmutada</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
    name: "MenuComponent"
}
</script>