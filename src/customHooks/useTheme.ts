import { createContext, useContext } from 'react';
import { darkThemeColors, lightThemeColors } from '../constants/AppColors';
import { useColorScheme } from 'react-native';

export type ThemeType = typeof darkThemeColors & typeof lightThemeColors;

const DarkThemeContext = createContext<ThemeType>(darkThemeColors);
const LightThemeContext = createContext<ThemeType>(lightThemeColors)

export const useTheme = () => {
  const isDarkMode = useColorScheme() === 'light';
  const context = useContext(isDarkMode ? DarkThemeContext : LightThemeContext);

  if (context == null || context === undefined) {
    throw new Error('useTheme() must be used within a ThemeProvider');
  }

  return context;
};
