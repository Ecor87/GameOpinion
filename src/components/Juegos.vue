<template>
  <div class="juegos">
    <h1>{{ msg }}</h1>
    <!--Juegos-->
    <div class="container row cardContainer" >
      <div class="card col-4 w-25 text-white" v-for="(juego,index) in juegosJson" v-bind:key="index"> <!--Index permite crear un modal diferente para cada juego-->
        <img v-bind:src="juego.background_image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>{{juego.name}}</strong></h5>
          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-white cardText">Rating: {{juego.rating}}</li>
          <li class="list-group-item text-white cardText">Released: {{juego.released}}</li>
          <li class="list-group-item text-white cardText">Updated: {{juego.updated}}</li>
        </ul>
        <div class="card-body">
          <button type="button" class="btn buttonOpinion" data-bs-toggle="modal" v-bind:data-bs-target="`#commentModal${index}`">Opinar</button>
          <!-- <a href="#" class="card-link"></a> -->
          <!-- <a href="#" class="card-link">Another link</a> -->
        </div>
        <!--Modal-->
        <div class="modal fade" v-bind:id="`commentModal${index}`" tabindex="-1" v-bind:aria-labelledby="`commentModalLabel${index}`" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" v-bind:id="`commentModalLabel${index}`">Opine sobre {{juego.name}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label class="form-label">Nombre</label>
                    <input type="text" v-model="nombreOp" class="form-control" v-bind:id="`formName${index}`">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Opiniones</label>
                    <input type="text" v-model="opinionOp" class="form-control" v-bind:id="`formOpinion${index}`">
                  </div>
                  <input v-bind:value="juego.name" type="hidden">
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn buttonOpinionB" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn buttonOpinion" data-bs-dismiss="modal" v-on:click="procesarOpinion(juego.name);clean()">Guardar</button>
              </div>
            </div>
          </div>
        </div>
        <!--Modal-->
      </div>    
    </div>
    <!--Juegos-->


  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  name: 'Juegos',
  props: {
    msg: String
  },
  data(){
    return{
      nombreOp:'',
      opinionOp:'',
      juegoOp:''
    }
  },
  methods:{
    ...mapActions(['insertOpinion']),
    procesarOpinion(nombreJuego){
      console.log(nombreJuego);
      let opinionObject = {
        'game':nombreJuego,
        'name':this.nombreOp,
        'opinion':this.opinionOp
      };
      this.insertOpinion(opinionObject)
    },
    clean(){
      this.nombreOp = ''
      this.opinionOp = ''
      this.juegoOp = ''
    }

  },
  computed:{
    ...mapState(['juegosJson']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .juegosHome{
  display: flex;
} */
h1{
  color: whitesmoke;
  margin-top: 15px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.juegos{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card{
  margin: 1%;
  background-color: #316282;
}
.cardContainer{
  display: flex;
  justify-content: center;
}
.cardText{
  background-color: #316282;

}
.buttonOpinion{
  background-color: #1B2F48;
  color: white;
}
.buttonOpinionB{
  background-color: #C5C3C0;
  color: white;
}
.modal-body, .modal-header, .modal-footer {
  background-color: #316282;
}
</style>
