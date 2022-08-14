import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});

// epic "github charges money to deploy shit on their piss-smelling servers"
import { defineConfig } from 'astro/config';

 import vercel from '@astrojs/vercel/serverless';

export default defineConfig({

   output: 'server',

   adapter: vercel(),
});