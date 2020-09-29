<template>
  <v-container>
    <v-row>
      <v-col>
        <SearchControls />
        <v-card>
          <Graph />
        </v-card>
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
