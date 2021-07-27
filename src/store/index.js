import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    popularMovies: [],
    moviesDetails: [],
  },
  mutations: {
    popularMovies(state, fields) {
      state.moviesDetails = [];
      state.popularMovies = fields;
    },
    moviesDetails(state, fields) {
      state.moviesDetails = fields;
    },
  },
  actions: {
    popularMovies(context, pagesNo) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=3044afc915e1301ae1d9551614db3711&language=tr-TRS&page=${pagesNo}`
        )
        .then((response) => {
          context.commit("popularMovies", {
            data: response.data,
            count: response.data.results.length,
          });
        });
    },
    moviesDetails(context, movieID) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieID}?api_key=3044afc915e1301ae1d9551614db3711&language=tr-TR`
        )
        .then((response) => {
          context.commit("moviesDetails", response.data);
        })
        .catch(() => {
          context.commit("moviesDetails", { success: "false" });
        });
    },
  },
  getters: {
    getPopularMovies(state) {
      return state.popularMovies;
    },
    getMoviesDetails(state) {
      return state.moviesDetails;
    },
  },
});
export default store;
