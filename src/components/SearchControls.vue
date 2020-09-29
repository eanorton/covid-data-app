<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
       <DatePicker @date="getUSDataByDate" />
      </v-col>
      <v-col cols="auto">
        <v-select
          :items="states"
          label="Data by State"
          solo
          @input="getStateData"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DatePicker from './DatePicker';

export default {
  name: 'SearchControls',
  components: { DatePicker },
  data: () => ({
    states: [
      'AK',
      'AL',
      'AR',
      'AZ',
      'CA',
      'CO',
      'CT',
      'DE',
      'FL',
      'GA',
      'HI',
      'IA',
      'ID',
      'IL',
      'IN',
      'KS',
      'KY',
      'LA',
      'MA',
      'MD',
      'ME',
      'MI',
      'MN',
      'MO',
      'MS',
      'MT',
      'NC',
      'ND',
      'NE',
      'NH',
      'NJ',
      'NM',
      'NV',
      'NY',
      'OH',
      'OK',
      'OR',
      'PA',
      'RI',
      'SC',
      'SD',
      'TN',
      'TX',
      'UT',
      'VA',
      'VT',
      'WA',
      'WI',
      'WV',
      'WY',
    ],
  }),
  methods: {
    getUSData() {
      this.$store.dispatch('covid/getUSData');
    },
    getUSDataByDate(date) {
      this.$store.dispatch('covid/getUSDataByDate', date);
    },
    getStateData(state) {
      this.$store.dispatch('covid/getStateData', state);
    },
  },
}
</script>