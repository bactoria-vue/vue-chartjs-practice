<template>
  <div>
    <sub-title :sub-title="subTitle"/>
    <chart-line/>
    <chart-bar/>
    <chart-bar2/>
    <chart-radar/>
    <chart-doughnut/>
    <router-view/>
  </div>
</template>

<script>
  import ChartLine from "../components/chart/ChartLine.vue"
  import ChartBar from "../components/chart/ChartBar.vue";
  import ChartBar2 from "../components/chart/ChartBar2.vue";
  import ChartRadar from "../components/chart/ChartRadar.vue";
  import ChartDoughnut from "../components/chart/ChartDoughnut";
  import SubTitle from "../components/SubTitle";

  export default {
    name: "Chart",
    data() {
      return {
        subTitle: "차트"
      }
    },
    components: {SubTitle, ChartDoughnut, ChartRadar, ChartBar2, ChartBar, ChartLine}
  }
</script>

<style scoped>

</style>
