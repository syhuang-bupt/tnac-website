<template>
  <div class="main-content">
    <div class="header" >
      <div>
        <span class="course-data-text">课程数据:</span>
        <a-cascader
          :options="StudentCourseData"
          :show-search="{ filter }"
          change-on-select
          class="select-course"
          placeholder="请选择课程"
          @popupVisibleChange="value=>onVisible(this.selectedOptions,value)"
          @change="onCourseChange"/>
      </div>
      <student-course-data-chart
        class="courseData-chart"
        :xData="StudentCourseChartDataX"
        :yData="StudentCourseChartDataY"/>
    </div>
  </div>
</template>

<script>
import StudentCourseDataChart from 'components/common/chart/StudentCourseDataChart'
import { StudentCourseData, StudentCourseChartDataX, StudentCourseChartDataY } from 'someData/index.js'
import moment from 'moment'
export default {
  name: 'RehabilitationPlan',
  components: {
    StudentCourseDataChart
  },
  data () {
    return {
      StudentCourseData,
      StudentCourseChartDataX,
      StudentCourseChartDataY,
      StudentCourseChartDataYTmp: StudentCourseChartDataY,
      selectedOptions: []
    }
  },
  methods: {
    moment,
    onCourseChange (value, selectedOptions) {
      // console.log(value, selectedOptions)
      this.selectedOptions = value
    },
    onVisible (selectedOptions, value) {
      // value值对应下拉框是否展开
      // console.log(value)
      // console.log(selectedOptions.toString())
      if (value === false) {
        if (selectedOptions.toString() === '') {
        } else if (selectedOptions.toString() === '个训,听者反应') {
          console.log('现在对应个训下的听者反应')
          this.StudentCourseChartDataY = this.StudentCourseChartDataYTmp
        } else if (selectedOptions.toString() === '个训,听者反应,拍手') {
          console.log('现在对应个训下的听者反应的拍手')
          this.StudentCourseChartDataY = this.StudentCourseChartDataYTmp.slice(0, 1)
        } else if (selectedOptions.toString() === '个训,听者反应,找小狗') {
          console.log('现在对应个训下的听者反应的找小狗')
          this.StudentCourseChartDataY = this.StudentCourseChartDataYTmp.slice(1, 2)
        }
      }
    },
    filter (inputValue, path) {
      return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
    }
  }
}
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
}
.header {
  padding-bottom: 0;
  margin-bottom: 0;
  /* background-color: red; */
}
.course-data-text {
  font-size: 16px;
  font-weight: bold;
}
.select-course {
  width: 500px;
  margin-left: 20px;
}
.courseData-chart {
  /* background-color: green; */
  padding-top: 25px;
  margin-left: 0;
  padding-bottom: 0;
  margin-bottom: 0;
}
.select-course-bottom {
  width: 200px;
  margin-left: 20px;
}
.plan-category {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.courseSchedule {
  margin-top: 12px;
}
</style>
