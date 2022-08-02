<template> 
    <div class="edicion">
        <h1>Edición: {{juegoOp}}</h1>
        <form>
            <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input type="text" v-model="nombreOp" class="form-control" v-bind:id="`formName`">
            </div>
            <div class="mb-3">
                <label class="form-label">Opiniones</label>
                <input type="text" v-model="opinionOp" class="form-control" v-bind:id="`formOpinion`">
            </div>
            <router-link to="/administracion" type="button" class="btn btn-primary">Regresar</router-link>    <button type="button" class="btn btn-info" v-on:click="prepareOpinion();editOpinion(newOpinion)">Guardar</button>   


            <input type="hidden">
        </form>
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex'
    export default{
        name: 'EdicionView',
        data(){
            return{
                juegoOp:'',
                nombreOp:'',
                opinionOp:'',
                newOpinion:{}
            }
        },
        methods:{
            ...mapActions(['editOpinion']),
            prepareOpinion(){
                let index = this.$route.params.id;
                this.newOpinion = {
                    'id': index,
                    'opinion':{
                        'game': this.juegoOp,
                        'name': this.nombreOp,
                        'opinion': this.opinionOp
                    }
                }
                console.log(this.newOpinion);
                
            }

        },
        computed:{
            ...mapState(['opinions']),

        },
        created(){
            let index = this.$route.params.id;
            let estaOpinion = this.opinions[index];
            console.log(`Esta opinion: ${estaOpinion.name} ${estaOpinion.opinion}`);
            this.nombreOp = estaOpinion.name;
            this.opinionOp = estaOpinion.opinion;
            this.juegoOp = estaOpinion.game;
        }
    }
</script>
<style scoped>
h1{
    color: whitesmoke;
}
.edicion{
    display: flex;
    flex-direction: column;
    align-items: center;
}
form{
width: 60%;
}
</style>