// -----VB里程碑障碍评估计分表------
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
      <div id="chartLineBox4" style="width: 100%;height: 360px"></div>
      <div id="chartLineBox5" style="width: 100%;height: 360px"></div>
      <div id="chartLineBox6" style="width: 100%;height: 360px"></div>
      <div id="chartLineBox7" style="width: 100%;height: 360px"></div>
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
      key: 'evalor,'
  }
]

export default {
  props: {
    // 第一行数据：问题行为、指令控制、有缺陷的提要求
    //            有缺陷的命名、有缺陷的模仿、有缺陷的仿说
    rol1: {
      type: Array,
      default () {
        return []
      }
      },
    // 第二行数据：有缺陷的视觉感知配对、有缺陷的听者反应、有缺陷的互动语言
    //            有缺陷的社交技能、依赖辅助、猜想式反应
     rol2: {
      type: Array,
      default () {
        return []
      }
      },
    // 第三行数据：有缺陷的扫视、有缺陷的条件性辨别、不能泛化
    //            薄弱的动机、行为稍难就降低动机、依赖强化物
      rol3: {
      type: Array,
      default () {
        return []
      }
      },
    // 第四行数据：自我刺激、有缺陷的表达、强迫性行为
    //            多动性行为、没有目光接触、感觉性防御
       rol4: {
      type: Array,
      default () {
        return []
      }
      },
      // 右侧评估记录表内内容
      formRecord: {
        type: Array,
        default () {
            return []
        }
        },
      // 左侧人名生日表内内容
      formNameBirth: {
        type: Array,
        default () {
            return []
        }
        }
    },
  data () {
    return {
      myEcharts4: null,
      myEcharts5: null,
      myEcharts6: null,
      myEcharts7: null,
      inforData: this.formRecord,
      columns,
      inforData0: this.formNameBirth,
      columns0,
      option4: {
          legend: {},
          tooltip: {},
          dataset: {
              source: this.rol1
          },
          xAxis: {
          type: 'category'
          // splitLine: {
          //   show: false
          // }
          },
          yAxis: {
            type: 'value',
            data: ['1', '2', '3', '4']
            // splitLine: {
            //   show: false
            // }
          },

          series: [
            { type: 'bar', showBackground: true },
            { type: 'bar', showBackground: true },
            { type: 'bar', showBackground: true },
            { type: 'bar', showBackground: true }
          ]
      },
      option5: {
        legend: {},
        tooltip: {},
        dataset: {
            source: this.rol2
        },
        xAxis: { type: 'category' },
        yAxis: { type: 'value',
                  data: ['1', '2', '3', '4']
        },

        series: [
          { type: 'bar', showBackground: true },
          { type: 'bar', showBackground: true },
          { type: 'bar', showBackground: true },
          { type: 'bar', showBackground: true }
        ]
      },
      option6: {
      legend: {},
      tooltip: {},
      dataset: {
          source: this.rol3
      },
      xAxis: { type: 'category' },
      yAxis: { type: 'value',
              data: ['1', '2', '3', '4']
      },

      series: [
        { type: 'bar', showBackground: true },
        { type: 'bar', showBackground: true },
        { type: 'bar', showBackground: true },
        { type: 'bar', showBackground: true }
      ]
      },
      option7: {
      legend: {},
      tooltip: {},
      dataset: {
          source: this.rol4
      },
      xAxis: { type: 'category' },
      yAxis: { type: 'value',
                data: ['1', '2', '3', '4']
      },

      series: [
        { type: 'bar', showBackground: true },
        { type: 'bar', showBackground: true },
        { type: 'bar', showBackground: true },
        { type: 'bar', showBackground: true }
      ]
      }
    }
  },
  watch: {
    'rol1': function (val) {
      console.log('数据发生了变化')
      // option是一个对象,如果没有下面这句话的话，attendanceData虽然更新了。但option没更新。
      // 当监听对象或者是数组中的某个属性值的变化，普通赋值没用就用$set,这个是vue暴露的全局钩子，专门处理这类问题而生的。
      // 在watch里面加个属性deep：true, 这样就能监听到对象里面的属性变化了
      this.$set(this.option4.dataset, 'source', this.rol1)
      this.chartChange()
    },
    'rol2': function (val) {
      console.log('数据发生了变化')
      // option是一个对象,如果没有下面这句话的话，attendanceData虽然更新了。但option没更新。
      // 当监听对象或者是数组中的某个属性值的变化，普通赋值没用就用$set,这个是vue暴露的全局钩子，专门处理这类问题而生的。
      // 在watch里面加个属性deep：true, 这样就能监听到对象里面的属性变化了
      this.$set(this.option5.dataset, 'source', this.rol2)
      this.chartChange()
    },
    'rol3': function (val) {
      console.log('数据发生了变化')
      // option是一个对象,如果没有下面这句话的话，attendanceData虽然更新了。但option没更新。
      // 当监听对象或者是数组中的某个属性值的变化，普通赋值没用就用$set,这个是vue暴露的全局钩子，专门处理这类问题而生的。
      // 在watch里面加个属性deep：true, 这样就能监听到对象里面的属性变化了
      this.$set(this.option6.dataset, 'source', this.rol3)
      this.chartChange()
    },
    'rol4': function (val) {
      console.log('数据发生了变化')
      // option是一个对象,如果没有下面这句话的话，attendanceData虽然更新了。但option没更新。
      // 当监听对象或者是数组中的某个属性值的变化，普通赋值没用就用$set,这个是vue暴露的全局钩子，专门处理这类问题而生的。
      // 在watch里面加个属性deep：true, 这样就能监听到对象里面的属性变化了
      this.$set(this.option7.dataset, 'source', this.rol4)
      this.chartChange()
    }
  },
  mounted () {
    this.chartChange()
  },
  methods: {
    chartChange () {
      this.myEcharts4 = this.$echarts.init(document.getElementById('chartLineBox4'))
      this.myEcharts4.setOption(this.option4, true)

      this.myEcharts5 = this.$echarts.init(document.getElementById('chartLineBox5'))
      this.myEcharts5.setOption(this.option5, true)

      this.myEcharts6 = this.$echarts.init(document.getElementById('chartLineBox6'))
      this.myEcharts6.setOption(this.option6, true)

      this.myEcharts7 = this.$echarts.init(document.getElementById('chartLineBox7'))
      this.myEcharts7.setOption(this.option7, true)
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
