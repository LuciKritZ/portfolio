import { ErrorHandler } from '@/lib/error-handler';
import { GET_SOCIALS } from '@/queries';
import { Social } from '@/typings';

import { client as sanityClient } from '../../../sanity/lib/client';

async function getSocials() {
  const socials: Social[] = await sanityClient.fetch(GET_SOCIALS);

  return Response.json({ socials }, { status: 200 });
}

export const GET = ErrorHandler(getSocials);
