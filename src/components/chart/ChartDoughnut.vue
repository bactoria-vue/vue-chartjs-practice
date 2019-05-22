<template>
  <div>
    <div style="float: left; border: 1px solid #777777; background: #fbfbfb;">
      <div style="margin: 10px 0">Doughnut Chart</div>
      <div style="border-bottom: 1.5px solid #f0f1f5; width: 80%; left: 10%; position: relative; margin-bottom: 30px;"></div>
      <chart-doughtnut-js :width="200" :height="200" :chartData="chartData" :options="options"/>

    </div>
  </div>
</template>

<script>
  import ChartDoughtnutJs from "./ChartDoughtnutJs";

  export default {
    name: "ChartDoughnut",
    components: {ChartDoughtnutJs},
    data() {
      return {
        chartData: {
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: ['Red', 'Yellow'],
          datasets: [{
            data: [10, 20],
            // borderColor: "white",
            // borderWidth: 5,
            backgroundColor: ['#e93934', '#ff9a9c'],
//            hoverBackgroundColor: ["#49A9EA", "#B370CF"],
          }],
        },
        options: { layout:
            {
              padding: 20,
            },
          legend: {
            display: false //Hide label
          },
          tooltips: {
            enabled: false
          },
          cutoutPercentage: 50,
          //circumference: 5, //원의 몇%
          animation: {
            animateRotate: false, // 차트 만들어질때 빙~돌아서 만들어지는 효과 끄기 (default)
            animateScale: false,// 차트 만들어질때 쭈욱~ 커지는 효과
          }

        }
      }
    }
  }
</script>

<style scoped>

</style>
