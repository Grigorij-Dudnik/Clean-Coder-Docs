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
                  label: 'Quick Start',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Quick Start', slug: 'quick_start/quick_start' },
                      { label: 'Run with Docker', slug: 'quick_start/run_with_docker' },
                  ],
              },
              {
                label: 'Usage',
                autogenerate: { directory: 'usage' },
            },
              {
                  label: 'Advanced Features Installation',
                  items: [
                      { label: 'Enhancing Researcher agent', slug: 'advanced_features_installation/similarity_search_for_researcher' },
                      { label: 'Self-correcting Bugs', slug: 'advanced_features_installation/logs_check' },
                      { label: 'Local Models', slug: 'advanced_features_installation/local_models' },
                  ],
              },
              {
                  label: 'Features',
                  autogenerate: { directory: 'features' },
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