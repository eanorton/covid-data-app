<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template #activator="{ on, attrs }">
        <v-text-field
          solo
          :value="computedDateFormattedDatefns"
          label="US Data By Date"
          append-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        />
      </template>
      <v-date-picker
        v-model="date"
        @input="searchDate"
      />
    </v-menu>
  </div>
</template>

<script>
import { format, parseISO } from 'date-fns';

export default {
  name: 'DatePicker',
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
  }),
  computed: {
    computedDateFormattedDatefns () {
      return format(parseISO(this.date), 'MMMM do yyyy');
    },
  },
  methods: {
    searchDate(date) {
      const formattedDate = date.replace(/-/g, '');
      this.$emit('date', formattedDate);
      this.menu = false;
    }
  },
}
</script>