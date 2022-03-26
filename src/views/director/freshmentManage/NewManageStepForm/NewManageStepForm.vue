<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <a-steps class="steps" :current="currentTab">
        <a-step title="分配督导" />
        <a-step title="分配评估" />
        <a-step title="安排课程" />
        <a-step title="完成" />
      </a-steps>
      <div class="content">
        <!-- keep-alive属性设置组件不会被销毁 -->
        <!-- 目前存在的问题记录：
        1. 安排课程时逻辑问题，先选择时间，在选择课程类型，最后选择康复师比较合理，需要后端提供数据，在前端做筛选。
        2. 新生安排三项的必填问题，需要记录那一项已经做了，再次安排的时候读取数据。 -->
        <keep-alive>
          <supervision-distribution v-if="currentTab === 0" @nextStep="nextStep" :nameid="nameid" :distributionClassData="distributionState.classState" :distributionSupervisionData="distributionState.supervisionState"/>
          <assessment-distribution v-if="currentTab === 1" @nextStep="nextStep" @prevStep="prevStep" :nameid="nameid" :distributionAssessmentData="distributionState.assessmentState"/>
          <course-arrangement v-if="currentTab === 2" @nextStep="nextStep" @prevStep="prevStep" :nameid="nameid"/>
          <manage-finished v-if="currentTab === 3" @prevStep="prevStep" @finish="finish"/>
        </keep-alive>
      </div>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import SupervisionDistribution from './SupervisionDistribution'
import AssessmentDistribution from './AssessmentDistribution'
import CourseArrangement from './CourseArrangement'
import ManageFinished from './ManageFinished'
import { getAssignedState } from 'network/postAssignedData.js'
export default {
  name: 'StepForm',
  components: {
    SupervisionDistribution,
    AssessmentDistribution,
    CourseArrangement,
    ManageFinished
  },
  data () {
    return {
      nameid: '',
      distributionState: {},
      currentTab: 0,
      // form
      form: null
    }
  },
  created () {
    this.nameid = this.$route.params.nameid
    this.getAssignedState(this.nameid)
    // console.log(this.nameid)
  },
  methods: {
    getAssignedState (values) {
      getAssignedState(values).then(res => {
        this.distributionState = res
        console.log(res)
      })
    },
    // handler
    nextStep () {
      if (this.currentTab < 3) {
        this.currentTab += 1
      }
    },
    prevStep () {
      if (this.currentTab > 0) {
        this.currentTab -= 1
      }
    },
    finish () {
      this.$router.push('/director/freshmenmanage/assigned')
    }
  }
}
</script>

<style lang="less" scoped>
  .steps {
    max-width: 750px;
    margin: 16px auto;
  }
</style>
