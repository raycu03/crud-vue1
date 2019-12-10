<template>
  <div style="margin:20px" class="text-center">
    <h1>INGRESO DE NUEVO ESTUDIANTE</h1>
    <form id="form" style="margin-top:50px">
      <b-form-group
        label-cols="4"
        label-cols-lg="2"
        label="Name"
        label-for="input-default"
      >
        <b-form-input
          type="text"
          v-model="model.name"
          placeholder="Ingrese Nombre"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label-cols="4"
        label-cols-lg="2"
        label="Code"
        label-for="input-default"
      >
        <b-form-input
          type="text"
          v-model="model.code"
          placeholder="Ingrese Codigo"
        ></b-form-input>
      </b-form-group>

      <b-button
        type="submit"
        @click="POST_STUDENTS(model)"
        variant="success"
        style="margin:20px"
        >Agregar</b-button
      >
    </form>

    <h1>Tabla de Estudiantes</h1>
    <div class="container">
      <!-- <b-table striped hover :items="STUDENTS"> </b-table> -->
      <b-form>
        <b-table :items="STUDENTS" :fields="cols">
          <template v-slot:cell(action)="row">
            <b-button
              type="submit"
              variant="danger"
              @click="DELETE_STUDENTS(row.item.id)"
              >Eliminar</b-button
            >
            <b-button variant="primary" style="margin-left:20px"
              >Actualizar</b-button
            >
          </template>
        </b-table>
      </b-form>
      <div>
        <b-button
          variant="success"
          style="margin:20px"
          router-link
          to="/newStudent"
          >Ingresar</b-button
        >
      </div>
    </div>
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
      POST_STUDENTS: TypesStore.actions.POST_STUDENTS,
      DELETE_STUDENTS: TypesStore.actions.DELETE_STUDENTS
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
      cols: ["id", "code", "name", "action"],
      model: {
        code: "",
        name: ""
      }
    };
  }
};
</script>
<style scoped></style>
