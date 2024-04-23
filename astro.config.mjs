import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://swingerasteps.com",
  integrations: [tailwind(), 
			icon(), 
			mdx(), 
			sitemap(), 		
			partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),],
});

