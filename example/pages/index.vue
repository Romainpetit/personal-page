<template>
    <div>
        <!-- <nuxt-link to="/articles">Articles</nuxt-link> -->
        <!-- <nuxt-link to="/products">Products</nuxt-link> -->
        <h3>Serious front-end fun.</h3>
        <nuxt-content :document="resume" />
    </div>
</template>

<script lang="ts">
export default {
    async asyncData({ $content }) {
        const resume = await $content('resume').fetch()

        return {
            resume,
        }
    },
}
</script>
