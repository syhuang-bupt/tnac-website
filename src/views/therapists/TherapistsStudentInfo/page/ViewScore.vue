<template>
  <div class="main-content">
    <a-date-picker :default-value="moment()" @change="onDateChange" class="time-select"/>
    <therapists-result-table :resultData="StudentResultData"></therapists-result-table>
  </div>
</template>

<script>
import TherapistsResultTable from 'components/common/Table/TherapistsResultTable/TherapistsResultTable'
import { StudentResultData } from 'someData/index.js'
import moment from 'moment'
export default {
  name: 'ViewScore',
  components: {
    TherapistsResultTable
  },
  data () {
    return {
      StudentResultData
    }
  },
  methods: {
    moment,
    onDateChange (date, dateString) {
      console.log('日期改变了' + dateString)
    }
  }
}
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
}
.time-select {
  align-self: flex-end;
  margin-bottom: 8px;
}
</style>
