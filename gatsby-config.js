
module.exports = {
  siteMetadata: {
    title: 'Gatsby Material UI Website Starter',
    description: 'A website starter with Material UI for Gatsby.',
    author: `Spyros Sellas`,
    image: `src/images/gatsby-icon.png`,
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
        name: `Gatsby Material UI Website Starter`,
        short_name: `Gatsby Material Starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#2196f3`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#2196f3`,
        showSpinner: false,
      },
    },
  ],
};
