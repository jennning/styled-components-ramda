const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        theme: path.resolve(__dirname, 'src/theme/'),
        components: path.resolve(__dirname, 'src/components/')
      }
    }
  });
};
