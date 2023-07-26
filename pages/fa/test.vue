<template>
    <div>
      <h1>pp test</h1>
      <div>
    <h1>Post Title</h1>
    <p>Post content...</p>
    <button @click="incrementViewCount">Increment View Count</button>
  </div>
  <!-- tets -->
      <h1>News</h1>
      <div v-for="post in posts.edges" :key="post.databaseId">
        <h2>{{ post.node.title }}</h2>
        <p>{{ post.node.excerpt }}</p>
        <img :src="post.node.featuredImage.node.sourceUrl" :alt="post.node.featuredImage.node.altText">
        <p>{{ post.node.date }}</p>
        <p>{{ formatDate(post.node.date) }}</p>

        <p>{{ post.node.author.node.name }}</p>
      </div>

     <div v-if='hasNextPage=true'>
    <div class="pagination">
      <button @click="previousPage" :disabled="page === 1">Previous</button>
      <span>Page {{ page }}</span>
     <button @click="nextPage" :disabled="!posts || !posts.pageInfo || !posts.pageInfo.hasNextPage">Next</button>

    </div>
      </div> 
    </div>
  </template>
  
  <script>
  import gql from 'graphql-tag'

  export default {

 data() {
    
    return {
      language: "",
      pagination: 1,
      posts: [],
    page: 1,
    pageSize: 1,
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
              where: { categoryName: "Fa,News" }
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
  </script>
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  
  .pagination button {
    margin: 0 10px;
  } 
  </style>
  