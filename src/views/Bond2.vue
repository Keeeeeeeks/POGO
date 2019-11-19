<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-12 md12>
        <h4 class="display-2 font-weight-bold mb-3">
         Of the two choices, which strategy is better?
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
          <b>Small and Early</b><br><br>
          Invest $5 each year for 10 years at a 5% rate,<br> and then invest the lump sum for 10 years
        </p>
        <router-link :to="{name: 'correct_two'}">
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
          <b>Lump Sum, Late</b><br><br>
          Wait 10 years to save up $50,<br> and invest it at a 5% rate for 10 years
        </p>
        <router-link :to="{name: 'incorrect_two'}">
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
