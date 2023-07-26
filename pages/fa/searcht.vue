<template>
    <div>
      <div class="searchDiv">
        <img src="/icons/graySearch.svg" alt="Search" />
        <input type="search" placeholder="search" v-model="searchTerm" @input="search" />
      </div>
      <!-- Main form with all products -->
      <div
        class="product d-flex"
        v-for="product in filteredProducts"
        :key="product.id"
        v-if="!searching"
      >
        <!-- Your existing content here -->
      </div>
      <!-- Search results form -->
      <div
        class="product d-flex"
        v-for="product in products"
        :key="product.id"
      >
      <!--  v-else -->
        <!-- Your existing content here -->
      </div>
    </div>
  </template>
  
<script>
import gql from 'graphql-tag';

const search = gql`
  query search($searchTerm: String) {
    products(where: { search: $searchTerm },first:2) {
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
const allProducts = gql`
query allProducts {
products {
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
  data() {
      return {
        searchTerm: '',
      products: [],
      }
    },
    methods: {
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
        this.products = data.products.edges.map(edge => edge.node);
      }
    } ,

    async fetchAllProducts() {
  const result = await this.$apollo.query({
    query: allProducts,
  });
  this.allProducts = result.data.products.edges.map(edge => edge.node);
},
    //2
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

async search() {
  const { data } = await this.$apollo.query({
    query: search,
    variables: {
      searchTerm: this.searchTerm,
    },
    fetchPolicy: 'network-only',
  });
  this.products = data.products.edges.map(edge => edge.node);
}
    },
};

</script>
<template>
  <div>
    <div v-if="!searching">
      <div class="title d-flex">
        <!-- Your title code here -->
      </div>
      <div class="product d-flex" v-for="product in filteredProducts" :key="product.id">
        <!-- Your product display code here -->
      </div>
    </div>
    <div v-else>
      <ul>
        <li v-for="product in searchResults" :key="product.id">
          <router-link :to="`/products/${product.slug}`">{{ product.acfproducts.productnames }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
