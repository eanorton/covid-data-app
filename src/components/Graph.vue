<template>
  <v-container>
    {{ displayData }}
    <VueApexCharts type="line" height="350" :options="chartOptions" :series="series" :key="refreshKey" />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Graph',
  components: { VueApexCharts },
  data: () => ({
    refreshKey: false,
    dates: [20200201, 20200301, 20200401, 20200501, 20200601, 20200701, 20200801, 20200901],
    series: [{
      name: 'Cases',
      data: [],
    }],
    chartOptions: {
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: 7,
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ['2/1/2020', '3/1/2020', '4/1/2020', '5/1/2020', '6/1/2020', '7/1/2020', '8/1/2020', '9/1/2020'],
      },
      title: {
        text: 'Covid Stats',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#666'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [ '#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },
      markers: {
        size: 4,
        colors: ['#FFA41B'],
        strokeColors: '#fff',
        strokeWidth: 2,
        hover: {
          size: 7,
        }
      },
      yaxis: {
        min: 0,
        max: 8000000,
        title: {
          text: 'Cases',
        },
      }
    },
  }),
  computed: {
    ...mapGetters({
      getData: 'covid/covidData',
      getinitData: 'covid/initData',
    }),
    displayData() {
      return this.getData;
    },
    dataReady() {
      return this.getinitData.length > 0;
    },
  },
  async created() {
    await this.initData();
  },
  methods: {
    async initData() {
      await this.$store.dispatch('covid/getUSDataMultipleDates', this.dates);
      this.dataReady && (this.series[0].data = this.getinitData.map(dataObj => dataObj.positive));
      this.refreshKey = !this.refreshKey;
    },
  },
}
</script>