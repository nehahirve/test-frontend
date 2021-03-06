/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/cms-frontend-react",
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `arapey\:400,400i,900,400b`,
          `lexend mega\:400`,
          `lexend zetta\:400`,
        ],
        display: "swap",
      },
    },
  ],
}
