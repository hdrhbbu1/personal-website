const colors = {
  primary: '#61DAFB',
  secondary: '#FD8FA2',
  bg: '#ffffff',
  dark_bg: '#EEE9DB',
  dark_accent: '#282C34',
  light_accent: '#A0A7AE',
  snow: '#F9FAF7',
  white: '#ffffff',
  black: '#000000',
};

const sizes = {
  mobile: '(min-width: 400px)',
  Mobile: '@media (min-width: 400px)',
  phablet: '(min-width: 550px)',
  Phablet: '@media (min-width: 550px)',
  tablet: '(min-width: 750px)',
  Tablet: '@media (min-width: 750px)',
  desktop: '(min-width: 1000px)',
  Desktop: '@media (min-width: 1000px)',
  hd: '(min-width: 1200px)',
  Hd: '@media (min-width: 1200px)',
  VHd: '@media (min-width: 1450px)',
  VVHd: '@media (min-width: 1650px)',
  largerSidebar: { min: 1100, max: 1339 },
  sidebarFixed: { min: 2000, max: Infinity },
};

export { colors, sizes };
