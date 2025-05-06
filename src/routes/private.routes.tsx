import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackRoutes } from '@/types/@react-navigation/routes';

const Stack = createNativeStackNavigator();

export function PrivateRoutes() {
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName={StackRoutes.HomePage}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={StackRoutes.HomePage} component={() => null} />
    </Stack.Navigator>
  );
}
