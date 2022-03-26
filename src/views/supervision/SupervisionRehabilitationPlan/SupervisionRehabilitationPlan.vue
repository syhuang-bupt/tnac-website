<template>
  <page-header-wrapper :title="false" >
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
          v-if="isChartShow"
          :xData="StudentCourseChartDataX"
          :yData="StudentCourseChartDataY"/>
      </div>
      <a-divider/>
      <div class="footer">
        <span class="course-data-text">课程安排:</span>
        <a-select default-value="个训" class="select-course-bottom" @select="handleBottomCourseSelect">
          <a-select-option v-for="(item,index) in courseSelectOptions" :value="item" :key="index" :disabled="item==='感统'">
            {{ item }}
          </a-select-option>
        </a-select>
        <!-- 具体课程相关代码 -->
        <gx-rehabilitation-plan :nameid="nameid" v-if="courseCategory==='个训'"/>
        <jx-rehabilitation-plan :nameid="nameid" v-else-if="courseCategory==='精细'"/>
        <gt-rehabilitation-plan :nameid="nameid" v-else-if="courseCategory==='感统'"/>
        <yy-rehabilitation-plan :nameid="nameid" v-else-if="courseCategory==='语言'"/>
        <sj-rehabilitation-plan :nameid="nameid" v-else-if="courseCategory==='社交'"/>
        <jt-rehabilitation-plan :nameid="nameid" v-else-if="courseCategory==='集体'"/>
      </div>
    </div>
  </page-header-wrapper>
</template>

<script>
import StudentCourseDataChart from 'components/common/chart/StudentCourseDataChart'
import { StudentCourseData, StudentCourseChartDataX, StudentCourseChartDataY } from 'someData/index.js'
import GxRehabilitationPlan from 'components/common/RehabilitationPlan/GeXun/GxRehabilitationPlan'
import JxRehabilitationPlan from 'components/common/RehabilitationPlan/JingXi/JxRehabilitationPlan'
import GtRehabilitationPlan from 'components/common/RehabilitationPlan/GanTong/GtRehabilitationPlan'
import YyRehabilitationPlan from 'components/common/RehabilitationPlan/YuYan/YyRehabilitationPlan'
import SjRehabilitationPlan from 'components/common/RehabilitationPlan/SheJiao/SjRehabilitationPlan'
import JtRehabilitationPlan from 'components/common/RehabilitationPlan/JiTi/JtRehabilitationPlan'
export default {
  name: 'RehabilitationPlan',
  components: {
    StudentCourseDataChart,
    GxRehabilitationPlan,
    JxRehabilitationPlan,
    GtRehabilitationPlan,
    YyRehabilitationPlan,
    SjRehabilitationPlan,
    JtRehabilitationPlan
  },
  data () {
    return {
      nameid: '',
      StudentCourseData,
      isChartShow: false,
      StudentCourseChartDataX,
      StudentCourseChartDataY,
      StudentCourseChartDataYTmp: StudentCourseChartDataY,
      selectedOptions: [],
      courseSelectOptions: ['个训', '精细', '感统', '语言', '社交', '集体'],
      courseCategory: '个训'
    }
  },
  created () {
    this.nameid = this.$route.params.nameid
  },
  methods: {
    // 图表相关函数
    onCourseChange (value) {
      // console.log(value)
      this.selectedOptions = value
    },
    onVisible (selectedOptions, value) {
      // value值对应下拉框是否展开
      // console.log(value)
      // console.log(selectedOptions.toString())
      if (value === false) {
        if (selectedOptions.toString() === '') {
          this.isChartShow = false
        } else if (selectedOptions.toString() === '个训,听者反应') {
          console.log('现在对应个训下的听者反应')
          this.StudentCourseChartDataY = this.StudentCourseChartDataYTmp
          this.isChartShow = true
        } else if (selectedOptions.toString() === '个训,听者反应,拍手') {
          console.log('现在对应个训下的听者反应的拍手')
          this.StudentCourseChartDataY = this.StudentCourseChartDataYTmp.slice(0, 1)
          this.isChartShow = true
        } else if (selectedOptions.toString() === '个训,听者反应,找小狗') {
          console.log('现在对应个训下的听者反应的找小狗')
          this.StudentCourseChartDataY = this.StudentCourseChartDataYTmp.slice(1, 2)
          this.isChartShow = true
        }
      }
    },
    filter (inputValue, path) {
      return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
    },
    // 课程安排相关函数
    handleBottomCourseSelect (value) {
      console.log(`selected ${value}`)
      this.courseCategory = value
    }
  }
}
</script>

<style scoped>
.main-content {
  display: flex;
  min-height: 420px;
  background-color: white;
  padding: 24px 16px 8px 28px;
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
  margin:0 auto
}
.select-course-bottom {
  width: 200px;
  margin-left: 20px;
}
</style>
