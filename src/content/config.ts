import { defineCollection, z } from 'astro:content';
import { ProjectTag } from '../types/projectTags';

// Get all ProjectTag enum values as a tuple for Zod validation
const projectTagValues = Object.values(ProjectTag) as [string, ...string[]];

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		published: z.coerce.date(),
		tags: z.array(z.enum(projectTagValues)),
		cover: z.string(),
	}),
});

const projects = defineCollection({
	type: 'data',
	schema: z.object({
		backgroundImage: z.string(),
		title: z.string(),
		creationDate: z.coerce.date(),
		finishDate: z.coerce.date(),
		shortDescription: z.string(),
		longDescription: z.string(),
		tags: z.array(z.enum(projectTagValues)),
		socialMediaLink: z.string(),
		aspectRatio: z.string().optional(),
	}),
});

export const collections = { blog, projects };
