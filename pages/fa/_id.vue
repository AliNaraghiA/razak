<template>
    <div>
      <h1>{{ post.title }}</h1>
      <div>{{ post.content }}</div>
  
      <form @submit.prevent="postComment">
        <textarea v-model="commentText" placeholder="Enter your comment"></textarea>
        <button type="submit">Submit Comment</button>
      </form>
  
      <div v-if="comments.length > 0">
        <h2>Comments</h2>
        <ul>
          <li v-for="comment in comments" :key="comment.id">
            <strong>{{ comment.author.node.name }}</strong>
            <p>{{ comment.content }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import gql from 'graphql-tag';
  
  const GET_POST_QUERY = gql`
    query GetPost($postId: ID!) {
      post(id: $postId, idType: DATABASE_ID) {
        id
        title
        content
      }
    }
  `;
  
  const GET_COMMENTS_QUERY = gql`
    query GetComments($postId: ID!) {
      post(id: $postId, idType: DATABASE_ID) {
        comments {
          nodes {
            id
            content
            author {
              node {
                name
              }
            }
          }
        }
      }
    }
  `;
  
  const CREATE_COMMENT_MUTATION = gql`
mutation CreateComment($postId: Int, $content: String!,$username:String!) {
  createComment(input: {commentOn: $postId, content: $content ,author:$username }) {
    comment {
      id
      content
      author {
        node {
          name
        }
      }
    }
  }
}
  `;
  
  export default {


    data() {
      return {
         postId:  136, // Assign the route parameter value to postId
        post: null,
        comments: [],
        commentText: '',
      };
    },
    methods: {
      async postComment() {
        const { data } = await this.$apollo.mutate({
          mutation: CREATE_COMMENT_MUTATION,
          variables: {
            postId: this.postId,
            content: this.commentText,
          },
        });
  
        // Handle the response as needed
        console.log(data.createComment.comment);
  
        // Clear the comment input
        this.commentText = '';
  
        // Refetch the comments
        this.$apollo.queries.comments.refetch();
      },
    },
    apollo: {
      post: {
        query: GET_POST_QUERY,
        variables() {
          return {
            postId: this.postId,
          };
        },
      },
      comments: {
        query: GET_COMMENTS_QUERY,
        variables() {
          return {
            postId: this.postId,
          };
        },
      },
    },

  };
  </script>
  