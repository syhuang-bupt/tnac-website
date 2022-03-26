// -----VB里程碑渲染图表------
<template>
  <div class="main-content2">
    <div class="table-content">
      <div style="width:300px">
        <a-table
          :columns="columns0"
          :data-source="formNameBirth"
          :bordered="true"
          :pagination="false"/>
      </div>
      <div style="width:450px">
        <a-table
          :columns="columns"
          :data-source="formRecord"
          :bordered="true"
          :pagination="false"/>
      </div>
    </div>
    <a-divider/>
    <div class="chart-content">
      <h4>Level 3</h4>
      <div id="chartLineBox" style="width: 100%;height: 360px"></div>
      <h4>Level 2</h4>
      <div id="chartLineBox1" style="width: 100%;height: 360px"></div>
      <h4>Level 1</h4>
      <div id="chartLineBox2" style="width: 100%;height: 360px"></div>
    </div>
  </div>
</template>

<script>
// 左表的表头
const columns0 = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '出生日期',
    dataIndex: 'birth',
    key: 'birth'
  }
]
// 右表的表头
const columns = [
  {
    title: '项目',
    dataIndex: 'program',
    key: 'program'
  },
  {
    title: '得分',
    dataIndex: 'score',
    key: 'score'
  },
  {
    title: '日期',
    dataIndex: 'day',
    key: 'day'
  },
  {
    title: '评估人',
    dataIndex: 'evalor',
    key: 'evalor'
  }
]

export default {
  props: {
    // level1坐标数据
    le1Data: {
      type: Array,
      default () {
        return []
      }
    },
    // level2坐标数据
    le2Data: {
      type: Array,
      default () {
        return []
      }
    },
    // level3坐标数据
    le3Data: {
      type: Array,
      default () {
        return []
      }
    },
    // 右侧评估记录表内数据
    formRecord: {
      type: Array,
      default () {
          return []
      }
    },
    // 左侧人名和生日表内数据
    formNameBirth: {
      type: Array,
      default () {
          return []
      }
    }
  },
  watch: {
    'le1Data': function (val) {
      console.log('数据发生了变化')
      // option是一个对象,如果没有下面这句话的话，attendanceData虽然更新了。但option没更新。
      // 当监听对象或者是数组中的某个属性值的变化，普通赋值没用就用$set,这个是vue暴露的全局钩子，专门处理这类问题而生的。
      // 在watch里面加个属性deep：true, 这样就能监听到对象里面的属性变化了
      this.$set(this.option2.series[0], 'data', this.le1Data)
      this.chartChange()
    },
    'le2Data': function (val) {
      console.log('数据发生了变化')
      // option是一个对象,如果没有下面这句话的话，attendanceData虽然更新了。但option没更新。
      // 当监听对象或者是数组中的某个属性值的变化，普通赋值没用就用$set,这个是vue暴露的全局钩子，专门处理这类问题而生的。
      // 在watch里面加个属性deep：true, 这样就能监听到对象里面的属性变化了
      this.$set(this.option1.series[0], 'data', this.le2Data)
      this.chartChange()
    },
    'le3Data': function (val) {
      console.log('数据发生了变化')
      // option是一个对象,如果没有下面这句话的话，attendanceData虽然更新了。但option没更新。
      // 当监听对象或者是数组中的某个属性值的变化，普通赋值没用就用$set,这个是vue暴露的全局钩子，专门处理这类问题而生的。
      // 在watch里面加个属性deep：true, 这样就能监听到对象里面的属性变化了
      this.$set(this.option.series[0], 'data', this.le3Data)
      this.chartChange()
    }
  },
  data () {
    return {
    myEcharts: null,
    myEcharts1: null,
    myEcharts2: null,
    inforData: this.formRecord,
    inforData0: this.formNameBirth,
    columns,
    columns0,
    // --------------------------level3----------------------
    option: {
      color: ['#eaea07'],
        // tooltip: {
        //   position: 'top'
        // },
        grid: {
          height: '80%',
          top: '3%'
        },
        xAxis: {
          type: 'category',
          data: ['要求', '命名', '听反', '视配', '游戏', '社交', '阅读', '书写', '复指', '互语', '团体', '语构', '数学'],
          splitArea: {
              show: true
          }
        },
        yAxis: {
          type: 'category',
          data: ['', '11', '', '12', '', '13', '', '14', '', '15'],
          splitArea: {
              show: true
          }
        },
        // visualMap: {
        //   min: 0,
        //   max: 4,
        //   calculable: true,
        //   orient: 'vertical',
        //   right: '1%',
        //   top: 'center'
        // },
        series: [{
          name: '',
          type: 'heatmap',
          data: this.le3Data,
          // label: {
          //   show: false
          // },
          emphasis: {
            itemStyle: {
              shadowBlur: 100,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
      }]
    },

    // --------------------------level2---------------------------
    option1: {
      color: ['#eaea07', '#000000'],
        // tooltip: {
        //     position: 'top'
        // },
        grid: {
            height: '80%',
            top: '3%'
        },
        xAxis: {
            type: 'category',
            data: ['要求', '命名', '听反', '视配', '游戏', '社交', '动作', '仿说', '复指', '互语', '团体', '语构'],
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            data: ['', '6', '', '7', '', '8', '', '9', '', '10'],
            splitArea: {
                show: true
            }
        },
        // visualMap: {
        //   min: 0,
        //   max: 2,
        //   calculable: true,
        //   orient: 'vertical',
        //   right: '1%',
        // top: 'center'
        // },
        series: [{
            name: '',
            type: 'heatmap',
            data: this.le2Data,
            // label: {
            //     show: true
            // },
            emphasis: {
                itemStyle: {
                    shadowBlur: 100,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    },
    // -----------------------------level1------------------------------
    option2: {
      color: ['#eaea07'],
        // tooltip: {
        //     position: 'top'
        // },
        grid: {
            height: '80%',
            top: '3%'
        },
        xAxis: {
            type: 'category',
            data: ['要求', '命名', '听反', '视配', '游戏', '社交', '动作', '仿说', '自发语言'],
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            data: ['', '1', '', '2', '', '3', '', '4', '', '5'],
            splitArea: {
                show: true
            }
        },
        // visualMap: {
        //   min: 0,
        //   max: 4,
        //   calculable: true,
        //   orient: 'vertical',
        //   right: '1%',
        //   top: 'center'
        // },
        series: [{
            name: '',
            type: 'heatmap',
            data: this.le1Data,
            // label: {
            //     show: true
            // },
            emphasis: {
                itemStyle: {
                    shadowBlur: 100,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
      }
    }
  },
  mounted () {
    this.chartChange()
  },
  methods: {
    chartChange () {
      // level3 图表。
      this.myEcharts = this.$echarts.init(document.getElementById('chartLineBox'))
      // this.option.series.data = this.le3Data
      this.myEcharts.setOption(this.option, true)
      // level2 图表。
      this.myEcharts1 = this.$echarts.init(document.getElementById('chartLineBox1'))
      // this.option1.series.data = this.le2Data
      this.myEcharts1.setOption(this.option1, true)
      // level1 图表。
      this.myEcharts2 = this.$echarts.init(document.getElementById('chartLineBox2'))
      // this.option2.series.data = this.le1Data
      this.myEcharts2.setOption(this.option2, true)
    }
  }
}
</script>

<style scoped>
.main-content2 {
  margin-top: 25px;
}
.table-content {
  display: flex;
  justify-content: space-around;
}
.chart-content {
  text-align: center;
}
</style>
