import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './appRoutes';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
