<template>
    <div class="faPage faProducts">
      <div class="topDiv">
        <div class="enLogo">
          <img src="/images/enLogo.svg" alt="enLogo" />
        </div>
        <div class="title">لیست محصولات</div>
      </div>
      <div class="route">
        <router-link to="/fa/"> صفحه اصلی . </router-link>
        رویداد ها
      </div>
      <div class="table">
        <div
          class="lettersSort d-flex"
          :class="{ activeDrag: mouseDown == true }"
          @mousemove="mousemove"
          @mousedown="startDragging"
          @mouseup="stopDragging"
          @mouseleave="stopDragging"
          ref="parent"
        >
          <div
            v-for="letter in letters"
            :key="letter"
            @click="ourLetter = letter"
            :class="{ active: ourLetter == letter }"
          >
            {{ letter }}
          </div>
        </div>
        <div class="filters d-flex">
          <div class="searchDiv">
            <img src="/icons/graySearch.svg" alt="Search"  />
            <input type="search" placeholder="search" v-model="searchTerm" @input="search "  />
          </div>
          <div class="categoryDiv">
            <img src="/icons/grayCategory.svg" alt="Category" />
            <select name="category">
              <option value="" hidden selected>category</option>
            </select>
          </div>
          <div class="sortDiv">
            <img src="/icons/grayFrame.svg" alt="Frame" />
            <select name="sort">
              <option value="" hidden selected>sort</option>
            </select>
          </div>
        </div>
        <div
          class="productTable"
          :class="{ activeDrag: mouseDown2 == true }"
          @mousemove="mousemove2"
          @mousedown="startDragging2"
          @mouseup="stopDragging2"
          @mouseleave="stopDragging2"
          ref="parent2"
        >
          <div class="title d-flex">
            <div class="d-flex justify-content-center align-items-center name">
              Product Names
            </div>
            <div class="d-flex justify-content-center align-items-center generic">
              Generic Name & Strength
            </div>
            <div class="d-flex justify-content-center align-items-center forms">
              Dosage Forms
            </div>
            <div
              class="d-flex justify-content-center align-items-center indications"
            >
              Indications
            </div>
            <div
              class="d-flex justify-content-center align-items-center packinging"
            >
              Packaging
            </div>
            <div class="d-flex justify-content-center align-items-center detail">
              Detail
            </div>
          </div>
          <div v-if='!searchTerm'>
          <div
            class="product d-flex"
            v-for="product in filteredProducts" :key="product.id"
          >
            <div class="d-flex justify-content-center align-items-center name">
              {{ product.acfproducts.productnames }}
            </div>
            <div class="d-flex justify-content-center align-items-center generic">
              {{ product.acfproducts.genericname }}
            </div>
            <div class="d-flex justify-content-center align-items-center forms">
              {{ product.acfproducts.dosageforms }}
            </div>
            <div
              class="d-flex justify-content-center align-items-center indications"
            >
            {{ product.acfproducts.indications}}
            </div>
            <div
              class="d-flex justify-content-center align-items-center packinging"
            >
            {{ product.acfproducts.packaging }}
            </div>
            <router-link
            :to="'/fa/products/' + product.slug"
              class="d-flex blueCircleLink justify-content-center align-items-center detail"
            >
              More
              <div class="imgDiv">
                <img src="/icons/blueAngleArrow.svg" alt="CircleArrow" />
              </div>
            </router-link>
            
          </div>
        </div>
        <div v-else>
            <div
            class="product d-flex"
            v-for="product in products" :key="product.id"
          >
            <div class="d-flex justify-content-center align-items-center name">
              {{ product.acfproducts.productnames }}
            </div>
            <div class="d-flex justify-content-center align-items-center generic">
              {{ product.acfproducts.genericname }}
            </div>
            <div class="d-flex justify-content-center align-items-center forms">
              {{ product.acfproducts.dosageforms }}
            </div>
            <div
              class="d-flex justify-content-center align-items-center indications"
            >
            {{ product.acfproducts.indications}}
            </div>
            <div
              class="d-flex justify-content-center align-items-center packinging"
            >
            {{ product.acfproducts.packaging }}
            </div>
            <router-link
            :to="'/fa/products/' + product.slug"
              class="d-flex blueCircleLink justify-content-center align-items-center detail"
            >
              More
              <div class="imgDiv">
                <img src="/icons/blueAngleArrow.svg" alt="CircleArrow" />
              </div>
            </router-link>
            
          </div>
</div>
        </div>
      </div>
  
      
    <div  >
      <ul>
        <li v-for="product in products" :key="product.id">
          <router-link :to="`/products/${product.slug}`">{{ product.acfproducts.productnames }}</router-link>
        </li>
      </ul>
    </div>
  
    </div>
  </template>
  
  <script>
  import gql from 'graphql-tag';
  const search = gql`
  query search($searchTerm: String) {
    products(where: { search:$searchTerm}) {
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
    this.allProducts = result.data.products.edges.map(edge => edge.node);
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
        this.products = data.products.edges.map(edge => edge.node);

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
  </script>
  
  <style>
  </style>