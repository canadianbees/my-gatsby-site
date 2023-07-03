exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        fallback: {
          crypto: require.resolve('crypto-browserify'),
          path: require.resolve("path-browserify"),
          os: require.resolve("os-browserify"),
          stream: require.resolve("stream-browserify"),
        },
      },
      
    })
  }