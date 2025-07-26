const Theme = {
  colors: {
    primary: '#2E2739', // Deep Plum / Charcoal Purple
    lightGray: '#F6F6FA', // Very Light Gray
    mutedLavender: '#827D88', // Desaturated Lavender
    skyBlue: '#61C3F2', // Soft Blue
    silver: '#DBDBDF', // Neutral Silver Gray
    teal: '#15D2BC', // Bright Teal
    rosePink: '#E26CA5', // Rosy Pink
    royalPurple: '#564CA3', // Deep Purple
    goldenrod: '#CD9D0F', // Golden Yellow
    white: '#FFFFFF', // Pure White
    black: '#000000', // Pure Black
    error: '#FF3B30', // Red for errors
    success: '#4CD964', // Green for success
    warning: '#FF9500', // Orange for warnings
    info: '#5AC8FA', // Light Blue for informational messages
    transparent: 'rgba(0, 0, 0, 0)', // Transparent
    transparentBlack: 'rgba(0, 0, 0, 0.5)', // Semi-transparent Black
    transparentWhite: 'rgba(255, 255, 255, 0.5)', // Semi-transparent White
    darkBlueGray: '#202C43' // Dark Blue Gray
  },
  spacing: {
    xxxs: 4,
    xxs: 8,
    xs: 12,
    s: 16,
    m: 24,
    l: 32,
    xl: 40,
    xxl: 48,
    xxxl: 64
  }
};

/**
 * This hook returns a theme object which contains all the theme variables
 */
export const useTheme = () => {
  return Theme;
};
