import Typography from 'typography';

const config = require('../../config');

const typography = new Typography({
  title: 'Minimal',
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.66,
  scaleRatio: 3.157,
  headerFontFamily: [config.headerFontFamily, 'Roboto', 'sans-serif'],
  bodyFontFamily: [config.bodyFontFamily, 'sans-serif'],
  headerWeight: 700,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['700', '500'],
    },
    {
      name: config.bodyFontFamily,
      styles: ['400', '500'],
    },
    {
      name: 'Roboto',
      styles: ['700'],
    },
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
