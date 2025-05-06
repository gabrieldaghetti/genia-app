import React, { useMemo } from 'react';
import { theme } from '@/theme';
import { Feather } from '@expo/vector-icons';
import { getStyles } from '@/components/Checkbox/styles';
import { StyleProp, Text, TextStyle, TouchableOpacity, View } from 'react-native';

interface ICheckBox {
  isChecked: boolean;
  disabled?: boolean;
  description: string;
  onChange: () => void;
  textStyle?: StyleProp<TextStyle>;
}

export function CheckBox({
  textStyle,
  onChange,
  isChecked,
  description,
  disabled = false,
}: ICheckBox) {
  const styles = getStyles({ isChecked, disabled });

  const labelStyle = useMemo(() => {
    if (textStyle) {
      return { ...styles.label, ...(textStyle as object) };
    }

    return styles.label;
  }, [styles.label, textStyle]);

  return (
    <TouchableOpacity onPress={onChange} disabled={disabled} style={styles.container}>
      <View style={styles.checkbox}>
        <Feather name={'check'} size={15} color={theme.colors.white} />
      </View>
      <Text style={labelStyle}>{description}</Text>
    </TouchableOpacity>
  );
}
