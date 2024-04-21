/* 
<input type="search" placeholder="search" v-model="searchTerm" @input="search "  /> */

  import gql from 'graphql-tag'
export default {

//graph-search page
asyncData({ app, params }) {
  const query = gql`
    query postFaSearch($searchTerm: String) {
      posts(first:4, where: {search: $searchTerm ,categoryIn: [4], categoryNotIn: [3,1,5,6]}) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `;

  return app.apolloProvider.defaultClient
    .query({
      query,
      variables: {
        searchTerm: params.searchTerm // get the searchTerm from the route params
      }
    })
    .then(({ data }) => { // use then on the query method
      return {
        searchposts: data.posts.edges,
      };
    });
},


  };