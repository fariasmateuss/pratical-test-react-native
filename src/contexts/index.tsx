import { PropsWithChildren } from 'react';

import { Routes } from '../routes';
import { StylesProvider } from './styles';

export function AppProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <StylesProvider>
      <Routes />
      {children}
    </StylesProvider>
  );
}
