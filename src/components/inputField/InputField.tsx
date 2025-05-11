import {useStyles} from '@customHooks/useStyles';
import React from 'react';
import {InputModeOptions, KeyboardTypeOptions, TextInput} from 'react-native';
import InputFieldStyles from './InputFieldStyles';
import {useTheme} from '@customHooks/useTheme';

interface IInputFieldProps {
  placeholder: string;
  value: string;
  maxLength: number;
  keyboardType:KeyboardTypeOptions;
  inputMode:InputModeOptions;
  onChangeText: (text: string) => void;
}

const InputField = ({
  placeholder,
  value,
  maxLength,
  keyboardType,
  inputMode,
  onChangeText,
}: IInputFieldProps) => {
  const styles = useStyles(InputFieldStyles);
  const theme = useTheme();
  return (
    <TextInput
      keyboardType={keyboardType}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      inputMode={inputMode}
      style={[styles.container]}
      placeholderTextColor={theme.placeholder}
      onChangeText={onChangeText}
    />
  );
};

export default InputField;
