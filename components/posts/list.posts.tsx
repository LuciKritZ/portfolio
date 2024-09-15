import { Post } from '#site/content';
import { HTMLAttributes } from 'react';
import PostItem from './item.post';
import { cn } from '@/lib/utils';

interface Props {
  posts?: Post[];
  containerClassName?: HTMLAttributes<HTMLUListElement>['className'];
  postClassName?: HTMLAttributes<HTMLLIElement>['className'];
}

const PostsList = ({
  posts = [],
  containerClassName = '',
  postClassName = '',
}: Props) => {
  if (!posts.length) {
    return <p className='spacing-y-6 text-center'>Nothing to see here, yet.</p>;
  }
  return (
    <ul className={cn(containerClassName, 'flex flex-col')}>
      {posts.map(({ slug, date, title, description = '' }) => (
        <li key={slug} className={cn(postClassName)}>
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

export default PostsList;
