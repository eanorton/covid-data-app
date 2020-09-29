<template>
  <v-app>
    <AppBar />

    <v-main dark>
      <DisplayContainer />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';
import DisplayContainer from './components/DisplayContainer';

export default {
  name: 'App',
  components: {
    AppBar,
    DisplayContainer,
  },
};
</script>
