module.exports = {
  siteMetadata: {
    title: 'COVID',
    description: 'COVID',
    author: `Quintessential SFT`,
    image: `src/images/COVID-cover-image.png`,
    siteUrl: 'https://covid.quintessential.gr/',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: './src/redux/store',
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
        // [optional] - if true will clean up after itself on the client, default:
        cleanupOnClient: true,
        // [optional] - name of key on `window` where serialized state will be stored, default:
        windowKey: '__PRELOADED_STATE__',
      },
    },
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: `UA-160715173-1`,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'covid',
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        lang: '*',
        schemas: {
          news: require('./src/schemas/news'),
          government: require('./src/schemas/government'),
          mythbusters: require('./src/schemas/mythbusters'),
        }
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
