import React, {FC} from 'react';

import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Header from '@components/header/Header';

import {useStyles} from '@customHooks/useStyles';
import {IBaseScreenProps} from './IBaseScreen';
import BaseScreenStyle from './BaseScreenStyle';
import {useTheme} from '@customHooks/useTheme';

const BaseScreen: FC<IBaseScreenProps> = ({
  children,
  title,
  showLoader = false,
  showHeader = true,
  isScrollEnabled = true,
  onBackPress,
}) => {
  const styles = useStyles(BaseScreenStyle);
  const theme = useTheme();
  return (
    <SafeAreaView edges={['right', 'left', 'top']} style={[styles.container]}>
      <StatusBar barStyle={'light-content'} />
      {showHeader && <Header title={title} onBackPress={onBackPress} />}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
        {showLoader ? (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size="large" color={theme.info} />
          </View>
        ) : isScrollEnabled ? (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              contentContainerStyle={{flexGrow:1}}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              {children}
            </ScrollView>
          </TouchableWithoutFeedback>
        ) : (
          <View style={{flex: 1}}>{children}</View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default BaseScreen;
