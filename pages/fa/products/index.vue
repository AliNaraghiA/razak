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
          <img src="/icons/graySearch.svg" alt="Search" />
          <input type="search" placeholder="search" />
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



};
</script>

<style>
</style>
<!-- <template>
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
          <img src="/icons/graySearch.svg" alt="Search" />
          <input type="search" placeholder="search" />
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
        <div
          class="product d-flex"
          v-for="product in products"
          :key="product.name"
        >
          <div class="d-flex justify-content-center align-items-center name">
            {{ product.name }}
          </div>
          <div class="d-flex justify-content-center align-items-center generic">
            {{ product.generic }}
          </div>
          <div class="d-flex justify-content-center align-items-center forms">
            {{ product.forms }}
          </div>
          <div
            class="d-flex justify-content-center align-items-center indications"
          >
            {{ product.indications }}
          </div>
          <div
            class="d-flex justify-content-center align-items-center packinging"
          >
            {{ product.packaging }}
          </div>
          <router-link
            to="/products/1"
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
</template>

<script>
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
      ourLetter: "A",
      letters: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      products: [
        {
          name: "Cystine B6 Zinc Razak®",
          generic: "L-Cystine Arginine Zinc Vitamin B6",
          forms: "F.C Tablet",
          indications: "Helps to growth and maintain healthy hair and nails",
          packaging: "30 & 60 Tablets",
        },
        {
          name: "Hematinic",
          generic:
            "Ferrous fumarate 350mg Vit.B12 15mcg Vitamin C 150mg Folic Acid 1mg",
          forms: "Capsule",
          indications: "Iron deficiency, Anti Anemic",
          packaging: "60 & 100 Capsules",
        },
        {
          name: "Foliron",
          generic:
            "Dried Ferrous sulphate 185 mg (Equivalent to 60mg Fe2+) Folic Acid 460mcg",
          forms: "Capsule",
          indications: "Iron deficiency, Anti Anemic",
          packaging: "30 Capsules",
        },
        {
          name: "Hematinic",
          generic:
            "Ferrous fumarate 350mg Vit.B12 15mcg Vitamin C 150mg Folic Acid 1mg",
          forms: "Capsule",
          indications: "Iron deficiency, Anti Anemic",
          packaging: "60 & 100 Capsules",
        },
        {
          name: "Foliron",
          generic:
            "Dried Ferrous sulphate 185 mg (Equivalent to 60mg Fe2+) Folic Acid 460mcg",
          forms: "Capsule",
          indications: "Iron deficiency, Anti Anemic",
          packaging: "30 Capsules",
        },
        {
          name: "Hematinic",
          generic:
            "Ferrous fumarate 350mg Vit.B12 15mcg Vitamin C 150mg Folic Acid 1mg",
          forms: "Capsule",
          indications: "Iron deficiency, Anti Anemic",
          packaging: "60 & 100 Capsules",
        },
        {
          name: "Foliron",
          generic:
            "Dried Ferrous sulphate 185 mg (Equivalent to 60mg Fe2+) Folic Acid 460mcg",
          forms: "Capsule",
          indications: "Iron deficiency, Anti Anemic",
          packaging: "30 Capsules",
        },
        {
          name: "Hematinic",
          generic:
            "Ferrous fumarate 350mg Vit.B12 15mcg Vitamin C 150mg Folic Acid 1mg",
          forms: "Capsule",
          indications: "Iron deficiency, Anti Anemic",
          packaging: "60 & 100 Capsules",
        },
        {
          name: "Foliron",
          generic:
            "Dried Ferrous sulphate 185 mg (Equivalent to 60mg Fe2+) Folic Acid 460mcg",
          forms: "Capsule",
          indications: "Iron deficiency, Anti Anemic",
          packaging: "30 Capsules",
        },
      ],
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
  },
};
</script>

<style>
</style> -->