<template>
  <div class="container-fluid" style="margin-top:1rem;color:white">
    <div class="col" style="padding:12px" v-if="currentPages > 1">
      Sayfa : {{ currentPages }}
    </div>
    <div
      class="row"
      v-masonry
      transition-duration="0.3s"
      item-selector=".mono"
      v-if="popularMovies.count > 20"
    >
   
      <transition-group name="slide-fade">
        <!---->
        <div
          class="col l3 m6 s12 mono"
          v-for="(item, i) in popularMovies.data.results"
          :key="i + 'z'"
          v-masonry-tile
        >
          <div class="bg-blue-x card darken-1 ">
            <div class="card-wrap">
              <img
                class="card-img"
                :src="
                  'https://www.themoviedb.org/t/p/w220_and_h330_face' +
                    item.poster_path
                "
                alt=""
                onerror="if (this.src != 'data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7') this.src = 'data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';"
              />
              <div class="card-content white-text">
                <span class="card-title">{{ item.original_title }}</span>
                <p>
                  {{ item.overview | shortOwerview }}
                </p>
              </div>
              <div class="card-action">
                <router-link
                  :to="{ name: 'movies', params: { id: item.id } }"
                  custom
                  v-slot="{ navigate, href }"
                >
                  <a @click="navigate" :href="href"
                    ><i class="fa fa-film" style="color:white"></i> Ayrıntılara
                    Göz At
                  </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <br />

    <div style="justify-content: center;display: flex;margin-bottom: 2rem">
      <a
        class="btn-floating btn-large waves-effect waves-light bg-blue-x"
        style="margin-right:2px"
        v-if="currentPages > 1"
        @click="preventPage"
      >
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </a>
      <a
        class="btn-floating btn-large waves-effect waves-light bg-blue-x"
        style="margin-right:2px"
        @click="nextPage"
        v-if="currentPages + 1 <= popularMovies.total_pages"
      >
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPages: 1,
    };
  },
  created() {
    this.$store.dispatch("popularMovies", this.currentPages);
  },
  computed: {
    popularMovies() {
      return this.$store.getters.getPopularMovies;
    },
  },
  updated() {
    this.$redrawVueMasonry();
  },
  filters: {
    shortOwerview: function(value) {
      if (value == "") {
        return "";
      } else {
        return value.substring(0, 80) + "...";
      }
    },
  },
  methods: {
    async nextPage() {
      window.scrollTo(0, 0);
      this.currentPages++;
      this.$store.dispatch("popularMovies", this.currentPages);
    },
    async preventPage() {
      window.scrollTo(0, 0);
      this.currentPages--;
      this.$store.dispatch("popularMovies", this.currentPages);
    },
  },
};
</script>
<style scoped>
.bg-blue-x {
  background-color: #2a3253 !important;
}
.card-wrap {
  overflow: hidden;
  position: relative;
}

.card-img {
  opacity: 0.2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
}

.card-content {
  position: relative;
}
</style>
