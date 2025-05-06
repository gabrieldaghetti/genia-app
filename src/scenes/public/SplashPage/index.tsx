import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { theme } from '@/theme';
// import Logo from '@/assets/images/logo_genia.svg';
import { StackRoutes } from '@/types/@react-navigation/routes';

export const SplashPage = () => {
  const { reset } = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      reset({ routes: [{ name: StackRoutes.LoginPage }] });
    }, 1400);
  });

  return <View style={styles.container}>{/*<Logo width={150} height={150} />*/}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
});
