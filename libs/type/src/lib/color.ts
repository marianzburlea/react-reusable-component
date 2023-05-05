export const colorMap = {
  // Base colors
  primary: { h: 210, s: 100, l: 50 }, // Primary brand color, used for main buttons, links, and accents
  secondary: { h: 60, s: 100, l: 50 }, // Secondary brand color, used for secondary buttons, links, and accents

  // Neutral colors
  background: { h: 0, s: 0, l: 98 }, // Background color for the website
  text: { h: 0, s: 0, l: 12 }, // Main text color
  mutedText: { h: 0, s: 0, l: 40 }, // Muted text color for less important text elements

  // Danger, warning, success, and informational colors
  danger: { h: 0, s: 75, l: 45 }, // Danger color, used for buttons and links suggesting a destructive action
  warning: { h: 45, s: 100, l: 50 }, // Warning color, used for alerts and cautionary messages
  success: { h: 120, s: 50, l: 50 }, // Success color, used for positive actions and success messages
  info: { h: 210, s: 90, l: 50 }, // Information color, used for informational messages and links

  // Interactive states
  hover: { h: 225, s: 70, l: 60 }, // Hover color for buttons and links
  active: { h: 210, s: 70, l: 40 }, // Active color for buttons and links when pressed
  disabled: { h: 0, s: 0, l: 75 }, // Disabled color for buttons and links

  // Additional colors
  lightBorder: { h: 0, s: 0, l: 85 }, // Light border color for separating UI elements
  darkBorder: { h: 0, s: 0, l: 60 }, // Dark border color for separating UI elements in dark mode or on dark backgrounds

  // Descriptive accent colors
  lavender: { h: 270, s: 60, l: 60 }, // Lavender color for decorative elements and highlights
  sunburst: { h: 45, s: 100, l: 60 }, // Sunburst color for attention-grabbing elements
  rose: { h: 300, s: 40, l: 70 }, // Rose color for subtle highlights and backgrounds

  // Grayscale colors
  darkGray: { h: 0, s: 0, l: 20 }, // Dark gray color for text and UI elements
  mediumGray: { h: 0, s: 0, l: 40 }, // Medium gray color for text and UI elements
  lightGray: { h: 0, s: 0, l: 60 }, // Light gray color for backgrounds and UI elements
  veryLightGray: { h: 0, s: 0, l: 80 }, // Very light gray color for backgrounds and UI elements

  // Additional theme colors
  positive: { h: 135, s: 40, l: 60 }, // Positive color for encouraging actions
  negative: { h: 345, s: 80, l: 50 }, // Negative color for discouraging actions
  neutral: { h: 195, s: 30, l: 50 }, // Neutral color for regular actions
} as const

export type TColorType = keyof typeof colorMap
