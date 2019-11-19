<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-12 md12>
        <h4 class="display-2 font-weight-bold mb-3">
          Which of these interest options will give you more money over time?
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
          <b>Compound Interest</b> <br> (Invest $50 a month, and each month the
          <br> interest you earn is eligible for interest)
        </p>
        <router-link :to="{name: 'correct_one'}">
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
          <b>Simple Interest</b><br>
          (Invest $50 a month, and the interest you earn
          <br> is <b>not</b> added to the sum available for interest)
        </p>
        <router-link :to="{name: 'incorrect_one'}">
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
