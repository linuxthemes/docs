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
						{ label: 'Install', slug: 'guides/install' },
						{ label: 'Configuration', slug: 'guides/configuration' },
						{ label: 'Contributing', slug: 'guides/contributing' },
					],
				},
				{
					label: 'Reference',
					items:[
						{ label: 'Themes', slug: 'reference/themes' },
						{ label: 'Packages', slug: 'reference/packages' },
						{ label: 'Programs', slug: 'reference/programs' },
						{ label: 'Desktops', slug: 'reference/desktops' },
						{ label: 'Keymaps', slug: 'reference/keymaps' },
						{ label: 'Icons', slug: 'reference/icons' },
						{ label: 'Alias', slug: 'reference/alias' },
					],
					// autogenerate: { directory: 'reference' },
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
