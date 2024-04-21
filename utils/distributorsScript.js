import gql from 'graphql-tag'
const distributions =  gql`
query distributions {
  distributions (first:99999){
    edges {
      node {
        acfdistribution {
          repeater {
            title
            titleen
            city
            cityen
            adress
            adressen
            phone
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
      distributions: [],
      dis: [],
      filteredDis: [],

    };
  }, 
  apollo: {
    distributions: {
      query: distributions,
      prefetch: true,
       result({ data }) {
        this.dis = data.distributions.edges.map(edge => edge.node.acfdistribution.repeater).flat();
      }, 
    }, 
  },
  methods: {
    showModal(city) {
      this.myModal = true;
      this.filteredDis = this.dis.filter(item => item.city.includes(city));
    },
    showModalen(cityen) {
      this.myModal = true;
      this.filteredDis = this.dis.filter(item => item.cityen.includes(cityen));
    },
  }, 
};
