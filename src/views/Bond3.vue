<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-12 md12>
        <h4 class="display-2 font-weight-bold mb-3">
          If interest rates rise, what happens to the price of your bond?
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
          <b>It Goes Down</b>
        </p>
        <router-link :to="{name: 'correct_three'}">
        <v-btn
          text
          color="success"
        >
          Select
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
          <b>No Effect</b>
        </p>
        <router-link :to="{name: 'incorrect_three'}">
        <v-btn
          text
          color="success"
        >
          Select
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
