import {
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
  useFonts,
} from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Routes } from '../routes';
import { StylesProvider } from './styles';

export function AppProvider({ children }: PropsWithChildren<unknown>) {
  const queryClient = new QueryClient();

  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <StylesProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
        {children}
      </QueryClientProvider>
    </StylesProvider>
  );
}
