import CText from '@components/cText/CText';
import {useStyles} from '@customHooks/useStyles';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import ButtonViewStyles from './ButtonViewStyles';
import {useTheme} from '@customHooks/useTheme';

interface IButtonViewProps {
  isDisabled: boolean;
  caption: string;
  onPress: () => void;
}

const ButtonView = ({isDisabled, caption, onPress}: IButtonViewProps) => {
  const buttonViewStyles = useStyles(ButtonViewStyles);
  const theme = useTheme();
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={[
        buttonViewStyles.container,
        {
          backgroundColor: isDisabled
            ? theme.onSecondary
            : theme.primaryVariant,
        },
      ]}>
      <CText.HeaderText
        style={{color: isDisabled ? theme.error : theme.text}}>
        {caption}
      </CText.HeaderText>
    </TouchableOpacity>
  );
};

export default ButtonView;
