<template>
  <!-- 里程碑 -->
  <div class="infinite-list-wrapper">
    <a-select default-value="VB-MAPP里程碑评估表" style="width: 320px;margin-bottom:20px" @change="handleChange">
      <a-select-option value="VB-MAPP里程碑评估表">
        VB-MAPP里程碑评估表
      </a-select-option>
      <a-select-option value="VB-MAPP障碍评估评分表">
        VB-MAPP障碍评估评分表
      </a-select-option>
      <a-select-option value="VB-MAPP转衔评估积分表">
        VB-MAPP转衔评估积分表
      </a-select-option>
    </a-select>
    <div v-if="nowPart === 'VB-MAPP里程碑评估表'">
      <div style="text-align:center"><h3>VB-MAPP里程碑评估表</h3></div>
      <v-bcharts
        :le1Data="le1Data"
        :le2Data="le2Data"
        :le3Data="le3Data"
        :formRecord="formRecord1"
        :formNameBirth="formNameBirth">
      </v-bcharts>
    </div>
    <div v-else-if="nowPart === 'VB-MAPP障碍评估评分表'">
      <!-- 计分表 -->
      <div style="text-align:center"><h3>VB-MAPP障碍评估计分表</h3></div>
      <v-bcharts-2
        :rol1="rol1"
        :rol2="rol2"
        :rol3="rol3"
        :rol4="rol4"
        :formRecord="formRecord2"
        :formNameBirth="formNameBirth">
      </v-bcharts-2>
    </div>
    <div v-else-if="nowPart === 'VB-MAPP转衔评估积分表'">
      <!-- 转衔表 -->
      <div style="text-align:center"><h3>VB-MAPP转衔评估积分表</h3></div>
      <v-bcharts-3
        :zxrol1="zxrol1"
        :zxrol2="zxrol2"
        :zxrol3="zxrol3"
        :formRecord="formRecord3"
        :formNameBirth="formNameBirth">
      </v-bcharts-3>
    </div>
    <div class="button-content">
      <a-button type="danger" @click="submitVBAssessment">
        退出
      </a-button>
    </div>
  </div>
</template>
<script>
import storage from 'store'
// 里程碑
import VBcharts from 'components/common/Assessment/VB/VBcharts'
// 计分表
import VBcharts2 from 'components/common/Assessment/VB/VBcharts2'
// 转衔表
import VBcharts3 from 'components/common/Assessment/VB/VBcharts3'
// 请求数据
import { vBchartsData } from 'network/assessmentDataAll.js'

export default {
  components: {
    VBcharts,
    VBcharts2,
    VBcharts3
  },
  data () {
    return {
      nowPart: 'VB-MAPP里程碑评估表',
      getInfoKey: {},
      // 0公共部分
      formRecord1: [],
      formRecord2: [],
      formRecord3: [],
      formNameBirth: [],

      // 1里程碑
      le1Data: [],
      le2Data: [],
      le3Data: [],

      // 2计分表
      rol1: [],
      rol2: [],
      rol3: [],
      rol4: [],

      // 3转衔
       zxrol1: [
        ['product', '第一次评估', '第二次评估', '第三次评估', '第四次评估'],
        ['VB-MAPP里程碑得分', 1, 2, 3, 3],
        ['VB-MAPP障碍得分', 2, 3, 2, 5],
        ['不良行为和教学控制', 3, 3, 3, 3],
        ['教师常规和集体技能', 4, 2, 3, 4],
        ['社会技能和社交游戏', 4, 2, 3, 4],
        ['独立学习', 4, 2, 3, 4]
      ],
      zxrol2: [
        ['product', '第一次评估', '第二次评估', '第三次评估', '第四次评估'],
        ['泛化', 1, 2, 3, 5],
        ['强化物范围', 2, 3, 2, 4],
        ['获得技能的速度', 3, 3, 3, 3],
        ['新技能的维持', 4, 2, 3, 4],
        ['自然环境中的学习', 4, 2, 3, 4],
        ['未经训练的转换', 4, 2, 3, 4]
      ],
      zxrol3: [
        ['product', '第一次评估', '第二次评估', '第三次评估', '第四次评估'],
        ['对改变的适应性', 1, 2, 3, 3],
        ['自发地行为', 2, 3, 2, 4],
        ['自我导向的游戏和休息', 3, 3, 3, 3],
        ['常规自理能力', 4, 2, 5, 4],
        ['如厕技能', 4, 2, 3, 4],
        ['进餐技能', 4, 2, 3, 4]
      ]
    }
  },
  created () {
    // this.formNameBirth = this.$route.params.formNameBirth
    // 取消这一行的注释即可
    this.getInfoKey.name = this.$route.params.nameid
    this.getInfoKey.type = 'VB'
    this.getInfoKey.assessor = storage.get('INFO').name
    this.vBchartsData(this.getInfoKey)
  },
  methods: {
    vBchartsData (values) {
      console.log(values)
      vBchartsData(values).then(res => {
        this.formNameBirth = res.student
        this.formRecord1 = res.MShistory
        this.le1Data = res.MSchart1
        this.le2Data = res.MSchart2
        this.le3Data = res.MSchart3
        this.formRecord2 = res.ZAhistory
        this.rol1 = res.ZAchart1
        this.rol2 = res.ZAchart2
        this.rol3 = res.ZAchart3
        this.rol4 = res.ZAchart4
        this.formRecord3 = res.ZXhistory
        this.zxrol1 = res.ZXchart1
        this.zxrol2 = res.ZXchart2
        this.zxrol3 = res.ZXchart3
        console.log(res)
      })
    },
    handleChange (values) {
      this.nowPart = values
    },
    submitVBAssessment () {
      this.$emit('submitVBAssessment')
    }
  }
}

</script>

<style scoped>
.infinite-list-wrapper{
  height: 440px;
  overflow:auto;
}
.button-content {
  text-align: center;
}
</style>
