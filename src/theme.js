const colors = {
  primary: '#EF476F',
  secondary: '#F1FAEE',
  bg: '#F9FAF7',
  logo: '#9733EE',
  nav: "#EF476F",
  snow: '#FDFFFC',
  lightsnow: '#F9FAF7',
  white: '#ffffff',
  black: '#000000',
  orange: '#FE8C01',
}

const SIZES = {
  xsmall: {min: 0, max: 599},
  small: {min: 600, max: 779},
  medium: {min: 780, max: 979},
  large: {min: 980, max: 1279},
  xlarge: {min: 1280, max: 1339},
  xxlarge: {min: 1340, max: Infinity},

  largerSidebar: {min: 1100, max: 1339},
  sidebarFixed: {min: 2000, max: Infinity},
};

export default {colors, SIZES}