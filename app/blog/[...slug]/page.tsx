import { posts } from '#site/content';
import MDXComponent from '@/components/mdx.component';
import { notFound } from 'next/navigation';
import React from 'react';
import './mdx.css';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/');
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className='container py-6 prose dark:prose-invert max-w-4xl mx-auto'>
      <div className='mx-4 lg:mx-4'>
        <h1 className='mb-2'>{post.title}</h1>
        {!!post.description && (
          <p className='text-xl mt-0 text-muted-foreground'>
            {post.description}
          </p>
        )}
        <hr className='my-4' />
        <MDXComponent code={post.body} />
      </div>
    </article>
  );
}
