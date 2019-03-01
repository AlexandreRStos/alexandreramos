module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Alexandre Ramos | Desenvolvedor Web Freelance | Blog', // Navigation and Site Title
  siteTitleAlt: "AR's Blog", // Alternative Site title for SEO
  siteUrl: 'https://blog-alexandreramos.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'pt-BR', // Language Tag on <html> element
  siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Aqui escrevo sobre coisas que gosto e outras coisas que aprendi', // Your site descriptio
  author: 'Alexandre Ramos', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@alexandrer_stos', // Twitter Username - Optional
  ogSiteName: 'alexandreramos.frontend', // Facebook Site Name - Optional
  ogLanguage: 'pt_BR', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#7159C1',
  backgroundColor: '#eee',

  // Settings for typography.js
  headerFontFamily: 'Jura',
  bodyFontFamily: 'Mplus 1p',
  baseFontSize: '18px',
};
