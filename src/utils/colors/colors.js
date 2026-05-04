// Color palette for accent/highlight purposes
export const colors = [
  "#FF6B6B", // Red-ish
  "#4ECDC4", // Turquoise
  "#556270", // Dark Blue-Grey
  "#C7F464", // Lime Green
  "#FF6F91", // Pink
  "#845EC2", // Purple
  "#FFC75F", // Yellow
  "#008F7A", // Teal
  "#D65DB1", // Magenta
  "#FF9671", // Coral
];

// Semantic color tokens for theming
export const themeTokens = {
  light: {
    // Background colors
    "bg-primary": "#ffffff",
    "bg-secondary": "#f5f5f5",
    
    // Text colors
    "text-primary": "#222222",      // Main heading & body text
    "text-secondary": "#555555",    // Form labels & secondary text
    "text-tertiary": "#888888",     // Disabled & footer text
    
    // Interactive colors
    "interactive-primary": "#0987f2", // Buttons, links, hover states
    "border": "#bbbbbb",
    
    // Component specific
    "button-bg": "#0987f2",
    "button-text": "#ffffff",
    "card-bg": "#ffffff00",
  },
  
  dark: {
    // Background colors
    "bg-primary": "#222222",
    "bg-secondary": "#333333",
    
    // Text colors
    "text-primary": "#ffffff",      // Main heading & body text
    "text-secondary": "#cccccc",    // Form labels & secondary text
    "text-tertiary": "#bbbbbb",     // Disabled & footer text
    
    // Interactive colors
    "interactive-primary": "#0987f2", // Consistent across themes
    "border": "#555555",
    
    // Component specific
    "button-bg": "#ffffff",
    "button-text": "#222222",
    "card-bg": "#ffffff",
  },
};
