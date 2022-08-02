<template>
    <div  class="administracion">
        <h1>Administración</h1>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Persona</th>
            <th scope="col">Juego</th>
            <th scope="col">Opinión</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(opinion,index) in opinions" v-bind:key="index">
                <th scope="row">{{index}}</th>
                <td>{{opinion.name}}</td>
                <td>{{opinion.game}}</td>
                <td>{{opinion.opinion}}</td>
                <td><button type="button" class="btn btn-danger" v-on:click="deleteOpinion(index)">Eliminar</button>  
                <router-link v-bind:to="`/edicion/${index}`" type="button" class="btn btn-info" >Editar</router-link></td>
            </tr>
        </tbody>
        </table>
    </div>
    
</template>
<script>
    import { mapActions, mapState } from 'vuex'
    export default{
        name: 'AdministracionView',
        methods:{
            ...mapActions(['deleteOpinion']),

        },
        computed:{
            ...mapState(['opinions']),
        }
    }
</script>
<style scoped>
h1{
    color: whitesmoke;
    margin: 15px 0 15px 0;
 
}
th,td{
    color: whitesmoke;
}
.administracion{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.table{
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