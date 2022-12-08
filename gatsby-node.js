exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query IndexQuery {
      allContentfulAsset {
        nodes {
          id
        }
      }
    }
  `);
  data.allContentfulAsset?.nodes.forEach((node) => {
    const id = node.id;
    actions.createPage({
      path: `portfolio/${id}`,
      component: require.resolve(`./src/templates/Image.js`),
      context: { id: id },
    });
  });
};
