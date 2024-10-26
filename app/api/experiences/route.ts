import { ErrorHandler } from '@/lib/error-handler';
import { GET_EXPERIENCES } from '@/queries';
import { Experience } from '@/typings';

import { client as sanityClient } from '../../../sanity/lib/client';

async function getExperiences() {
  const experiences: Experience[] = await sanityClient.fetch(GET_EXPERIENCES);

  return Response.json({ experiences }, { status: 200 });
}

export const GET = ErrorHandler(getExperiences);
