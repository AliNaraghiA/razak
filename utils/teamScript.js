import gql from "graphql-tag";
const team = gql`
query team {
    teams(first: 99) {
      edges {
        node {
          title
          acfteam {
            fieldGroupName
            name
            nameEn
            title
            titleEn
            image {
              altText
              sourceUrl
            }
            instagram
            mobile
            whatsup
          }
        }
      }
    }
  }
`;
export default {
    layout: "main",
    data() {
      return {
        teams: [],
        category: 1,
      };
    },

apollo: {
    team: {
      query: team,
      // query variables
      prefetch: true,
      // fetch viewCount into variable
      result({ data }) {
        this.teams  = data.teams.edges ;  
      },
    }
    
  }
     };
