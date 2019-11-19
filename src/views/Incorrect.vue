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
          Incorrect
        </h1>
        <p class="subheading font-weight-regular">
          <b>Compound Interest</b> gives you more bang for your buck.<br>
          When you earn interest on savings, that interest then earns interest <br>on itself and this amount is compounded monthly.
          <br>The higher the interest, the more your money grows!
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <div class="my-2">
          <router-link :to="{name: 'question_two'}">
            <v-btn x-large color="success" dark>Next Question</v-btn>
          </router-link>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
