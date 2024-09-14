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
                  label: 'Getting Started',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'AI Coder', slug: 'getting_started/programmer_pipeline' },
                      { label: 'AI Project Manager', slug: 'getting_started/manager' },
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
                  label: 'Usage',
                  autogenerate: { directory: 'usage' },
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