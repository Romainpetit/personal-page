# Personal page

## Build Setup

```bash
# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn dev

# generate static project
yarn generate

# deploy /dist to gh-pages
yarn deploy

# view a production version of your app
yarn start
```

## Depencencies

### Nuxt content

The [content module](https://content.nuxtjs.org/) is a git files based headless CMS that provides powerful features when it comes to write blogs, documentation sites or just adding content to any regular website. In this post we will go through most of the benefits of this module and discover how we can create a blog with it.

For detailed explanation on how to create this blog, check out [the tutorial](https://nuxtjs.org/blog/creating-blog-with-nuxt-content).

Click here to view the [demo](https://blog-with-nuxt-content.netlify.app/)

![css](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAacjB3YMxfqmQXZT0HwCw1H-uU8BI904g_A&usqp=CAU)

### Metrical.scss

This is the responsive vertical library used across the project.
Use like this:

```
.layout {
    @include base(padding-bottom, 1);
}
```

Will result of `.layout` having a `padding-bottom` of 1 responsive **base unit**.
