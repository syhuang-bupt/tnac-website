<template>
  <div id="chartLineBox" class="chartLine"/>
</template>
<script>
// 三种样式表，可以选择一种使用
import 'assets/css/macarons.js'
import 'assets/css/customed.js'
import 'assets/css/vintage.js'
export default {
  name: 'StudentCourseDataChart',
  props: {
    xData: {
      type: Array,
      default () {
        return []
      }
    },
    yData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    'xData': function (val) {
      this.chartChange()
    },
    'yData': function (val) {
      this.chartChange()
    }
  },
  data () {
    return {
      myEcharts: null,
      // 指定图表的配置项和数据
      option: {
        tooltip: { // 设置tip提示
            trigger: 'axis',
            formatter: function (params) {
              var relVal = params[0].name
              for (var i = 0, l = params.length; i < l; i++) {
                  relVal += '<br/>' + params[i].marker + params[i].seriesName + ' : ' + params[i].value + '%'
              }
              return relVal
}
        },
        legend: { // 设置区分（哪条线属于什么）
        },
        xAxis: { // 设置x轴
            type: 'category',
            boundaryGap: false, // 坐标轴两边不留白
            data: [],
            name: '日期', // X轴 name
            nameTextStyle: { // 坐标轴名称的文字样式
                fontSize: 16,
                padding: [0, 0, 0, 20]
            }
        },
        yAxis: {
            name: '正确率',
            nameTextStyle: {
                fontSize: 16,
                padding: [0, 0, 10, 0]
            },
            type: 'value',
            axisLabel: { formatter: '{value}%' }
        },
        series: []
      }
    }
  },
  mounted () {
    this.chartChange()
  },
  methods: {
    chartChange () {
      this.myEcharts = this.$echarts.init(document.getElementById('chartLineBox'), 'vintage')
      this.option.xAxis.data = this.xData
      for (var i = 0; i < this.yData.length; i++) {
        this.yData[i]['type'] = 'line'
      }
      this.option.series = this.yData
      // 使用刚指定的配置项和数据显示图表。
      this.myEcharts.setOption(this.option, true)
    }
  }
}
</script>

<style scoped>
.chartLine {
  width: 900px;
  height: 360px;
  padding: 0;
  margin: 0;
}
</style>
