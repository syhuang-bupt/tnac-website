// -----VB-MAPP转衔评估积分表------
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
      <div id="chartLineBox8" style="width: 100%;height: 360px"></div>
      <div id="chartLineBox9" style="width: 100%;height: 360px"></div>
      <div id="chartLineBox10" style="width: 100%;height: 360px"></div>
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
    // 第一行数据：VB-MAPP里程碑得分、VB-MAPP障碍得分、不良行为和教学控制
    //            教师常规和集体技能、社会技能和社交游戏、独立学习
    zxrol1: {
      type: Array,
      default () {
        return []
      }
      },
    // 第二行数据：泛化、强化物范围、获得技能的速度、新技能的维持
    //            自然环境中的学习、未经训练的转换
     zxrol2: {
      type: Array,
      default () {
        return []
      }
      },
    // 第三行数据：对改变的适应性、自发地行为、自我导向的游戏和休息时间
    //            常规自理能力、如厕技能、进餐技能
      zxrol3: {
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
      myEcharts: null,
      myEcharts1: null,
      myEcharts2: null,
      inforData: this.formRecord,
      columns,
      inforData0: this.formNameBirth,
      columns0,
      option: {
          legend: {},
          tooltip: {},
          dataset: {
              source: this.zxrol1
          },
          xAxis: {
            type: 'category'
            },
          yAxis: {
            type: 'value',
            data: ['1', '2', '3', '4', '5']
          },

          series: [
              { type: 'bar', showBackground: true },
              { type: 'bar', showBackground: true },
              { type: 'bar', showBackground: true },
              { type: 'bar', showBackground: true }
          ]
      },
      option1: {
        legend: {},
        tooltip: {},
        dataset: {
            source: this.zxrol2
        },
        xAxis: { type: 'category' },
        yAxis: { type: 'value',
                  data: ['1', '2', '3', '4', '5']
        },

        series: [
          { type: 'bar', showBackground: true },
          { type: 'bar', showBackground: true },
          { type: 'bar', showBackground: true },
          { type: 'bar', showBackground: true }
        ]
      },
      option2: {
      legend: {},
      tooltip: {},
      dataset: {
          source: this.zxrol3
      },
      xAxis: { type: 'category' },
      yAxis: { type: 'value',
              data: ['1', '2', '3', '4', '5']
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
    'zxrol1': function (val) {
      console.log('数据发生了变化')
      // option是一个对象,如果没有下面这句话的话，attendanceData虽然更新了。但option没更新。
      // 当监听对象或者是数组中的某个属性值的变化，普通赋值没用就用$set,这个是vue暴露的全局钩子，专门处理这类问题而生的。
      // 在watch里面加个属性deep：true, 这样就能监听到对象里面的属性变化了
      this.$set(this.option.dataset, 'source', this.zxrol1)
      this.chartChange()
    },
    'zxrol2': function (val) {
      console.log('数据发生了变化')
      // option是一个对象,如果没有下面这句话的话，attendanceData虽然更新了。但option没更新。
      // 当监听对象或者是数组中的某个属性值的变化，普通赋值没用就用$set,这个是vue暴露的全局钩子，专门处理这类问题而生的。
      // 在watch里面加个属性deep：true, 这样就能监听到对象里面的属性变化了
      this.$set(this.option1.dataset, 'source', this.zxrol2)
      this.chartChange()
    },
    'zxrol3': function (val) {
      console.log('数据发生了变化')
      // option是一个对象,如果没有下面这句话的话，attendanceData虽然更新了。但option没更新。
      // 当监听对象或者是数组中的某个属性值的变化，普通赋值没用就用$set,这个是vue暴露的全局钩子，专门处理这类问题而生的。
      // 在watch里面加个属性deep：true, 这样就能监听到对象里面的属性变化了
      this.$set(this.option2.dataset, 'source', this.zxrol3)
      this.chartChange()
    }
  },
  mounted () {
    this.chartChange()
  },
  methods: {
    chartChange () {
      this.myEcharts = this.$echarts.init(document.getElementById('chartLineBox8'))
      this.myEcharts.setOption(this.option, true)

      this.myEcharts1 = this.$echarts.init(document.getElementById('chartLineBox9'))
      this.myEcharts1.setOption(this.option1, true)

      this.myEcharts2 = this.$echarts.init(document.getElementById('chartLineBox10'))
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
