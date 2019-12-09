<template>
  <div>
    <div class="container text-center">
      <h1>INGRESO DE NUEVO ESTUDIANTE</h1>
      <form id="form" style="margin-top:50px">
        <b-form-group label-cols="4" label-cols-lg="2" label="Name" label-for="input-default">
          <b-form-input type="text" v-model="model.name" placeholder="Ingrese Nombre"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="2" label="Code" label-for="input-default">
          <b-form-input type="text" v-model="model.code" placeholder="Ingrese Codigo"></b-form-input>
        </b-form-group>

        <b-button
          type="submit"
          @click="POST_STUDENTS(model)"
          variant="success"
          style="margin:20px"
        >Agregar</b-button>
      </form>
    </div>

    <b-table striped hover :items="STUDENTS"></b-table>
  </div>
</template>
<script>
import { TypesStore } from "./../store/types/store.type";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "StudentComponent",

  methods: {
    ...mapActions({
      GET_STUDENTS: TypesStore.actions.GET_STUDENTS,
      POST_STUDENTS: TypesStore.actions.POST_STUDENTS
    })
  },
  computed: {
    ...mapGetters({
      STUDENTS: TypesStore.state.STUDENTS,
      PSTUDENTS: TypesStore.state.PSTUDENTS
    })
  },

  mounted() {
    this.GET_STUDENTS();
  },
  data() {
    return {
      model: {
        name: "",
        code: ""
      }
    };
  }
};
</script>
<style scoped>
</style>