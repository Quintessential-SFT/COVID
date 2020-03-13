
module.exports = {
  siteMetadata: {
    title: 'COVID',
    description: 'COVID',
    author: `Quintessential SFT`,
    image: `src/images/COVID-icon.svg`,
    // siteUrl: 'https://www.example.com',
  },
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `COVID`,
        short_name: `COVID`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#FFC600`,
        display: `standalone`,
        icon: `src/images/COVID-icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#FFC600`,
        showSpinner: false,
      },
    },
  ],
};
