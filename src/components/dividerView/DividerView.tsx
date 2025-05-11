import React from 'react';
import {View, ViewStyle} from 'react-native';
import style from './style';
import {useStyles} from '@customHooks/useStyles';

interface IDividerViewProps {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginH?: number;
  marginV?: number;
  paddingH?: number;
  height?: number;
  cStyle?: ViewStyle;
}

const DividerView = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginH,
  marginV,
  paddingH,
  height,
  cStyle,
}: IDividerViewProps) => {
  const styles = useStyles(style);
  return (
    <View
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          marginVertical: marginV,
          marginHorizontal: marginH,
          paddingHorizontal: paddingH,
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
          width: '100%',
        },
        cStyle,
      ]}>
      <View style={[styles.dividerView, {height: height}]} />
    </View>
  );
};
export default DividerView;
