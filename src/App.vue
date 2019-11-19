<template>
  <v-app id="inspire">
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
    <v-img
      :src="require('./assets/Component 2.png')"
      contain
      width="200"
      height="50"
      max-width="500"
      max-height="300"
    ></v-img>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <router-view/>
      </v-container>
    </v-content>
    <v-footer
      color="white"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({
    }),
  }
</script>

<style>
.v-app-bar {
    box-shadow: none;
}</style>
