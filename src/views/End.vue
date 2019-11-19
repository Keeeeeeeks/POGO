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
          You completed your first challenge! <br>Please create an account to keep going.
        </h1>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <div class="my-2">
          <v-btn x-large color="success" dark>Signup</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
