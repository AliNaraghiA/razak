import gql from "graphql-tag";
export default{
asyncData({ app }) {
    const query = gql`
      query postFaSelect {
        posts(first:4 where: { categoryIn: [7], categoryNotIn: [3, 1, 5, 6] }) {
          edges {
            node {
              slug
              id
              title
              excerpt
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `;
  
    return app.apolloProvider.defaultClient
      .query({
        query,
      })
      .then(({ data }) => {
        const posts = data.posts.edges.map((edge) => edge.node);
        return {
          selected: posts,
        };
      });
  },
};