import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';
import solidJs from '@astrojs/solid-js';
import vercelDisableBlocks from './plugins/vercelDisableBlocks';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel/edge';
import netlify from "@astrojs/netlify/functions";
const envAdapter = () => {
  if (process.env.OUTPUT == 'vercel') {
    return vercel();
  } else {
    return node({
      mode: 'standalone'
    });
  }
};


// https://astro.build/config
export default defineConfig({
  integrations: [unocss(), solidJs()],
  output: 'server',
  adapter: netlify(),
  vite: {
    plugins: [process.env.OUTPUT == 'vercel' && vercelDisableBlocks()]
  }
});