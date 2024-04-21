/* import gql from 'graphql-tag'

const gallery = gql`
query gallery($slug: ID!) {
  gallery(id: $slug, idType: SLUG) {
    acfgallery {
      rnddiv
      baseurl
      gallery {
        altText
        sourceUrl
      }
    }
  }
}
`

export default {
  data() {
    return {
      gallery: [],
      baseUrl: "",
      rnddiv: "",
      loading: true,
    }
  },
  computed: {
    scriptTag() {
      return `
        <div id="${this.rnddiv}">
          <script type="text/JavaScript" src="${this.baseUrl}?data[rnddiv]=${this.rnddiv}&data[responsive]=yes"></script>
        </div>
      `;
    }
  },
  apollo: {
    gallery: {
      query: gallery,
      prefetch: true,
      result({ data }) {
        this.gallery = data.gallery.acfgallery.gallery;
        this.rnddiv = data.gallery.acfgallery.rnddiv;
        this.baseUrl = data.gallery.acfgallery.baseurl;
        this.loading = false;
      },
      variables() {
        return {
          slug: this.$route.params.slug,
        };
      },
    },
  },
  watch: {
    loading(newVal) {
      if (!newVal) {
        this.loadScript();
      }
    }
  },
  methods: {
    loadScript() {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `${this.baseUrl}?data[rnddiv]=${this.rnddiv}&data[responsive]=yes`;
      document.getElementById(this.rnddiv).appendChild(script);
    }
  }
}
 */
import gql from 'graphql-tag'
const gallery = gql`
query gallery($slug: ID!) {
  gallery(id: $slug, idType: SLUG) {
    acfgallery {
      rnddiv
      baseurl
    }
  }
}
`
export default {
  data() {
    return {
      baseUrl: "",
      rnddiv: "",
      loading: true,
    }
  },
  apollo: {
    gallery: {
      query: gallery,
      prefetch: true,
      result({ data }) {
        this.rnddiv = data.gallery.acfgallery.rnddiv;
        this.baseUrl = data.gallery.acfgallery.baseurl;
        this.loading = false;
      },
      variables() {
        return {
          slug: this.$route.params.slug,
        };
      },
    },
  },
  computed: {
    scriptTag() {
      return `
        <div id="${this.rnddiv}">
          <script type="text/JavaScript" src="${this.baseUrl}?data[rnddiv]=${this.rnddiv}&data[responsive]=yes"></script>
        </div>
      `;
    }
  },
  watch: {
    loading(newVal) {
      if (!newVal) {
        this.loadScript();
      }
    }
  },
methods: {
  loadScript() {
    this.$nextTick(() => {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `${this.baseUrl}?data[rnddiv]=${this.rnddiv}&data[responsive]=yes`;
      let rnddivElement = document.getElementById(this.rnddiv);
      if (rnddivElement) {
        rnddivElement.appendChild(script);
      }
    });
  }
}

};