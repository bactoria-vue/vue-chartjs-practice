<template>
  <div>
    <div style="float: left; border: 1px solid #777777; background: #fbfbfb;">
      <div style="margin: 10px 0">Radar Chart</div>
      <div style="border-bottom: 1.5px solid #f0f1f5; width: 80%; left: 10%; position: relative; margin-bottom: 40px;"></div>
      <chart-radar-js :width="200" :height="200" :chartData="chartData" :options="options"/>
    </div>
  </div>
</template>

<script>
  import ChartRadarJs from './ChartRadarJs'

  export default {
    name: "ChartRadar",
    components: {ChartRadarJs},
    data() {
      return {
        chartData: {
          labels: ['Running', 'Swimming', 'Eating', 'Cycling', 'Wier', 'Aoot'],
          datasets: [{
            data: [62, 70, 53, 70, 92, 85],
            backgroundColor: 'rgba(233, 57, 52, 0.1)',
            borderColor: '#e93934',
            borderWidth: 1.3,

            pointRadius: 2,
            pointBackgroundColor: '#e93934',
            pointBorderWidth: 0,
            pointBorderColor: '#e93934'

          }]
        },
        options: {
          legend: {
            display: false //Hide label
          },
          tooltips: {
            enabled: false
          },
          scale: {
            angleLines: {
              display: true,
              lineWidth: 0.5,
              color: 'rgba(128, 128, 128, 0.2)'
            },
            gridLines: {
              color: 'rgba(216, 216, 216, 0.13)'
            },
            ticks: {
              min: 0,
              max: 100,
              stepSize: 25,
              display: false
            }
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false, // 선 표시 여부
                drawBorder: false
              },
              ticks: {
                display: false
              }
            }],
            yAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: false
              }
            }]
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
