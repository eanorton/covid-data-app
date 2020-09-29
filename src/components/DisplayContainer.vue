<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <SearchControls />
        <Graph />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Graph from './Graph';
import SearchControls from './SearchControls';

export default {
  name: 'DisplayContainer',
  components: { Graph, SearchControls },
};
</script>
