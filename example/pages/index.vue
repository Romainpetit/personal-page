<template>
    <div>
        <nuxt-link to="/articles">Articles</nuxt-link>
        <nuxt-link to="/products">Products</nuxt-link>
        <h3>Content</h3>
        <nuxt-content :document="markdown" />
    </div>
</template>

<script lang="ts">
export default {
    async asyncData({ $content }) {
        const markdown = await $content('markdown').fetch()

        return {
            markdown,
        }
    },
}
</script>
