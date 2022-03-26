<template>
  <div>
    <a-modal
      title="出勤数据"
      :visible="visible"
      :destroyOnClose="true"
      :width="'420px'"
      :dialog-style="{ top: '90px', left: '180px' }"
      @cancel="handleCancel">
      <template slot="footer">
        <a-button key="back" @click="handleCancel" v-show="true">
          关闭
        </a-button>
      </template>
      <span>请选择月份：<a-month-picker
        :disabled-date="disabledDate"
        placeholder="选择月份"
        :allowClear="false"
        :default-value="moment()"
        style="width:260px"
        @change="onSelectChange"/></span>
      <student-attendance-data-chart style="margin-top:20px" :attendanceData="attendanceData"/>
    </a-modal>
  </div>
</template>
<script>
import moment from 'moment'
import StudentAttendanceDataChart from '../chart/StudentAttendanceDataChart'
export default {
  name: 'AttendanceStateModel',
  props: {
    visible: {
      type: Boolean,
      default () {
        return ''
      }
    },
    whoData: {
      type: String,
      default () {
        return ''
      }
    }
  },
  components: {
    StudentAttendanceDataChart
  },
  data () {
    return {
      // isWhichChart: true,
      queryStartTime: '2021-01-01',
      attendanceData: [{ value: 7, name: '缺勤' },
                       { value: 23, name: '出勤' }]
    }
  },
  methods: {
    moment,
    handleCancel (e) {
      this.$emit('closeModel')
    },
    disabledDate (current) {
      // 选择今天之前的月份
      return current && current > moment().endOf('day') || current < moment(this.queryStartTime, 'YYYY-MM-DD').subtract(1, 'day')
    },
    onSelectChange (date, dateString) {
      this.isWhichChart = !this.isWhichChart
      if (dateString === '2021-05') {
        this.attendanceData = [{ value: 3, name: '缺勤' },
                               { value: 27, name: '出勤' }]
      } else if (dateString === '2021-06') {
        this.attendanceData = [{ value: 7, name: '缺勤' },
                       { value: 23, name: '出勤' }]
      }
    }
  }
}
</script>

<style scoped>
.attendance-chart {
  /* background-color: red; */
  margin-top: 40px;
  margin-left: 40px;
}
.attendance-data-text {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  color: brown;
}
</style>
