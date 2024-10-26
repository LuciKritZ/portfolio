import { ErrorHandler } from '@/lib/error-handler';
import { GET_TESTIMONIALS } from '@/queries';
import { Testimonial } from '@/typings';

import { client as sanityClient } from '../../../sanity/lib/client';

async function getTestimonials() {
  const testimonials: Testimonial[] =
    await sanityClient.fetch(GET_TESTIMONIALS);

  return Response.json({ testimonials }, { status: 200 });
}

export const GET = ErrorHandler(getTestimonials);
