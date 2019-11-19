<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/Component 1.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Learn About Investing For Free
        </h1>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <div class="my-2">
          <router-link :to="{name: 'time'}">
            <v-btn x-large color="success" dark>Start here</v-btn>
          </router-link>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
