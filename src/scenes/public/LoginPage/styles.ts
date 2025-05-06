import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 40,
    backgroundColor: theme.colors.background,
  },
  logo: {
    marginLeft: 20,
  },
  title: {
    lineHeight: 36,
    marginBottom: 32,
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.sizes.xxlarge,
  },
  content: {
    gap: 16,
    flex: 1,
    marginTop: 72,
    width: '100%',
    paddingHorizontal: 20,
  },
});
