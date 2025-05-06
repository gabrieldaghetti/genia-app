import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

type Props = {
  isChecked: boolean;
  disabled?: boolean;
};

export const getStyles = ({ isChecked, disabled }: Props) =>
  StyleSheet.create({
    container: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: 23,
      height: 23,
      borderWidth: 2,
      borderRadius: 4,
      marginRight: 16,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: isChecked && !disabled ? theme.colors.primary : theme.colors.lightGray,
      backgroundColor: isChecked
        ? theme.colors.primary
        : disabled
          ? theme.colors.lightGray
          : theme.colors.white,
    },
    label: {
      color: theme.colors.white,
      fontFamily: theme.fonts.bold,
      fontSize: theme.fonts.sizes.small,
    },
  });
