<template>
  <div class="main-content-style">
    <div v-if="isAssessmentDetail==='NotAssessmentDetail'">
      <assessor-start-evaluate-table @checkDetail="checkDetailClick" @watchDetail="watchDetail"/>
    </div>
    <div v-else-if="isAssessmentDetail==='AssessmentDetail'">
      <evaluate-content :assessmentType="assessmentName" @returnNoDetail="returnNoDetail" @assessmentCompleted="assessmentCompleted"/>
    </div>
    <div v-else-if="isAssessmentDetail==='watchAssessmentChart'">
      <chart-content :assessmentType="assessmentName" @returnNoDetail="returnNoDetail"/>
    </div>
  </div>
</template>

<script>
import EvaluateContent from './EvaluateContent'
import ChartContent from './ChartContent'
import AssessorStartEvaluateTable from '@/components/common/Table/AssessorStartEvaluateTable/AssessorStartEvaluateTable'
// import { AssessmentTableData } from 'someData/index.js'
export default {
  name: 'AssessmentReport',
  components: {
    EvaluateContent,
    AssessorStartEvaluateTable,
    ChartContent
  },
  data () {
    return {
      AssessmentTableData: [],
      isAssessmentDetail: 'NotAssessmentDetail',
      assessmentName: ''
    }
  },
  methods: {
    checkDetailClick (assessmentname) {
      this.isAssessmentDetail = 'AssessmentDetail'
      this.assessmentName = assessmentname
    },
    watchDetail (assessmentname) {
      this.isAssessmentDetail = 'watchAssessmentChart'
      this.assessmentName = assessmentname
    },
    returnNoDetail () {
      this.isAssessmentDetail = 'NotAssessmentDetail'
    },
    assessmentCompleted () {
      this.isAssessmentDetail = 'NotAssessmentDetail'
    }
  }
}
</script>

<style scoped>
.newAssessment {
  text-align: center;
}
.detail-btn-return {
  text-align: center;
}
</style>
