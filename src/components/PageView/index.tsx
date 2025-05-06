import { StatusBar, StatusBarProps } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@/theme';

type Props = StatusBarProps & {
  children: React.ReactNode;
};

export function PageView({ children, ...rest }: Props) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <StatusBar {...rest} style="light" />

        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
