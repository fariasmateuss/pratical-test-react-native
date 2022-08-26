import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../screens/Main';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="Bookshelf">
      <Screen
        name="Bookshelf"
        component={Main}
        options={{ headerShown: false}}
      />
    </Navigator>
  );
}
