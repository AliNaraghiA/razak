import gql from 'graphql-tag'
export default {
 data() {
    
    return {
      language: "",
      pagination: 1,
      posts: [],
    page: 1,
    pageSize: 4,
    cursors: [], // Add a new array to store cursors for each page
    hasNextPage:"",
    };
  },
    //main

      apollo: {
    posts: {
        query: gql`
          query newsFa($first: Int!, $after: String) {
            posts(
              first: $first
              after: $after
              where: {categoryIn: [4], categoryNotIn: [2,1,5,6]}
            ) {
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
              edges {
                cursor
                node {
                  author {
                    node {
                      name
                    }
                  }
                  databaseId
                  title
                  slug
                  date
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
          }
        ` ,
      variables() {
        return {
          first: this.pageSize,
          after: '',
        };
      },
    },
  },  
 
//2

  methods: {
     // data
    formatDate(isoDateString) {
      const date = new Date(isoDateString);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;  // Months are zero-based
      const day = date.getDate();

      return `${year}/${month}/${day}`;
    },
    //dynamic
    nextPage() {
  if (this.posts.pageInfo.hasNextPage) {
    this.page++;
    this.fetchPosts(this.page);
  }
},
previousPage() {
  if (this.page > 1) {
    this.page--;
    this.fetchPosts(this.page);
  }
},
fetchPosts(page) {
  const cursor = this.cursors[page - 2];  // Get the cursor for the page
  this.$apollo.queries.posts.fetchMore({
    variables: {
      first: this.pageSize,
      after: cursor,
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      this.posts = fetchMoreResult.posts;  // Replace the current posts with the new posts
      if (page > this.cursors.length) {
        this.cursors.push(fetchMoreResult.posts.pageInfo.endCursor);  // Store the endCursor of the new page
      }
    },
  });
},

  },
  created() {
  this.fetchPosts(this.page);
},
  };