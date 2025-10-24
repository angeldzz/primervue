<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HolaMundo msg="Welcome to Your Vue.js App"/>
  <CineComponentVue/>
  <HomeComponent/>
  <MusicaComponentVue/>
</template>

<script>
import CineComponentVue from './components/CineComponent.vue'
import HolaMundo from './components/HelloWorld.vue'
import HomeComponent from './components/HomeComponent.vue'
import MusicaComponentVue from './components/MusicaComponent.vue'
export default {
  name: 'App',
  components: {
    HolaMundo,
    CineComponentVue,
    HomeComponent,
    MusicaComponentVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
