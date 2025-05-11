import {useStyles} from '@customHooks/useStyles';
import React, {FC} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import CTextStyles from './CTextStyles';

interface ICtext extends TextProps {
  children: string;
  style?: TextStyle | TextStyle[];
}

const HeaderText: FC<ICtext> = ({children, style, ...rest}) => {
  const styles = useStyles(CTextStyles);
  return (
    <Text style={[styles.headerText,style]} {...rest}>
      {children}
    </Text>
  );
};

const SubHeaderText: FC<ICtext> = ({children, style, ...rest}) => {
  const styles = useStyles(CTextStyles);
  return (
    <Text style={[styles.subHeaderText,style]} {...rest}>
      {children}
    </Text>
  );
};

const ParaText: FC<ICtext> = ({children, style, ...rest}) => {
  const styles = useStyles(CTextStyles);
  return (
    <Text style={[styles.paraText,style]} {...rest}>
      {children}
    </Text>
  );
};

const SmallText: FC<ICtext> = ({children, style, ...rest}) => {
  const styles = useStyles(CTextStyles);
  return (
    <Text style={[styles.smallText,style]} {...rest}>
      {children}
    </Text>
  );
};

export default {
  HeaderText,
  SubHeaderText,
  ParaText,
  SmallText,
};
