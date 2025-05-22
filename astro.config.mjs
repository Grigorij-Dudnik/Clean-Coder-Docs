import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Clean Coder Docs',
          social: {
              github: 'https://github.com/GregorD1A1/Clean-Coder-AI',
              discord: 'https://discord.gg/8gat7Pv7QJ',
          },
          sidebar: [
              {
                  label: 'Getting Started',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Quick Start', slug: 'getting_started/quick_start' },
                      { label: 'Run with Docker', slug: 'getting_started/run_with_docker' },
                  ],
              },
              {
                label: 'Usage',
                autogenerate: { directory: 'usage' },
            },
              {
                  label: 'Advanced Features Installation',
                  autogenerate: { directory: 'advanced_features_installation' },
              },
              {
                  label: 'Features',
                  autogenerate: { directory: 'features' },
              },
              {
                label: 'FAQ',
                autogenerate: { directory: 'FAQ' },
              },
              {
                  label: 'Community',
                  autogenerate: { directory: 'community' },
              },
          ],
      }),
	],

  output: 'server',
  adapter: cloudflare(),
});