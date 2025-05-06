import { useCallback, useMemo, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleProp,
  TextStyle,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons';

import { theme } from '@/theme';
import { styles } from './styles';

interface Props extends TextInputProps {
  label: string;
  disabled?: boolean;
  inputLength?: number;
  errorMessage?: string;
  validation?: string | boolean;
  displaySecureIndicator?: boolean;
  onChangeText: (text: string) => void;
}

export function DefaultInput({
  label,
  disabled,
  onChangeText,
  errorMessage,
  displaySecureIndicator,
  ...rest
}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibility = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  const borderStyles: StyleProp<TextStyle> = useMemo(() => {
    if (errorMessage) {
      return { borderWidth: 1, borderColor: theme.colors.error };
    }

    return { borderWidth: 1, borderColor: theme.colors.lightGray };
  }, [errorMessage]);

  const inputStyles: StyleProp<any> = useMemo(() => {
    if (displaySecureIndicator) {
      return { width: '92%' };
    }

    return { width: '100%' };
  }, [displaySecureIndicator]);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View>
        <View style={{ ...styles.content, ...borderStyles }}>
          <TextInput
            editable={disabled}
            secureTextEntry={isVisible}
            onChangeText={onChangeText}
            style={{ ...inputStyles, color: theme.colors.white }}
            placeholderTextColor={theme.colors.placeholderTextColor}
            {...rest}
          />

          {displaySecureIndicator && (
            <TouchableOpacity onPress={changeVisibility}>
              <MaterialIcon size={24} name={isVisible ? 'eye-off' : 'eye'} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
}
