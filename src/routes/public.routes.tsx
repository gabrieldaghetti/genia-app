import { SplashPage } from '@/scenes/public/SplashPage';
import { StackRoutes } from '@/types/@react-navigation/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from '@/scenes/public/LoginPage';

const Stack = createNativeStackNavigator();

export function PublicRoutes() {
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName={StackRoutes.SplashPage}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={StackRoutes.LoginPage} component={LoginPage} />
      <Stack.Screen name={StackRoutes.SplashPage} component={SplashPage} />
    </Stack.Navigator>
  );
}
