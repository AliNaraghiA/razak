import gql from 'graphql-tag'
export default {

//graph-singel page
    asyncData({ app, params }) {
      const query = gql`
query GetRelatedPosts($tags: [String!]!) {
    posts(first: 4, where: {tagSlugIn: $tags}) {
      nodes {
        slug
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
      `;
  
      return app.apolloProvider.defaultClient
        .query({
          query,
          variables: {
            slug: this.post.tags.nodes.name,
          },
        })
        .then(({ data }) => {
          return {
            related: data.posts,
          };
        });
    },

  };