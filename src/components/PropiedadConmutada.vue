<template>
  <div>
    <label>Introduzca un numero</label>
    <input type="text" v-model="numero">
    <div v-html="evaluarNumero"></div>
    <ul>
        <li v-for="game in juegosRojos" :key="game" v-html="game">
        </li>
    </ul>
    <ul>
        <li v-for="game in juegos" :key="game">
            {{ game }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "PropiedadConmutada",
    computed:{
        evaluarNumero(){
            let data = "";
            if(this.numero % 2 === 0){
                data =  `<h4 style:"color:green">Par: ${this.numero}</h4>`;
            }else{
                data =  `<h4 style:"color:red">Impar: ${this.numero}</h4>`;
            }
            return data;
        }
        ,
        juegosRojos(){
            return this.juegos.map((juego) =>{
                return `<span style="color:red;">${juego}</span>`
            })
        }
    },
    data(){
        return{
            numero: 0,
            juegos:["Parchis","Canicas","Luz verde, luz roja","La galleta"]
        }
    }
}
</script>