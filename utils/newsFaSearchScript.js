/* 
<input type="search" placeholder="search" v-model="searchTerm" @input="search "  /> */

  import gql from 'graphql-tag'
export default {

//graph-search page
    asyncData({ app, params }) {
      const query = gql`
    query postFaSearch($search: String) {
    posts(where: {search: $searchTerm ,categoryIn: [4], categoryNotIn: [3,1,5,6]}) {
      edges {
        node {
          slug
          id
          title
        }
      }
    }
  }
      `;
  
      return app.apolloProvider.defaultClient
        .then(({ data }) => {
          return {
            posts: data.posts.edges,
          };
        });
    },

  };