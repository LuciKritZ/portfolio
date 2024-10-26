import { type SchemaTypeDefinition } from 'sanity';

import blogSchema from './blog.schema';
import experienceSchema from './experience.schema';
import myInfoSchema from './my-info.schema';
import projectSchema from './project.schema';
import skillSchema from './skill.schema';
import socialSchema from './social.schema';
import testimonialSchema from './testimonial.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogSchema,
    experienceSchema,
    myInfoSchema,
    projectSchema,
    skillSchema,
    socialSchema,
    testimonialSchema,
  ],
};
