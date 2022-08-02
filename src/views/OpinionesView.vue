<template>
    <div  class="opiniones">
        <h1>Opiniones</h1>
        <div class="accordion" id="accordionOpinion">
            <div class="accordion-item" v-for="(opinion,index) in opinions" v-bind:key="index">
                <h2 class="accordion-header" v-bind:id="`heading${index}`">
                <button class="accordion-button collapsed accordion1" type="button" data-bs-toggle="collapse" v-bind:data-bs-target="`#collapse${index}`" aria-expanded="false" aria-controls="collapseTwo">
                    <p>Opinion creada por <strong>{{opinion.name}}</strong> para el juego <strong>{{opinion.game}}</strong></p>
                </button>
                </h2>
                <div v-bind:id="`collapse${index}`" class="accordion-collapse collapse" v-bind:aria-labelledby="`heading${index}`" data-bs-parent="#accordionOpinion">
                <div class="accordion-body accordion2">
                    <p>{{opinion.opinion}}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default{
        name: 'OpinionesView',
        methods:{},
        computed:{
            ...mapState(['opinions'])
        }
    }
</script>
<style scoped>
h1{
    color: whitesmoke;
    margin: 15px 0 15px 0;
 
}
.opiniones{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.accordion{
width: 60%;
}
.accordion1{
  background-color: #316282;
    color: whitesmoke;
}
.accordion2{
  background-color: #C5C3C0;

}
</style>