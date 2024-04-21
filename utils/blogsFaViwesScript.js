import gql from 'graphql-tag';
  //use viwepost fo loop
  // Define query
  const ALL_POSTS = gql`
    query AllPosts {
      posts(first:99999,where: {categoryIn: [6], categoryNotIn: [3,1,5,4]}) {
        nodes {
          viewCount
          title
          slug
          excerpt  
        }
      }
    }
  `;
    
     // Define query
    const search = gql`
    query search($searchTerm: String) {
      posts(where: { search:$searchTerm,categoryIn: [6], categoryNotIn: [3,1,5,4]}) {
        edges {
          node {
            slug
            id
            title
          }
        }
      }
    }`;
    
  export default {
    data() {
      return {
        viwepost: null,
        loading: false,
        error: null,
        searchtop: [],
        searchTerm: '',
        searching: false,

      };
    },
  
    methods: {

      async search() {
           if  (this.searchTerm === '') {
           this.searching = false;
         } else {
           this.searching = true;
           const { data } = await this.$apollo.query({
             query: search,
             variables: {
               searchTerm: this.searchTerm
             }
           })
           this.searchtop = data.posts.edges.map(edge => edge.node);
         }
       } , 
     },
    mounted() {
      // Fetch data
      this.$apollo
        .query({
          query: ALL_POSTS,
        })
        .then(({ data }) => {
          // Sort and filter posts by view count
          const viwepost = data.posts.nodes;
          viwepost.sort((a, b) => b.viewCount - a.viewCount);
          this.viwepost = viwepost.slice(0, 4);
        })
        .catch((error) => {
          this.error = error;
        })
        .finally(() => {
          this.loading = false;
        });
    },

 
  


  };
  
