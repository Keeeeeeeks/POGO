<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Correct
        </h1>
        <p class="subheading font-weight-regular">
          Bond prices and interest rates have an inverse relationship.<br>
          When interest rates rise, <b>bond prices go down.</b> <br>
          When interest rates drop, <b>bond prices go up.</b>
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <div class="my-2">
          <router-link :to="{name: 'end'}">
            <v-btn x-large color="success" dark>Next Question</v-btn>
          </router-link>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
