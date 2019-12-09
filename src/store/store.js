import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { TypesStore } from "./types/store.type";
import axios from "axios";

export const store = new Vuex.Store({
  //variables
  state: {
    lenguage: "es",
    students: []
  },
  //Valor de las variables
  getters: {
    [TypesStore.state.LENGUAGE]: state => state.lenguage,
    [TypesStore.state.STUDENTS]: state => state.students,
    [TypesStore.state.PSTUDENTS]: state => state.students
  },
  //LLamado de API y parte operacional
  actions: {
    [TypesStore.actions.GET_STUDENTS]: ({ commit }) => {
      axios.get("students").then(response => {
        commit(TypesStore.mutations.SET_STUDENTS, response.data);
      });
    },
    [TypesStore.actions.POST_STUDENTS]: ({ commit }, datajson) => {
      axios
        .post("students", datajson)
        .then(function(response) {
          commit(TypesStore.mutations.SET_PSTUDENTS, response.data);
        })
        .catch(function(error) {
          commit(TypesStore.mutations.SET_PSTUDENTS, error);
        });
    }
  },
  //Cambio de valor de variables
  mutations: {
    [TypesStore.mutations.SET_LANGUAGE]: (state, lenguage) => {
      state.lenguage = lenguage;
    },
    [TypesStore.mutations.SET_STUDENTS]: (state, students) => {
      state.students = students;
    }
  },
  modules: {}
});
