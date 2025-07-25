// Define base font variants
const regularFont = {
  fontFamily: 'Poppins-Regular',
  fontWeight: '400' as const
};

const mediumFont = {
  fontFamily: 'Poppins-Medium',
  fontWeight: '500' as const
};

const lightFont = {
  fontFamily: 'Poppins-Light',
  fontWeight: '300' as const
};

const semiBoldFont = {
  fontFamily: 'Poppins-SemiBold',
  fontWeight: '600' as const
};

const boldFont = {
  fontFamily: 'Poppins-Bold',
  fontWeight: '700' as const
};

// MD3 Type Scale Configuration for Poppins
export const PaperFontConfig = {
  // Display styles
  displayLarge: {
    ...regularFont,
    fontSize: 57,
    lineHeight: 64,
    letterSpacing: -0.25
  },
  displayMedium: {
    ...regularFont,
    fontSize: 45,
    lineHeight: 52,
    letterSpacing: 0
  },
  displaySmall: {
    ...regularFont,
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: 0
  },

  // Headline styles
  headlineLarge: {
    ...regularFont,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0
  },
  headlineMedium: {
    ...regularFont,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: 0
  },
  headlineSmall: {
    ...regularFont,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0
  },

  // Title styles
  titleLarge: {
    ...regularFont,
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0
  },
  titleMedium: {
    ...mediumFont,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15
  },
  titleSmall: {
    ...mediumFont,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1
  },

  // Label styles
  labelLarge: {
    ...mediumFont,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1
  },
  labelMedium: {
    ...mediumFont,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5
  },
  labelSmall: {
    ...mediumFont,
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.5
  },

  // Body styles
  bodyLarge: {
    ...regularFont,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5
  },
  bodyMedium: {
    ...regularFont,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25
  },
  bodySmall: {
    ...regularFont,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4
  },

  // Default font
  default: {
    ...regularFont,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0
  }
};

// Export individual font variants for direct use if needed
export const FontVariants = {
  regular: regularFont,
  medium: mediumFont,
  light: lightFont,
  semiBold: semiBoldFont,
  bold: boldFont
};
