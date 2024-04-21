import gql from 'graphql-tag'

   // Define query 
   const GET_POST_BY_SLUG = gql`
   query PostBySlug($slug: ID!) {
     post(id: $slug, idType: SLUG) {
       slug  
       id
       title
       content 
       viewCount
     }
   }
 `
 const UPDATE_POST_VIEWS =gql`
     mutation UpdatePostViews($input: UpdatePostViewInput!) {
       updatePostView(input: $input) {
         clientMutationId
         views
       }
     }
 
   `
 
 
 const GET_POST_AND_RELATED = gql`
  query PostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          viewCount
          id
          title
          slug
          content
          date
          featuredImage {
            node {
              altText
              sourceUrl 
            }
          }
          author {
            node {
              name
            }
          }
          seo {
            title
            metaDesc
            metaKeywords
            focuskw  
          }
          tags {
        nodes {
          name
          posts(first: 10) {
            nodes {
              excerpt
              id 
              title
              slug
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
        }
      }

`
 
export default {

  data() {
    return {
      post: [],
      relatedPosts: [],
      viewCount1: 0, 
    }
  },

   // Query to get post by slug
   apollo: {
    post: {
      query: GET_POST_AND_RELATED,
      // fetch viewCount into variable
      result({ data }) {
        this.viewCount1 = data.post.viewCount + 1;
        // mutation to update views
        const { slug } = this.$route.params;
        const clientMutationId = "test";
        const views = this.viewCount1; // use the updated value here
  
        const mutation = UPDATE_POST_VIEWS;
        const variables = {
          input: {
            clientMutationId,
            slug,
            views,
          },
        };
  
        this.$apollo.mutate({
          mutation,
          variables,
        })
          .then(({ data }) => {
            // handle success
            console.log(data);
          })
          .catch((error) => {
            // handle error
            console.error(error);
          });
      },
      variables() {
        return {
          slug: this.$route.params.slug,
        };
      },
    },
  },
   
   
  computed: {
    metaTags() {
      return [
        {
          hid: 'description',
          name: 'description',
          content: this.post.seo?.metaDesc
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.post.seo?.focuskw
        },
      ];
    },
  },
  head() {
    return {
      title: this.post.seo?.title,
      meta: this.metaTags,
    };
  },


  methods: {
    // data
    formatDate(isoDateString) {
     const date = new Date(isoDateString);
     const year = date.getFullYear();
     const month = date.getMonth() + 1;  // Months are zero-based
     const day = date.getDate();

     return `${year}/${month}/${day}`;
   },
  },



/*   apollo: {
    post: {
      query: GET_POST_AND_RELATED,
      prefetch: true,
      variables() {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
    */
  watch: {
    async post() {
      if (!this.post) return

      const tags = this.post.tags.nodes

      let relatedPosts = []
      
      for (const tag of tags) {
        relatedPosts.push(...tag.posts.nodes)
      }
      
      relatedPosts = [...new Set(relatedPosts)]

const filteredRelatedPosts = relatedPosts.filter(post => post.slug !== this.post.slug)
this.relatedPosts = filteredRelatedPosts.slice(0,4)
    }
  }

};
