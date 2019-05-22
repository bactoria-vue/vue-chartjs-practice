import Chart from 'chart.js'
import {Bar} from 'vue-chartjs'

Chart.controllers.bar = Chart.controllers.bar.extend({
  /* custom magic here */})

export default {
  extends: Bar,
  props: ['chartData', 'options'],
  data() {
    return {}
  },
  mounted() {
    this.setBackgroundColor()
    this.renderChart(this.chartData, this.options)
  },
  methods: {
    setBackgroundColor() {
      this.chartData.datasets[0].backgroundColor = this.chartData.datasets[0].data.map(x => x > 0 ? '#e93934' : '#ff9a9c');
    }
  }
}
