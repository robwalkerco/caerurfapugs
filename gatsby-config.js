module.exports = {
  siteMetadata: {
    title: `Caerurfa Pugs: North Yorkshire Pug Breeders`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-2075901-4',
      },
    },
  ],
}
