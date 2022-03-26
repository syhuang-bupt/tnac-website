<template>
  <div class="main-content-style">
    <div v-if="isNewAssessmentOrDetail==='NewAssessment'" class="newAssessment">
      <new-assessment-table :assessorAssessmentDataSource="AssessorAssessmentData" ref="assignNewAssessment"></new-assessment-table>
      <span class="new-btn-return" @click="returnClick()"><a-button type="primary">返回</a-button></span>
      <a-popconfirm
        title="确定进行新评估吗？"
        ok-text="确定"
        cancel-text="取消"
        @confirm="confirm"
        @cancel="cancel">
        <span class="btn-determine" @click="determineClick()"><a-button type="danger">确定</a-button></span>
      </a-popconfirm>
    </div>
    <div v-else-if="isNewAssessmentOrDetail==='NotNewAndDetail'">
      <iep-table :iepTableData="iepTableData" @checkDetail="checkDetailClick"/>
      <div class="btn-new-assessment" @click="newAssessmentClick()" style="margin-top:12px"><a-button type="primary">进行新评估</a-button></div>
    </div>
    <div v-else-if="isNewAssessmentOrDetail==='AssessmentDetail'">
      <iEP-content :iEPType="IEPName" :whosIEP="nameid" :isDone="isDone" @returnNoDetail="returnClick"/>
    </div>
  </div>
</template>

<script>
import IepTable from '@/components/common/StudentInfo/IepTable/IepTable'
import NewAssessmentTable from '@/components/common/StudentInfo/NewAssessmentTable/NewAssessmentTable'
import IEPContent from 'views/assessor/page/IEPContent'
import { getAssessorData } from 'network/getSupOrTherOrAsseData'
import { postAssignedAssessmentData } from 'network/postAssignedData.js'
import { getAllAssessmentIEPData } from 'network/getStudentDetail.js'
export default {
  name: 'AssessmentReport',
  components: {
    IepTable,
    NewAssessmentTable,
    IEPContent
  },
  data () {
    return {
      nameid: '',
      isDone: true,
      iepTableData: [],
      AssessorAssessmentData: [],
      isNewAssessmentOrDetail: 'NotNewAndDetail',
      assignNewAssessmentData: {
        type: Object,
        default () {
          return {}
        }
      },
      IEPName: ''
    }
  },
  created () {
    this.nameid = this.$route.params.nameid
    this.getAssessorData()
    this.getAllAssessmentIEPData(this.nameid)
  },
  methods: {
    getAllAssessmentIEPData (values) {
      getAllAssessmentIEPData(values).then(res => {
        console.log(res)
        this.iepTableData = res
      })
    },
    getAssessorData () {
      getAssessorData().then(res => {
        this.AssessorAssessmentData = res
        console.log(res)
      })
    },
    postAssignedAssessmentData (values) {
      console.log(values)
      postAssignedAssessmentData(values).then(res => {
        console.log(res)
      })
    },
    newAssessmentClick () {
      this.isNewAssessmentOrDetail = 'NewAssessment'
    },
    checkDetailClick (IEPName) {
      this.isNewAssessmentOrDetail = 'AssessmentDetail'
      console.log('我跳跃到评估详情页啦' + IEPName)
      this.IEPName = IEPName
    },
    returnClick () {
      this.isNewAssessmentOrDetail = 'NotNewAndDetail'
    },
    determineClick () {
      // 通过this.$refs.assignNewAssessment.Choicesresult拿到子组件的参数
      this.assignNewAssessmentData = this.$refs.assignNewAssessment.Choicesresult
    },
    confirm (e) {
      if (JSON.stringify(this.assignNewAssessmentData) !== '{}') {
        const values = {
          assessmentValues: this.assignNewAssessmentData,
          name: this.nameid
        }
        this.postAssignedAssessmentData(values)
        this.$message.success('新评估已发送到相应评估师')
        console.log(this.assignNewAssessmentData)
        // 调用子组件的方法，将选框全部设置为未选中状态,这个不知道如何实现，暂时可以不做
        // this.$refs.assignNewAssessment.parenteClickYes()
      } else {
        this.$message.error('请选择评估类型')
        console.log('请选择评估类型')
      }
    },
    cancel (e) {
    }
  }
}
</script>

<style scoped>
.newAssessment {
  text-align: center;
}
.btn-new-assessment {
  text-align: center;
}
.btn-determine {
  text-align: center;
}
.new-btn-return {
  text-align: center;
  margin-right: 20px;
}
.detail-btn-return {
  text-align: center;
}
</style>
