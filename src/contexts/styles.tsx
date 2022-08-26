import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../global/theme';

export function StylesProvider({ children }: PropsWithChildren<unknown>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
