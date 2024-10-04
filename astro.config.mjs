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
          },
          sidebar: [
              {
                  label: 'Quick Start',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'AI Coder', slug: 'quick_start/programmer_pipeline' },
                      { label: 'AI Project Manager', slug: 'quick_start/manager' },
                      { label: 'Run with Docker', slug: 'quick_start/run_with_docker' },
                  ],
              },
              {
                  label: 'Advanced Features Installation',
                  items: [
                      { label: 'Enhancing Researcher agent', slug: 'advanced_features_installation/similarity_search_for_researcher' },
                      { label: 'Self-correcting Bugs', slug: 'advanced_features_installation/logs_check' },
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