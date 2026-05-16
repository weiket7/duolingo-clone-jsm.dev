export const fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const typeScale = {
  h1: {
    fontSize: 32,
    lineHeight: 38,
    fontFamily: fonts.bold,
  },
  h2: {
    fontSize: 24,
    lineHeight: 31,
    fontFamily: fonts.semiBold,
  },
  h3: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: fonts.semiBold,
  },
  h4: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: fonts.medium,
  },
  bodyLg: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: fonts.regular,
  },
  bodyMd: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: fonts.regular,
  },
  bodySm: {
    fontSize: 13,
    lineHeight: 21,
    fontFamily: fonts.regular,
  },
  caption: {
    fontSize: 11,
    lineHeight: 15,
    fontFamily: fonts.regular,
  },
} as const;

export type TypeScale = typeof typeScale;
