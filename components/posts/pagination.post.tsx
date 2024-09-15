'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { HTMLAttributes } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';
import { cn } from '@/lib/utils';

type QueryPaginationProps = {
  totalPages: number;
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

const QueryPagination = ({ totalPages, className }: QueryPaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(prevPage)}
            className={cn(prevPage >= 1 ? '' : 'hidden')}
          />
        </PaginationItem>

        {Array(totalPages)
          .fill('')
          .map((_, index) => (
            <PaginationItem
              className='hidden sm:inline-block'
              key={`page-btn-${index}`}
            >
              <PaginationLink
                isActive={currentPage === index + 1}
                href={createPageURL(index + 1)}
                className={cn(
                  currentPage === index + 1
                    ? 'pointer-events-none opacity-50'
                    : ''
                )}
              >
                {index + 1}
              </PaginationLink>{' '}
            </PaginationItem>
          ))}

        <PaginationItem>
          <PaginationNext
            href={createPageURL(nextPage)}
            className={cn(nextPage <= totalPages ? '' : 'hidden')}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default QueryPagination;
