import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';
import Callout from './callout.component';

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  // TODO: Add custom styles for each component
};

interface MDXProps {
  code: string;
}

const MDXComponent = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};

export default MDXComponent;
