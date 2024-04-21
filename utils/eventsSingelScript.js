import gql from 'graphql-tag'
export default {
//SEO
  computed: {
    metaTags() {
      return [
        {
          hid: 'description',
          name: 'description',
          content: this.post.seo.metaDesc
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.post.seo.focuskw
        },
      ];
    },
  },
  head() {
    return {
      title: this.post.seo.title,
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
//graph-singel page
    asyncData({ app, params }) {
      const query = gql`
        query PostBySlug($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    title
    slug
    content
    date
    galleryevents{
      galleryevents{
        altText
        sourceUrl
      }
    }
    featuredImage{
      node{
        altText
        sourceUrl
      }
    }
    author{
      node{
        name
      }
    }
    seo{
      title
      metaDesc
      metaKeywords
      focuskw
    }
  }
}
      `;
  
      return app.apolloProvider.defaultClient
        .query({
          query,
          variables: {
            slug: params.slug,
          },
        })
        .then(({ data }) => {
          return {
            post: data.post,
          };
        });
    },

  };