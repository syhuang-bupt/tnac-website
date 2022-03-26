<template>
  <div id="chartLineBox" class="chartLine"/>
</template>
<script>
export default {
  name: 'StudentAttendanceDataChart',
  props: {
    attendanceData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      myEcharts: null,
      // 指定图表的配置项和数据
      option: {
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c}天 ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        // color: ['#6be6c1'],
        series: [
            {
                type: 'pie',
                radius: '60%',
                label: {
                  normal: {
                    formatter: '{b}:{c}天'
                  }
                },
                data: this.attendanceData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
    }
  },
  watch: {
    'attendanceData': function (val) {
      console.log('数据发生了变化')
      // option是一个对象,如果没有下面这句话的话，attendanceData虽然更新了。但option没更新。
      // 当监听对象或者是数组中的某个属性值的变化，普通赋值没用就用$set,这个是vue暴露的全局钩子，专门处理这类问题而生的。
      // 在watch里面加个属性deep：true, 这样就能监听到对象里面的属性变化了
      this.$set(this.option.series[0], 'data', this.attendanceData)
      this.chartChange()
    }
  },
  mounted () {
    this.chartChange()
  },
  methods: {
    chartChange (val) {
      this.myEcharts = this.$echarts.init(document.getElementById('chartLineBox'))
      this.myEcharts.setOption(this.option, true)
    }
  }
}
</script>

<style scoped>
.chartLine {
  width: 300px;
  height: 300px;
}
</style>
