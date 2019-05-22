<template>
  <div>
    <div style="float: left; border: 1px solid #777777; background: #fbfbfb;">
      <div style="margin: 10px 0">Bar Chart</div>
      <div style="border-bottom: 1.5px solid #f0f1f5; width: 80%; left: 10%; position: relative; margin-bottom: 40px;"></div>
      <chart-bar-js :width="500" :height="200" :chartData="chartData" :options="options"/>
    </div>
  </div>
</template>

<script>
  import ChartBarJs from "./ChartBarJs";

  export default {
    name: "ChartBar",
    components: {ChartBarJs},
    data() {
      return {
        chartData: {
          labels: ['January', 'February', 'M', 'A', "May"],
          datasets: [
            {
              label: '',

              backgroundColor: '#e93934',
              data: [40, -40, -42, 36, 66]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false //Hide label
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false // 선 표시 여부
              },
              barPercentage: 0.25
            }],
            yAxes: [{
              gridLines: {
                display: true
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
