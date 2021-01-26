import Vue from 'vue'

const globalComponents = {
  MovieInfo: () => import('../../components/global/MovieInfo.vue' /* webpackChunkName: "components/movie-info" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
