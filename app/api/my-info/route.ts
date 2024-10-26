import { ErrorHandler } from '@/lib/error-handler';
import { GET_MY_INFO } from '@/queries';
import { MyInfo } from '@/typings';

import { client as sanityClient } from '../../../sanity/lib/client';

async function getMyInfo() {
  const myInfo: MyInfo = await sanityClient.fetch(GET_MY_INFO);

  return Response.json({ myInfo }, { status: 200 });
}

export const GET = ErrorHandler(getMyInfo);
