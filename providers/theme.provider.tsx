import { ThemeProvider as LibThemeProvider } from 'next-themes';
import { ProviderProps } from './types.provider';

const ThemeProvider = ({ children }: ProviderProps) => {
  return (
    <LibThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </LibThemeProvider>
  );
};

export default ThemeProvider;
