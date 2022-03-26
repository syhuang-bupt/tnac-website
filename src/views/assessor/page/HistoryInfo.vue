<template>
  <div class="main-content-style">
    <div class="history-info">
      <h2 class="report-title">干预历史+发育历史</h2>
      <div v-for="(item,index) in studentInformation" :key="index">
        <a :href="item.link" target="_blank">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { getAssessorStudentDetailHistoryInfo } from 'network/getStudentDetail.js'
export default {
  name: 'HistoryInfo',
  data () {
    return {
      studentInformation: [],
      getInfoKey: {}
    }
  },
  props: {
    nameid: {
      type: String,
      default () {
        return ''
      }
    }
  },
  created () {
    this.getInfoKey.role = 2
    this.getInfoKey.name = this.nameid
    this.getAssessorStudentDetailHistoryInfo(this.getInfoKey)
  },
  methods: {
    getAssessorStudentDetailHistoryInfo (values) {
      console.log(values)
      getAssessorStudentDetailHistoryInfo(values).then(res => {
        console.log(res)
        this.studentInformation = res.studentInformation
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
