// primaryColors.js
export const primaryColors = {
    main: '#1976d2',      // Primary color for main elements like buttons, links, etc.
    light: '#63a4ff',     // Light shade for hover effects, backgrounds
    dark: '#004ba0',      // Dark shade for active states, borders
    contrastText: '#ffffff', // Text color on primary backgrounds
  };
  
  // secondaryColors.js
  export const secondaryColors = {
    main: '#9c27b0',      // Secondary color for accents, highlights
    light: '#d05ce3',     // Light shade for secondary elements
    dark: '#6a0080',      // Dark shade for secondary elements
    contrastText: '#ffffff', // Text color on secondary backgrounds
  };
  
  // errorColors.js
  export const errorColors = {
    main: '#d32f2f',      // Error color for error messages, alerts
    light: '#ff6659',     // Light shade for error highlights
    dark: '#9a0007',      // Dark shade for error messages
    contrastText: '#ffffff', // Text color on error backgrounds
  };
  
  // warningColors.js
  export const warningColors = {
    main: '#ffa000',      // Warning color for warnings, alerts
    light: '#ffd149',     // Light shade for warning highlights
    dark: '#c67100',      // Dark shade for warning elements
    contrastText: '#000000', // Text color on warning backgrounds
  };
  
  // infoColors.js
  export const infoColors = {
    main: '#0288d1',      // Info color for informational messages
    light: '#5eb8ff',     // Light shade for info highlights
    dark: '#005b9f',      // Dark shade for info elements
    contrastText: '#ffffff', // Text color on info backgrounds
  };
  
  // successColors.js
  export const successColors = {
    main: '#2e7d32',      // Success color for success messages
    light: '#60ad5e',     // Light shade for success highlights
    dark: '#005005',      // Dark shade for success elements
    contrastText: '#ffffff', // Text color on success backgrounds
  };
  
  // backgroundColors.js
  export const backgroundColors = {
    default: '#f5f5f5',   // Default background color for the application
    paper: '#ffffff',     // Background color for paper components
    appBar: '#1976d2',    // Background color for the app bar/header
    footer: '#1976d2',    // Background color for the footer
  };
  
  // textColors.js
  export const textColors = {
    primary: '#212121',   // Primary text color used for main content
    secondary: '#757575', // Secondary text color used for less important text
    disabled: '#bdbdbd',  // Disabled text color
    heading: '#1a1a1a',   // Color for headings
    link: '#1976d2', 
    linkHover: '#115293',      // Color for hyperlinks
  };
  
  // buttonColors.js
  export const buttonColors = {
    primary: {
      background: primaryColors.main,
      color: primaryColors.contrastText,
      hover: primaryColors.light,
      active: primaryColors.dark,
    },
    secondary: {
      background: secondaryColors.main,
      color: secondaryColors.contrastText,
      hover: secondaryColors.light,
      active: secondaryColors.dark,
    },
    error: {
      background: errorColors.main,
      color: errorColors.contrastText,
      hover: errorColors.light,
      active: errorColors.dark,
    },
  };
  
  // dividerColors.js
  export const dividerColors = {
    default: '#e0e0e0',   // Default divider color used for separating content
    dark: '#bdbdbd',      // Darker divider for high-contrast areas
    light: '#eeeeee',     // Lighter divider for subtle separation
  };
  
  // actionColors.js
  export const actionColors = {
    active: '#1976d2',      // Color for active icons or buttons
    hover: '#63a4ff',       // Hover color for interactive elements
    selected: '#004ba0',    // Color for selected items
    disabled: '#bdbdbd',    // Color for disabled elements
    disabledBackground: '#f5f5f5', // Background for disabled elements
  };
  
  // Combine all color exports into a single object for easy import
  const colors = {
    primaryColors,
    secondaryColors,
    errorColors,
    warningColors,
    infoColors,
    successColors,
    backgroundColors,
    textColors,
    buttonColors,
    dividerColors,
    actionColors,
  };
  
  export default colors;
  