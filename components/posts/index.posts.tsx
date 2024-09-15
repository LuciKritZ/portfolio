import { Post } from '#site/content';
import PostItem from './item.post';

interface Props {
  posts?: Post[];
}

const Posts = ({ posts = [] }: Props) => {
  if (!posts.length) {
    return <p className='space-y-6 text-center'>Nothing to see here, yet.</p>;
  }
  return (
    <ul className='flex flex-col space-x-4 lg:space-x-6'>
      {posts.map(({ slug, date, title, description = '' }) => (
        <li key={slug}>
          <PostItem
            slug={slug}
            date={date}
            title={title}
            description={description}
          />
        </li>
      ))}
    </ul>
  );
};

export default Posts;
