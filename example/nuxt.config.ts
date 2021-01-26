import type { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  head: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oxygen&display=swap",
      },
    ],
  },
  modules: ['@nuxt/content'],
  buildModules: ['@nuxtjs/tailwindcss'],
  components: true,
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    config: '~/tailwind.config.js',
  },
  hooks: {
    'content:file:beforeInsert': async (document, database) => {
      if (document.extension === '.json' && document.body) {
        const data = await database.markdown.toJSON(document.body);

        Object.assign(document, data);
      }
    }
  },
  content: {
    nestedProperties: ['categories.slug'],
    extendParser: {
      '.custom': file => ({ body: file.split('\n').map(line => line.trim()) })
    }
  }
};

export default config;
