import {Line, mixins} from 'vue-chartjs'

const {reactiveProp} = mixins


export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  data() {
    return {
      gradient: null,
    }
  },
  mounted() {
    this.addGradient();
    this.addYAxes();

    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  },
  methods: {
    addGradient() {
      this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 330)
      this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.4)') //제일 위
      this.gradient.addColorStop(0.2, 'rgba(255, 0, 0, 0.2)')
      this.gradient.addColorStop(0.3, 'rgba(255, 0, 0, 0.1)')
      this.gradient.addColorStop(0.4, 'rgba(255, 0, 0, 0)')
//      this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)') // 제일 아래
      this.chartData.datasets[0].backgroundColor = this.gradient
    },
    addYAxes() {
      const max = Math.max.apply(null, this.chartData.datasets[0].data)
      const min = Math.min.apply(null, this.chartData.datasets[0].data)
      this.options.scales.yAxes[0].ticks.min = Math.max(min - (max * 0.2), 0);
      this.options.scales.yAxes[0].ticks.max = max * 1.2;
    }
  }
}
