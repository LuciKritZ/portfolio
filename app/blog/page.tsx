import { posts } from '#site/content';
import Posts from '@/components/posts/index.posts';
import { sortPosts } from '@/lib/utils';

type Props = {};

const BlogPage = (props: Props) => {
  const displaysPosts = posts;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  return (
    <div className='container max-w-4xl py-6 lg:py-10 mx-auto'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 space-x-4 lg:space-x-6 pb-4 border-b border-border'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>
            Blogs
          </h1>
          <p className='text-xl text-muted-foreground'>Sample blog</p>
        </div>
      </div>

      <Posts posts={sortedPosts} />
    </div>
  );
};

export default BlogPage;
