/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, memo, useMemo } from 'react';
import { Text, StyleProp, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { theme } from '@/theme';
import { styles } from './styles';
import DotLoadingIndicator from '../DotLoadingIndicator';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  textStyles?: StyleProp<any>;
}

function DefaulButton({
  title,
  style,
  disabled,
  textStyles,
  loading = false,
  ...rest
}: IButtonProps) {
  const { backgroundColor, textColor } = useMemo(() => {
    if (disabled) {
      return {
        textColor: theme.colors.lightGray,
        backgroundColor: theme.colors.smokeWhite,
      };
    }

    return {
      textColor: theme.colors.white,
      backgroundColor: theme.colors.primary,
    };
  }, [disabled]);

  return (
    <TouchableOpacity
      disabled={loading || disabled}
      style={[styles.button, { backgroundColor }, style]}
      {...rest}>
      {loading ? (
        <DotLoadingIndicator />
      ) : (
        <Fragment>
          <Text style={{ ...styles?.text, color: textColor, ...textStyles }}>{title}</Text>
        </Fragment>
      )}
    </TouchableOpacity>
  );
}

export default memo(DefaulButton);
