import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Bookshelf } from '../screens/Bookshelf';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="Bookshelf">
      <Screen
        name="Bookshelf"
        component={Bookshelf}
        options={{ headerShown: false}}
      />
    </Navigator>
  );
}
