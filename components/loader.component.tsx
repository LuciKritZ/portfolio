import { Progress } from './ui/progress';

type LoaderProps = {
  progress: number;
  loaderText?: string;
};

const Loader = ({ progress, loaderText = '' }: LoaderProps) => (
  <div className='w-screen h-screen flex justify-center items-center flex-col space-y-2'>
    <h1 className='text-2xl'>{loaderText}</h1>
    <Progress value={progress} className='w-[15%] sm:w-[30%] max-w-[100px]' />
  </div>
);

export default Loader;
