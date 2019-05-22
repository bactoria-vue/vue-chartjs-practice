<template>
  <div>
    <div style="float: left; border: 1px solid #777777; background: #fbfbfb;">

      <div style="margin: 10px 0">Line Chart</div>
      <div style="border-bottom: 1.5px solid #f0f1f5; width: 80%; left: 10%; position: relative; margin-bottom: 40px;"></div>
      <chart-line-js :width="500" :height="200" :chartData="chartData" :options="options"/>
    </div>
  </div>
</template>

<script>
  import ChartLineJs from "./ChartLineJs"

  export default {
    name: "ChartLine",
    components: {ChartLineJs},
    data() {
      return {
        gradient: '',
        chartData: {},
        options: {}
      }
    },
    beforeMount() {
      this.chartData = {
        labels: ['월', '화', '수', 'a', 'b', '1-1'],
        datasets: [
          {
            backgroundColor: '#e93934',
            borderColor: '#e93934',
            borderWidth: 1.5,
//            lineTension: 0, // 곡선 기울기

            pointRadius: 0,
//          pointBorderColor: '#fff',
//          pointBackgroundColor: '#fff',

//            pointHitRadius: 50, // point의 50 부근까지 갖다대도 뜸.

            pointHoverRadius: 4, //hover 시에 point 부여
            pointHoverBackgroundColor: '#e93934',


            data: [200, 600, 400, 200, 380, 440, 340]
          }
        ]
      }

      this.options = {
        responsive: true, // 인라인 스타일로 적용되는 스타일 객체를 외부 div에 전달. 외부 컨테이너와 높이를 동적으로 변경 가능. 부모의 높이와 너비를 가져와 캔버스에 적용
                    maintainAspectRatio: false, // 부모와 관계없이 종횡비 (너비 / 높이)를 유지??
        legend: {
          display: false //Hide label
        },
        tooltips: {
          //enabled: false, // tooltips 사용X

          backgroundColor: 'white',
          yAlign: 'bottom',
          xAlign: 'left',
          yPadding: 10,
          xPadding: 0,
          bodyAlign: 'center',
          displayColors: false,
          caretSize: 0,
          bodyFontSize: 3,
          bodyFontColor: '#e93934',

          custom(tooltip) {
            if (!tooltip) return;
            // disable displaying the color box;

            //           tooltip.y = 0
            tooltip.width = 0
            tooltip.height = 0

            console.log(this)
            console.log(tooltip.body[0].lines[0]);
            console.log(tooltip)
          },

          mode: 'nearest',
          intersect: false, // false:: 마우스 대충 갖다대도 뜸.
          bodyFontSize: 15,
          callbacks: {
            title: function (tooltipItem, data) {
              return //data.labels[tooltipItem[0].index];
            },
            label: function (tooltipItem, data) {
              return tooltipItem.yLabel;
            },
            footer: function (tooltipItem, data) {
              return;
            }
          }
        },
        hover: {
          mode: 'nearest',
          intersect: false,
          onHover(event, activeElements) {
            console.log(event)
            console.log(activeElements)
          }
        },
       layout:
          {
            padding: 20,
          }
        ,
        scales: {
          xAxes: [{
            gridLines: {
              display: false, // 선 표시 여부
//              borderDash: [8, 4], // 점선 표시
//              color: "#348632" // 선 색상
            }
          }],
          yAxes:
            [{
              gridLines: {
                display: true
              },
              ticks: {
//                beginAtZero:true
              }
            }]
        }
      }
    }
  }
</script>

<style scoped>

</style>
