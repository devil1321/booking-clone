module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-fontawesome-css`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-react-redux`,
            options: {
                // [required] - path to your createStore module
                pathToCreateStoreModule: './src/APIController/store.js',
                // [optional] - options passed to `serialize-javascript`
                // info: https://github.com/yahoo/serialize-javascript#options
                // will be merged with these defaults:
                serialize: {
                    space: 0,
                    // if `isJSON` is set to `false`, `eval` is used to deserialize redux state,
                    // otherwise `JSON.parse` is used
                    isJSON: true,
                    unsafe: false,
                    ignoreFunction: true,
                },
                // [optional] - if true will clean up after itself on the client, default:
                cleanupOnClient: true,
                // [optional] - name of key on `window` where serialized state will be stored, default:
                windowKey: '__PRELOADED_STATE__',
            },
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
