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
              variant="danger"
              type="submit"
              @click="DELETE_STUDENTS(row.item.id)"
              >Eliminar{{ row.item.id }}</b-button
            >
            <b-button
              variant="warning"
              style="margin-left:20px"
              @click="row.toggleDetails"
              class="mr-2"
            >
              {{ row.detailsShowing ? "Cancelar " : "" }} Actualizar
            </b-button>
          </template>
          <template v-slot:row-details="row">
            <b-form>
              <b-form-group
                id="input-group-1"
                label="Code:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="model.code"
                  required
                  placeholder="code"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="model.name"
                  required
                  placeholder="Enter name"
                ></b-form-input>
              </b-form-group>

              <b-button
                type="submit"
                @click="PUT_STUDENTS([row.item.id, model])"
                variant="primary"
                >Actualizar</b-button
              >
            </b-form>
          </template>
        </b-table>
      </b-form>
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
      DELETE_STUDENTS: TypesStore.actions.DELETE_STUDENTS,
      PUT_STUDENTS: TypesStore.actions.PUT_STUDENTS
    }),
    borr: function(id, code) {
      console.log(id);
      console.log(code);

      this.DELETE_STUDENTS(id, 1), this.STUDENTS.splice(code, 1);
    }
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
