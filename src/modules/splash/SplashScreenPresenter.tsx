/* eslint-disable react-native/no-inline-styles */
import {useStyles} from '@customHooks/useStyles';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, View} from 'react-native';
import splashScreenStyles from './SplashScreenStyles';
import usePopularMoviesNavigation from '@navigation/usePopularMovieNavigation';
import AppConstants from '@constants/AppConstants';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {ActionTypes} from '@popularMoviesMiddleware/redux/ActionTypes';

const SplashScreenPresenter = () => {
  const splashStyles = useStyles(splashScreenStyles);
  const {i18n} = useTranslation();
  const introText = AppConstants().introTitle;
  const characters = introText.split('');
  const navigation = usePopularMoviesNavigation();

  const userState = useSelector((state: any) => state.LoginReducer);

  const animations = useRef(
    characters.map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    const animatedSequence = characters.map((_, index) =>
      Animated.timing(animations[index], {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
        delay: index * 100, // Stagger each character
      }),
    );

    Animated.stagger(100, animatedSequence).start(() => {
      setTimeout(() => {
        if (userState?.action === ActionTypes.ON_USER_LOGIN_SUCCESS) {
          if (userState?.onUserLoginResponse?.isUserLoggedIn) {
            navigation.replace('PopularMoviesContainer', {props: ''});
          } else {
            navigation.replace('LoginContainer');
          }
        }
      }, 1000);
      // Call a function or update state here
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      i18n?.changeLanguage('en');
    }, 3000);
  }, [i18n]);

  return (
    <View style={splashStyles.container}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {characters.map((char, index) => (
          <Animated.Text
            key={index}
            style={{
              opacity: animations[index],
              transform: [
                {
                  translateY: animations[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0], // animate upward
                  }),
                },
              ],
              fontSize: 50,
              color: '#fff',
            }}>
            {char}
          </Animated.Text>
        ))}
      </View>
    </View>
  );
};

export default SplashScreenPresenter;
