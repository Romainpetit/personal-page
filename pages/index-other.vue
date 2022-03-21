<template>
  <article
    class="flex xl:h-screen w-screen xl:overflow-hidden xs:flex-col xl:flex-row"
  >
    <div class="relative xl:w-1/3 xs:w-full xs:h-84 xl:h-full post-left">
      <img
        :src="home[0].img"
        :alt="home[0].alt"
        class="absolute h-full w-full object-cover"
      />
      <!-- <div class="overlay"></div>
      <div class="absolute top-32 left-32 text-white">
        <NuxtLink to="/"><Logo /></NuxtLink>
        <div class="mt-16 -mb-3 flex uppercase text-sm">
          <p class="mr-3">
            {{ formatDate(home[0].updatedAt) }}
          </p>
          <span class="mr-3">•</span>
          <p>{{ home[0].author.name }}</p>
        </div>
        <h1 class="text-6xl font-bold">{{ home[0].title }}</h1>
      </div> -->
    </div>
    <div
      class="relative xs:py-8 xs:px-8 xl:py-32 xl:px-16 xl:w-2/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"
    >
      <!-- <h1 class="font-bold text-4xl">{{ home[0].title }}</h1>
      <p>{{ home[0].description }}</p>
      <p class="pb-4">Post last updated: {{ formatDate(home[0].updatedAt) }}</p> -->
      <!-- table of contents -->
      <!-- <nav class="pb-6">
        <ul>
          <li
            v-for="link of home[0].toc"
            :key="link.id"
            :class="{
              'font-semibold': link.depth === 2
            }"
          >
            <nuxtLink
              :to="`#${link.id}`"
              class="hover:underline"
              :class="{
                'py-2': link.depth === 2,
                'ml-2 pb-2': link.depth === 3
              }"
              >{{ link.text }}</nuxtLink
            >
          </li>
        </ul>
      </nav> -->
      <!-- content from markdown -->
      <nuxt-content :document="home[0]" />
      <!-- content author component -->
      <!-- <author :author="home.author" /> -->
      <!-- prevNext component -->
      <!-- <PrevNext :prev="prev" :next="next" class="mt-8" /> -->
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const home = await $content('home', params.slug).fetch()
    return {
      home
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: 'CSS Reference | 2-days course'
    }
  }
}
</script>

<style lang="scss">
.nuxt-content {
  p,
  ul {
    margin-bottom: 1rem;
  }
  h1 {
    margin: 8rem 0 1rem;
    font-weight: bold;
    font-size: 3rem;
  }
  h2 {
    margin: 4rem 0 1rem;
    font-weight: bold;
    font-size: 2rem;
  }
  h3 {
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1.5rem;
  }
  h4 {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
  a {
    color: #42b983;
    text-decoration: underline;
  }
  h1,
  h2 {
    a {
      margin-left: -20px;
    }
  }
  h1 + h2 {
    margin-top: 1rem;
  }
  a:hover {
    text-decoration: none;
  }
  .icon.icon-link {
    background-image: url('~assets/svg/icon-hashtag.svg');
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
  }
  pre {
    border-radius: 3px;
  }
  .red {
    color: #af1e3a;
  }
  .green {
    color: #388e3c;
  }

  code {
    font-weight: 700;
  }

  iframe {
    margin-bottom: 1rem;
  }

  .nuxt-content-highlight {
    code {
      font-weight: 400;
    }
  }
  ul {
    margin-left: 1rem;
  }
  li {
    list-style-type: '\25AA';
    padding-left: 8px;
  }
}
.nuxt-content-highlight + *:not(.nuxt-content-highlight) {
  padding-top: 1rem;
}
</style>
