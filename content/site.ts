import { z } from 'zod';

export const siteSchema = z.object({
	brand: z.object({
		name: z.string(),
		tagline: z.string(),
	}),
	siteUrl: z.string().url(),
	ogImage: z.string(),
	navigation: z.array(
		z.object({
			label: z.string(),
			href: z.string(),
		}),
	),
	analytics: z.object({
		gtmId: z.string().optional(),
	}),
	contact: z.object({
		email: z.string().email(),
		phone: z.string(),
		address: z.object({
			street: z.string(),
			city: z.string(),
			zip: z.string(),
		}),
	}),
	socials: z.object({
		facebook: z.string().url().optional(),
		instagram: z.string().url().optional(),
		linkedin: z.string().url().optional(),
		gmb: z.string().url().optional(),
	}),
});

export type SiteConfig = z.infer<typeof siteSchema>;

export const site = siteSchema.parse({
	brand: {
		name: 'WCS Site Boilerplate',
		tagline: 'Strony www które sprzedają',
	},
	siteUrl: 'https://wcs-boilerplate.com',
	ogImage: '/og-default.jpg',
	navigation: [
		{ label: 'Strona główna', href: '/' },
		{ label: 'Oferta', href: '/oferta' },
		{ label: 'Kontakt', href: '/kontakt' },
	],
	analytics: {
		gtmId: process.env.NEXT_PUBLIC_GTM_ID,
	},
	contact: {
		email: 'kontakt@example.com',
		phone: '+48 123 456 789',
		address: {
			street: 'ul. Przykładowa 1',
			city: 'Warszawa',
			zip: '00-001',
		},
	},
	socials: {
		facebook: 'https://facebook.com/webcraftstudio',
		instagram: undefined,
		linkedin: undefined,
		gmb: undefined,
	},
});
