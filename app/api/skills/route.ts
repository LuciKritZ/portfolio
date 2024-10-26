import { ErrorHandler } from '@/lib/error-handler';
import { GET_SKILLS } from '@/queries';
import { Skill } from '@/typings';

import { client as sanityClient } from '../../../sanity/lib/client';

async function getSkills() {
  const skills: Skill[] = await sanityClient.fetch(GET_SKILLS);

  return Response.json({ skills }, { status: 200 });
}

export const GET = ErrorHandler(getSkills);
