<template>
  <div style="color:white;">
    <div class="movie-wrap" v-if="moviesDetails.title">
      <img
        class="movie-bg"
        :src="
          'https://image.tmdb.org/t/p/original/' + moviesDetails.backdrop_path
        "
        alt=""
        onerror="if (this.src != 'data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7') this.src = 'data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';"
      />
      <div class="movie-content">
        <div class="container" style="padding-top:4rem">
          <h3>{{ moviesDetails.title }}</h3>
          <p style="margin-top:2rem;font-size:1.1rem;padding-bottom:1rem">
            {{ moviesDetails.overview }}
          </p>
        </div>
      </div>
    </div>
    <div v-else style="text-align:center;padding:3rem 0">
      Aradığınız şey Bulunamadı
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("moviesDetails", this.$route.params.id);
  },
  computed: {
    moviesDetails() {
      return this.$store.getters.getMoviesDetails;
    },
  },
  metaInfo() {
    return {
      title: this.moviesDetails.title,
    };
  },
};
</script>
<style>
.movie-wrap {
  overflow: hidden;
  position: relative;
  min-height: 100vh;
}

.movie-bg {
  opacity: 0.05;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 600px;
  height: 100%;
}

.movie-content {
  position: relative;
}
</style>
