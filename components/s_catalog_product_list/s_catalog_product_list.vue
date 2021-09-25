<template>
  <div class="catalog-product-list">
    <div class="catalog-product-list__wrapper" v-if="productList">
      <slot />
      <h3 v-if="!productList.length">К сожалению, ничего нет</h3>
      <m-card
        class="catalog-product-list__item"
        v-for="product in productList"
        :key="product.id"
        type="program"
        :description="product.included.levels[0].name"
        :title="product.name"
        :verticalImgSrc="`${baseURL}/${product.preview_image}`"
        :bottomText="product.included.organization.abbreviation_name"
        :iconSrc="`${baseURL}${product.included.organization.logo}`"
      />
    </div>
    <m-pagination
      v-if="productList"
      :currentPage="pageInx"
      @change-current-page="changeCurrentPage"
      @next="nextPage"
      @prev="prevPage"
      :totalItems="Number(totalProducts)"
      :perPage="productsPerPage"
      :prevText="prevText"
      :nextText="nextText"
    />
  </div>
</template>

<script>
import { MCard, MPagination } from '@cwespb/synergyui';
import './s_catalog_product_list.scss';

export default {
  name: 'SCatalogProductList',

  props: ['productList', 'totalProducts', 'page', 'productsPerPage', 'windowWidth', 'selectedFilters'],

  components: {
    MCard,
    MPagination,
  },

  data() {
    return {
      baseURL: process.env.NUXT_ENV_S3BACKET,
    };
  },

  computed: {
    prevText() {
      return this.windowWidth > 600 ? 'Предыдущая' : '<';
    },

    nextText() {
      return this.windowWidth > 600 ? 'Следующая' : '>';
    },

    pageInx: {
      get() {
        return this.page;
      },

      set(page) {
        this.$emit('page', page);
      },
    },
  },

  methods: {
    changeCurrentPage(page) {
      this.pageInx = page;
    },

    nextPage(nextPage) {
      this.pageInx = nextPage;
    },

    prevPage(prevPage) {
      this.pageInx = prevPage;
    },
  },
};
</script>