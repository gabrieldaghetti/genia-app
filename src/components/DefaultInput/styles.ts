import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 6,
    fontWeight: 800,
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
  },
  content: {
    height: 56,
    borderRadius: 8,
    fontWeight: 800,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 19,
    justifyContent: 'space-between',
    fontFamily: theme.fonts.medium,
  },
  input: {
    fontWeight: 700,
    fontFamily: theme.fonts.medium,
  },
  errorMessage: {
    fontSize: 12,
    marginTop: 4,
    lineHeight: 20,
    fontWeight: 700,
    color: theme.colors.error,
    fontFamily: theme.fonts.medium,
  },
});
