require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = 'https://covid.quintessential.gr/';

module.exports = {
  siteMetadata: {
    title: 'Ενημέρωση για τον COVID-19',
    description: 'Live Data, ενημέρωση, πρόληψη, αλήθειες και μύθοι για τον ιο & εργαλεία για απομακρυσμένη εργασία',
    author: `Quintessential SFT`,
    image: `${siteUrl}img/COVID-cover-image.png`,
    siteUrl: siteUrl,
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
        name: `Ενημέρωση για τον COVID-19`,
        short_name: `COVID-19`,
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
        // Setting this parameter is also optional
        respectDNT: true,
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
          work_from_home: require('./src/schemas/work-from-home'),
          scientific: require('./src/schemas/scientific'),
        }
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        mergeSecurityHeaders: false,
        headers: {
          "/*": [
            "X-Frame-Options: sameorigin",
          ],
          "/live-data/": [
            "X-Frame-Options: allowall",
          ],
        },
      },
    },
  ],
};
