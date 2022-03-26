<template>
  <div class="main-content-style">
    <div class="history-info">
      <h2 class="report-title">干预历史+发育历史</h2>
      <div v-for="(item,index) in studentInformation" :key="index">
        <a :href="item.link" target="_blank">{{ item.name }}</a>
      </div>
    </div>
    <a-divider class="divider"/>
    <div class="external-assessment-report">
      <h2 class="report-title">过往评估报告</h2>
      <div v-for="(item,index) in externalAssessmentData" :key="index">
        <a :href="item.link" target="_blank">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryInfoItem from 'components/common/StudentInfo/HistoryInfoItem/HistoryInfoItem'
import ExternalAssessmentReportTable from 'components/common/StudentInfo/ExternalAssessmentReportTable/ExternalAssessmentReportTable'
import { getDirectorStudentDetailHistoryInfo } from 'network/getStudentDetail.js'
// import { externalAssessmentData } from 'someData/index.js'
export default {
  name: 'HistoryInfo',
  props: {
    nameid: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      externalAssessmentData: [],
      studentInformation: [],
      getInfoKey: {}
    }
  },
  components: {
    HistoryInfoItem,
    ExternalAssessmentReportTable
  },
  created () {
    this.getInfoKey.role = 0
    this.getInfoKey.name = this.nameid
    this.getDirectorStudentDetailHistoryInfo(this.getInfoKey)
  },
  methods: {
    getDirectorStudentDetailHistoryInfo (values) {
      console.log(values)
      getDirectorStudentDetailHistoryInfo(values).then(res => {
        console.log(res)
        this.studentInformation = res.studentInformation
        this.externalAssessmentData = res.externalAssessmentData
      })
    }
  }
}
</script>

<style scoped>
.report-title {
  font-size:18px;
  font-weight: bold;
  color: #414141;
}
</style>
