import ThemeProvider from './theme.provider';
import { ProviderProps } from './types.provider';

const Providers = ({ children }: ProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
