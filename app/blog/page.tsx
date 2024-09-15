import { posts } from '#site/content';
import PostsList from '@/components/posts/list.posts';
import QueryPagination from '@/components/posts/pagination.post';
import { sortPosts } from '@/lib/utils';

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
  const currentPage: number = Number(searchParams?.page || 1);
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  const displaysPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  return (
    <div className='container max-w-4xl py-6 lg:py-10 mx-auto'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 spacing-x-4 lg:spacing-x-6 pb-4 border-b border-border'>
        <div className='flex-1 spacing-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>
            Blogs
          </h1>
          <p className='text-xl text-muted-foreground'>Sample blog</p>
        </div>
      </div>

      <PostsList posts={displaysPosts} />

      <QueryPagination totalPages={totalPages} className='justify-end mt-4' />
    </div>
  );
};

export default BlogPage;
