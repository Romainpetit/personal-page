export { default as MovieInfo } from '../../components/global/MovieInfo.vue'

export const LazyMovieInfo = import('../../components/global/MovieInfo.vue' /* webpackChunkName: "components/global/MovieInfo" */).then(c => c.default || c)
