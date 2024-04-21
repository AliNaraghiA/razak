import gql from "graphql-tag";

const query = gql`
  query LatestPosts {
    newsPosts: posts(first: 4, where: {
      categoryIn: [4], 
      categoryNotIn: [3,1,5,6],
      orderby: {field: DATE, order: DESC}
    }) {
      edges {
        node {
          slug
          title
          date
        }
      }
    }

    otherPosts: posts(first: 4, where: {
      categoryIn: [6] 
      categoryNotIn: [3,1,5,4],
      orderby: {field: DATE, order: DESC}
    }) {
      edges {
        node {
          slug
          title 
          excerpt
        }
      }
    }
  }
`;

export default {
  data() {   
    return {
      index: {
        newsPosts: [],
        otherPosts: []
      }
    };
  },
  apollo: {
    index: {
      query: query,
      update: (data) => ({
        newsPosts: data.newsPosts.edges,
        otherPosts: data.otherPosts.edges
      })
    }
  },
  methods: {
    formatDate(isoDateString) {
      const date = new Date(isoDateString);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;  // Months are zero-based
      const day = date.getDate();

      return `${year}/${month}/${day}`;
    },
    truncateTitle(title, characterLimit) {
        return title.length > characterLimit ? title.slice(0, characterLimit) + '...' : title;
      },
  },
};