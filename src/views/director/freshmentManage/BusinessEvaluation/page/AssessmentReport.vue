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
      <assessment-report-table :assessmentTableData="AssessmentTableData" @checkDetail="checkDetailClick"></assessment-report-table>
      <div class="btn-new-assessment" @click="newAssessmentClick()" style="margin-top:12px"><a-button type="primary">进行新评估</a-button></div>
    </div>
    <div v-else-if="isNewAssessmentOrDetail==='AssessmentDetail'">
      <assessment-report-detail :assessmentType="assessmentName" @returnNoDetail="returnClick"></assessment-report-detail>
    </div>
  </div>
</template>

<script>
import AssessmentReportTable from '@/components/common/StudentInfo/AssessmentReportTable/AssessmentReportTable'
import NewAssessmentTable from '@/components/common/StudentInfo/NewAssessmentTable/NewAssessmentTable'
import AssessmentReportDetail from '@/components/common/StudentInfo/AssessmentReportDetail/AssessmentReportDetail'
import { getAssessorData } from 'network/getSupOrTherOrAsseData'
import { postAssessmentData, getAllAssessmentData } from 'network/businessStudentData.js'
// import { AssessmentTableData, AssessorAssessmentData } from 'someData/index.js'
export default {
  name: 'AssessmentReport',
  components: {
    AssessmentReportTable,
    NewAssessmentTable,
    AssessmentReportDetail
  },
  data () {
    return {
      nameid: '',
      AssessmentTableData: [],
      AssessorAssessmentData: [],
      isNewAssessmentOrDetail: 'NotNewAndDetail',
      assignNewAssessmentData: {
        type: Object,
        default () {
          return {}
        }
      },
      assessmentName: ''
    }
  },
  created () {
    this.nameid = this.$route.params.nameid
    this.getAssessorData()
    this.getAllAssessmentData(this.nameid)
  },
  methods: {
    getAllAssessmentData (values) {
      console.log(values)
      getAllAssessmentData(values).then(res => {
        console.log(res)
        this.AssessmentTableData = res
      })
    },
    getAssessorData () {
      getAssessorData().then(res => {
        this.AssessorAssessmentData = res
        console.log(res)
      })
    },
    postAssessmentData (values) {
      postAssessmentData(values).then(res => {
        console.log(res)
      })
    },
    newAssessmentClick () {
      this.isNewAssessmentOrDetail = 'NewAssessment'
    },
    checkDetailClick (assessmentName) {
      this.isNewAssessmentOrDetail = 'AssessmentDetail'
      console.log('我跳跃到评估详情页啦' + assessmentName)
      this.assessmentName = assessmentName
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
        this.$message.success('新评估已发送到相应评估师')
        console.log(this.assignNewAssessmentData)
        const values = {
          assessmentValues: this.assignNewAssessmentData,
          name: this.nameid
        }
        this.postAssessmentData(values)
      } else {
        this.$message.success('请选择评估类型')
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
