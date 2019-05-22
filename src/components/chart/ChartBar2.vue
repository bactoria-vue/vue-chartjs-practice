<template>
  <div>
    <div style="float: left; border: 1px solid #777777; background: #fbfbfb;">
      <div style="margin: 10px 0">Bar Chart2</div>
      <div
        style="border-bottom: 1.5px solid #f0f1f5; width: 80%; left: 10%; position: relative; margin-bottom: 40px;"></div>
      <chart-bar-js :width="200" :height="300" :chartData="chartData" :options="options"/>
    </div>
  </div>
</template>

<script>
  import ChartBarJs from "./ChartBarJs";

  export default {
    name: "ChartBar2",
    components: {ChartBarJs},
    data() {
      return {
        chartData: {
          labels: ['b', 'a'],
          datasets: [
            {
              label: '',
              backgroundColor: '#e93934',
              data: [86, 76]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false //Hide label
          },
          tooltips: {
            enabled: false
          },
          hover: {
            animationDuration: 0,
            onHover() {

            }
          },
          animation: {
            duration: 1,
            onComplete() {
              const chartInstance = this.chart
              const ctx = chartInstance.ctx

              ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';

              this.data.datasets.forEach(function (dataset, i) {
                const meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                  const data = dataset.data[index];
                  ctx.fillText(data, bar._model.x, bar._model.y - 5);
                });
              });
            }
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false, // 선 표시 여부
              },
              barPercentage: 0.6
            }],
            yAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                min: 0,
                max: 100,
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
