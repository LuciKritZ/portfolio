import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ProviderProps) => (
  <NextThemesProvider attribute='class' defaultTheme='dark' enableSystem>
    {children}
  </NextThemesProvider>
);

export default ThemeProvider;
