import gql from 'graphql-tag'
 const galleries =gql`
 query galleries {
  galleries {
    edges {
      node {
        slug
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        acfgallery {
          entitle
          fatitle
        }
      }
    }
  }
}  `;
export default {

  data() {
    return {
        galleries:[],
    }
  },
   // Query to get  
   apollo: {
    galleries: {
      query: galleries ,
      prefetch: true,
    },
  },
    
};
