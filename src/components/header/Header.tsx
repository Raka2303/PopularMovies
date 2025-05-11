import React from 'react';

import {TouchableOpacity, View} from 'react-native';

import style from './style';
import {useStyles} from '@customHooks/useStyles';
import usePopularMoviesNavigation from '@navigation/usePopularMovieNavigation';
import CText from '@components/cText/CText';
import BackIcon from '../../assets/icons/arrow-left.svg';

interface HeaderProps {
  title?: string;
  onBackPress?: () => void; // Callback for the back button
  rightComponent?: React.ReactNode; // Optional right component (e.g., an icon or button)
}

const Header: React.FC<HeaderProps> = ({
  title = 'NA',
  onBackPress,
  rightComponent,
}) => {
  const styles = useStyles(style);
  const navigation = usePopularMoviesNavigation();

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => (onBackPress ? onBackPress() : navigation.goBack())}
        style={styles.backButton}>
        <BackIcon stroke="#fff"  width={24} height={24} />
      </TouchableOpacity>

      <CText.HeaderText>{title}</CText.HeaderText>

      <View style={styles.rightComponent}>{rightComponent}</View>
    </View>
  );
};

export default Header;
