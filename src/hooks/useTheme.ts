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
    goldenrod: '#CD9D0F' // Golden Yellow
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
