import { ErrorHandler } from '@/lib/error-handler';
import { GET_PROJECTS } from '@/queries';
import { Project } from '@/typings';

import { client as sanityClient } from '../../../sanity/lib/client';

async function getProjects() {
  const projects: Project[] = await sanityClient.fetch(GET_PROJECTS);

  return Response.json({ projects }, { status: 200 });
}

export const GET = ErrorHandler(getProjects);
