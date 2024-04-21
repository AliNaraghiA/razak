import gql from 'graphql-tag'

const gallery = gql`
query gallery($slug: ID!) {
  gallery(id: $slug, idType: SLUG) {
    acfgallery {
      gallery {
        altText
        sourceUrl
      }
    }
  }
}
`


export default {
  data() {
    return {
      gallery: [],
    }
  },

  apollo: {
    gallery: {
      query: gallery,
      prefetch: true,
      result({ data }) {
        this.gallery = data.gallery.acfgallery.gallery;
      },
      variables() {
        return {
          slug: this.$route.params.slug,
        };
      },
    },
  },
}

