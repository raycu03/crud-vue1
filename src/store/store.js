import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { TypesStore } from "./types/store.type";
import axios from "axios";

export const store = new Vuex.Store({
  //variables
  state: {
    lenguage: "es",
    students: [],
    pstudents: [],
    dstudents: []
  },
  //Valor de las variables
  getters: {
    [TypesStore.state.LENGUAGE]: state => state.lenguage,
    [TypesStore.state.STUDENTS]: state => state.students,
    [TypesStore.state.PSTUDENTS]: state => state.pstudents
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
    },
    [TypesStore.actions.DELETE_STUDENTS]: ({ commit }, id) => {
      axios.delete("students/" + id).then(response => {
        commit(TypesStore.mutations.SET_DSTUDENTS, response.data);
      });
    },
    [TypesStore.actions.PUT_STUDENTS]: ({ commit }, list) => {
      axios
        .put(`students/${list[0]}`, list[1])
        .then(function(response) {
          commit(TypesStore.mutations.SET_PUTSTUDENTS, response.data);
        })
        .catch(function(error) {
          commit(TypesStore.mutations.SET_PUTSTUDENTS, error);
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
    },
    [TypesStore.mutations.SET_PSTUDENTS]: (state, pstudents) => {
      state.pstudents = pstudents;
    },
    [TypesStore.mutations.SET_DSTUDENTS]: (state, dstudents) => {
      state.dstudents = dstudents;
    }
  },
  modules: {}
});
