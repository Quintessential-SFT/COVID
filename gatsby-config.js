module.exports = {
  siteMetadata: {
    title: 'COVID',
    description: 'COVID',
    author: `Quintessential SFT`,
    image: `src/images/COVID-cover-image.png`,
    siteUrl: 'https://covid.quintessential.gr/',
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
    // {
    //   resolve: 'gatsby-source-prismic',
    //   options: {
    //     repositoryName: 'covid',
    //     accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    //     lang: '*',
    //     schemas: {
    //       // home_page: require('./src/schemas/homePage'),
    //       // our_clients_page: require('./src/schemas/ourClientsPage'),
    //       // our_partners_page: require('./src/schemas/ourPartnersPage'),
    //       // the_process_page: require('./src/schemas/theProcessPage'),
    //       // faq_page: require('./src/schemas/faqPage'),
    //       // footer: require('./src/schemas/footer'),
    //     }
    //   },
    // },
    `gatsby-plugin-netlify`,
  ],
};
