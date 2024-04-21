import gql from "graphql-tag";
/* const podcast = gql`
query podcasts {
    podcasts(first: 9999) {
      edges {
        node {
          acfpodcast {
            title
            titleen
            date
            dateen
            description
            descriptionen
            image {
              altText
              sourceUrl
            }
            imageen {
              altText
              sourceUrl
            }
            podcast {
              altText
              sourceUrl
            }
            podcasten {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
` */

const podcast = gql`
query podcasts {
    podcasts(first: 1) {
      edges {
        node {
          acfpodcast {
            title
            date
            description
            image {
              altText
              sourceUrl
            }
            podcast {
             mediaItemUrl
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
        podcast: [],

      }
    },
    apollo: {
      podcast: {
        query: podcast,
        prefetch: true,
        result({ data }) {
            this.podcast = data.podcasts.edges.map(edge => edge.node.acfpodcast);
            this.audio = data.podcasts.edges.map(edge => edge.node.acfpodcast.podcast.mediaItemUrl);

        },
        variables() {
          return {
            slug: this.$route.params.slug,
          };
        },
      },
    },
};