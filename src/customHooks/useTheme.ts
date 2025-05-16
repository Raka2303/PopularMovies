// Import React functions for context creation and consumption
import { createContext, useContext } from 'react';

// Import your theme color objects
import { darkThemeColors, lightThemeColors } from '../constants/AppColors';

// Hook to detect the device's current color scheme (light or dark)
import { useColorScheme } from 'react-native';

// Define a type that includes properties from both light and dark theme colors
export type ThemeType = typeof darkThemeColors;

// Create context for dark theme with darkThemeColors as default value
const DarkThemeContext = createContext<ThemeType>(darkThemeColors);

// Create context for light theme with lightThemeColors as default value
const LightThemeContext = createContext<ThemeType>(lightThemeColors);

// Custom hook to access the current theme based on system color scheme
export const useTheme = (): ThemeType => {
  // Determine if system is in dark mode
  const isDarkMode = useColorScheme() === 'dark';
  // alert(isDarkMode);

  // Select the appropriate theme context based on system mode
  const context = useContext(isDarkMode ? DarkThemeContext : LightThemeContext);

  // Throw an error if context is unavailable, i.e., not wrapped in a ThemeProvider
  if (!context) {
    throw new Error('useTheme() must be used within a ThemeProvider');
  }

  // Return the selected theme colors
  return context;
};
