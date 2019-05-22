<!--https://github.com/chenxuan0000/svg-progress-bar-->

<template>
  <div>
    <div style="float: left; border: 1px solid #777777; background: #fbfbfb;">
      <div style="margin: 10px 0">Circle Progress</div>
      <div style="border-bottom: 1.5px solid #f0f1f5; width: 80%; left: 10%; position: relative; margin-bottom: 40px;"></div>
      <div class="content">
        {{gradient}}
        <svgProgressBar ref="asd" value="74.62" :options="options"/>
      </div>
    </div>
  </div>
</template>

<script>
  import svgProgressBar from 'svg-progress-bar'

  export default {
    name: "Circle",
    components: {
      svgProgressBar
    },
    data() {
      return {
        options: {},
        gradient: ''
      }
    },
    created() {
      this.options = {
        pathColors: ['#bbb', '#e93934'],

        varyStrokeArray: [7, 20],
        duration: 200,
        text: '',
        radius: 70,
        gradientColor: ['#EEE', '#F00'],
        gradientOpacity: [10, 10],
        // circleLineCap: 'round',
      }
    }
  }
</script>

<style scoped>
  .content {
    margin: 20px;
    /*    box-shadow: 0px 16px 18px -8px rgba(233, 57, 52, 0.46);*/
  }

</style>
