<template>
  <div class="container">
    <!-- <nuxt-link to="/articles">Articles</nuxt-link> -->
    <!-- <nuxt-link to="/products">Products</nuxt-link> -->
    <nuxt-content :document="resume" />

    <!-- Missions menu -->
    <!-- <ul>
      <li v-for="mission in missions" :key="mission.slug">
        <nuxt-link :to="mission.path">{{ mission.title }}</nuxt-link>
      </li>
    </ul> -->

    <!-- Missions listing -->
    <ul>
      <li v-for="mission in missions" :key="mission.slug">
        <h2>{{ mission.position }}</h2>
        <p>{{ mission.description }}</p>
        <a :href="mission.client.website">
          <strong>{{ mission.client.name }}</strong>
        </a>
        <h4 v-if="mission.front">FRONT</h4>
        <div v-for="tech of mission.front" :key="tech">
          {{ tech }}
        </div>
        <h4 v-if="mission.back">BACK</h4>
        <div v-for="tech of mission.back" :key="tech">
          {{ tech }}
        </div>
        <!-- <nuxt-content :document="mission" /> -->
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $content }) {
    const resume = await $content('resume').fetch()

    let query = $content('missions', { deep: true }).sortBy('date', 'desc')
    const missions = await query.fetch()

    return {
      resume,
      missions
    }
  }
}
</script>

<style>
.container {
  margin: 20px;
}

h4 {
  margin-top: 1rem;
}
</style>
