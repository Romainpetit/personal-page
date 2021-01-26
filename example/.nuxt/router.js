import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d74eb0a6 = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _3bafbbd8 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _dabbf336 = () => interopDefault(import('../pages/articles/_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _1a50fb8c = () => interopDefault(import('../pages/articles/_year/_month/index.vue' /* webpackChunkName: "pages/articles/_year/_month/index" */))
const _189a5a44 = () => interopDefault(import('../pages/articles/_year/_month/_slug.vue' /* webpackChunkName: "pages/articles/_year/_month/_slug" */))
const _e350bf96 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles",
    component: _d74eb0a6,
    name: "articles"
  }, {
    path: "/products",
    component: _3bafbbd8,
    name: "products"
  }, {
    path: "/articles/:slug",
    component: _dabbf336,
    name: "articles-slug"
  }, {
    path: "/articles/:year/:month",
    component: _1a50fb8c,
    name: "articles-year-month"
  }, {
    path: "/articles/:year/:month?/:slug",
    component: _189a5a44,
    name: "articles-year-month-slug"
  }, {
    path: "/",
    component: _e350bf96,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
