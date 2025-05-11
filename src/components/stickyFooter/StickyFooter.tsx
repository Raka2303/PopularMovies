import React, { ReactNode } from 'react';

import { LayoutChangeEvent, View } from 'react-native';


import style from './styles';
import { useStyles } from '@customHooks/useStyles';

interface IStickyFooterProps {
  children: ReactNode;
  onHeightChange?: (height: number) => void;
}

const StickyFooter: React.FC<IStickyFooterProps> = ({
  children,
  onHeightChange,
}) => {
  const styles = useStyles(style);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    if (onHeightChange) {
      onHeightChange(height + 20);
    }
  };
  return (
    <View style={styles.footer} onLayout={handleLayout}>
      {children}
    </View>
  );
};

export default StickyFooter;
