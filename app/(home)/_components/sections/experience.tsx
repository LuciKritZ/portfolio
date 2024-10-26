import Link from 'next/link';

import PortableTextParser from '@/components/portable-text-parser';
import { getFormattedTenure } from '@/lib/date';
import { Experience as ExperienceType } from '@/typings';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience = ({ experiences = [] }: ExperienceProps) => (
  <div className='overflow-hidden relative flex flex-col items-start'>
    <div className='text-3xl my-14'>Experience</div>
    <div className='flex flex-row'>
      <div className='relative gap-4 flex flex-col justify-start ml-[60px]'>
        {experiences.map(
          ({
            _id,
            isCurrent,
            isRemote,
            startDate,
            jobTitle,
            endDate,
            company,
            description,
            companyLink,
          }) => (
            <div
              key={_id}
              className='flex relative h-full justify-start flex-col'
            >
              <div className='flex flex-col space-y-1'>
                <span className='text-xl'>
                  {jobTitle},{' '}
                  <Link
                    className='text-accent'
                    href={companyLink}
                    target='_blank'
                  >
                    {company}
                  </Link>
                </span>
                <div className=''>
                  {getFormattedTenure(isCurrent, startDate, endDate)}
                </div>
              </div>
              <div className='space-y-2 mt-2'>
                <span className='text-primary'>Roles & Responsibilities:</span>
                <PortableTextParser
                  blocks={description}
                  className='space-y-2'
                />
              </div>
              <div className='z-20 rounded-full border border-border absolute w-4 h-4 -ml-[38px] mt-2 bg-black' />
            </div>
          )
        )}
      </div>
      <div className='w-[60px] h-full absolute flex items-center justify-center'>
        <div className='z-10 border border-border h-full rounded-2xl' />
      </div>
    </div>
  </div>
);
