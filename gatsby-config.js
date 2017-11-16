module.exports = {
  siteMetadata: {
    title: 'Michael T. Reilly',
    description: 'Web Developer / User Interface Design',
  },
  plugins: [
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'mtreilly.me',
        short_name: 'MTR',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'src', path: `${__dirname}/src` },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: { pathToConfigModule: 'src/utils/typography.js' },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
  ],
};
