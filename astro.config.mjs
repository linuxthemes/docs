// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

export default defineConfig({
	site:"https://docs.linuxthemes.org/",
	integrations: [
		starlight({
			title: 'Themes',
			social: [
				{ icon: 'codeberg', label: 'Codeberg', href: 'https://codeberg.org/withastro/starlight' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Install', slug: 'guides/install' },
						{ label: 'Configuratin', slug: 'guides/configuration' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [         
				catppuccin({
          dark: { flavor: "macchiato", accent: "sky" },
          light: { flavor: "latte", accent: "sky" }
        })],
		}),
	],
});
