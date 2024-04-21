import gql from 'graphql-tag';
const search = gql`
query search($searchTerm: String) {
  enproducts(first: 999999999, where: { search:$searchTerm}) {
    edges {
      node {
        slug
        id
        acfproducts {
          productnames
          genericname
          dosageforms
          indications
          packaging
        }
      }
    }
  }
}`;

const allProducts = gql`
query allProducts {
enproducts(first: 999999999) {
  edges {
    node {
        
      slug
      id
      acfproducts {
        productnames
        genericname
        dosageforms
        indications
        packaging
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
      mouseDown: false,
      startX: null,
      scrollLeft: null,
      mouseDown2: false,
      startX2: null,
      scrollLeft2: null,
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  ourLetter: 'A',
  allProducts: [],
  products: [],
  searchTerm: '',
  timerId: null,
  searching: false,



    };
  },
  
  methods: {
    mousemove(e) {
      e.preventDefault();
      if (!this.mouseDown) {
        return;
      }
      const x = e.pageX - this.$refs.parent.offsetLeft;
      const scroll = x - this.startX;
      this.$refs.parent.scrollLeft = this.scrollLeft - scroll;
    },
    startDragging(e) {
      this.mouseDown = true;
      this.startX = e.pageX - this.$refs.parent.offsetLeft;
      this.scrollLeft = this.$refs.parent.scrollLeft;
    },
    stopDragging(event) {
      this.mouseDown = false;
    },
    mousemove2(e) {
      e.preventDefault();
      if (!this.mouseDown2) {
        return;
      }
      const x = e.pageX - this.$refs.parent2.offsetLeft;
      const scroll = x - this.startX2;
      this.$refs.parent2.scrollLeft = this.scrollLeft2 - scroll;
    },
    startDragging2(e) {
      this.mouseDown2 = true;
      this.startX2 = e.pageX - this.$refs.parent2.offsetLeft;
      this.scrollLeft2 = this.$refs.parent2.scrollLeft;
    },
    stopDragging2(event) {
      this.mouseDown2 = false;
    },
    async fetchAllProducts() {
  const result = await this.$apollo.query({
    query: allProducts,
  });
  this.allProducts = result.data.enproducts.edges.map(edge => edge.node);
},
 async search() {
      if  (this.searchTerm === '') {
      this.searching = false;
    } else {
      this.searching = true;
      const { data } = await this.$apollo.query({
        query: search,
        variables: {
          searchTerm: this.searchTerm
        }
      })
      this.products = data.enproducts.edges.map(edge => edge.node);

    }
  } , 
  //del


},
mounted() {
this.fetchAllProducts();
  },
computed: {
filteredProducts() {
  if (this.ourLetter) {
    return this.allProducts.filter(product =>
      product.acfproducts.productnames.toUpperCase().startsWith(this.ourLetter)
    );
  } else {
    return this.allProducts;
  }
},

},



};