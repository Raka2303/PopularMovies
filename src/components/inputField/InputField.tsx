import {useStyles} from '@customHooks/useStyles';
import React from 'react';
import {InputModeOptions, KeyboardTypeOptions, TextInput} from 'react-native';
import InputFieldStyles from './InputFieldStyles';
import {useTheme} from '@customHooks/useTheme';
import CText from '@components/cText/CText';
import normalize from '@utils/utilities';

interface IInputFieldProps {
  placeholder: string;
  value: string;
  errorValue?:string;
  maxLength: number;
  keyboardType: KeyboardTypeOptions;
  inputMode: InputModeOptions;
  inputTextDirection: 'left' | 'center' | 'right';
  onChangeText: (text: string) => void;
}

const InputField = ({
  placeholder,
  value,
  errorValue = '',
  maxLength,
  keyboardType,
  inputMode,
  inputTextDirection,
  onChangeText,
}: IInputFieldProps) => {
  const styles = useStyles(InputFieldStyles);
  const theme = useTheme();
  return (
    <>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        textAlign={inputTextDirection}
        inputMode={inputMode}
        style={[styles.container]}
        placeholderTextColor={theme.placeholder}
        onChangeText={onChangeText}
      />
      {errorValue && <CText.ErrorText style={{paddingHorizontal:normalize(20), marginTop:normalize(10),textAlign:inputTextDirection}}>{errorValue}</CText.ErrorText>}
    </>
  );
};

export default InputField;
