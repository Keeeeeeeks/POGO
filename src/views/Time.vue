<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-12 md12>
        <h4 class="display-2 font-weight-bold mb-3">
          I want spend...
        </h4>
      </v-flex>

      <v-flex md2>
      </v-flex>
      <v-flex md4>
        <v-card>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="50"
        ></v-img>
        <p class="subheading font-weight-regular">
          5 Minutes A Day
        </p>
        <router-link :to="{name: 'about'}">
        <v-btn
          text
          color="success"
        >
          Learn
        </v-btn>
        </router-link>
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-card>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="50"
        ></v-img>
        <p class="subheading font-weight-regular">
          10 Minutes A Day
        </p>
        <router-link :to="{name: 'about'}">
        <v-btn
          text
          color="success"
        >
          Learn
        </v-btn>
        </router-link>
        </v-card>
      </v-flex>
      <v-flex md2>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'home',
}
</script>
