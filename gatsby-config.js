module.exports = {
  siteMetadata: {
    title: 'Caerurfa Pugs: North Yorkshire Pug Breeders',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-2075901-4',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Caerurfa Pugs',
        short_name: 'Caerurfa Pugs',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icons: [
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
}
