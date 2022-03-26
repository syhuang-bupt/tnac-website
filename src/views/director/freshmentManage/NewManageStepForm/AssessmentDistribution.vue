<template>
  <div class="main-content">
    <new-assessment-table :assessorAssessmentDataSource="AssessorAssessmentData" ref="assignAssessment"/>
    <a-button @click="prevStep">上一步</a-button>
    <a-button type="primary" style="margin-left: 8px" @click="nextStep">{{ assessmentState.state?'下一步':'提交' }}</a-button>
  </div>
</template>

<script>
import NewAssessmentTable from '@/components/common/StudentInfo/NewAssessmentTable/NewAssessmentTable'
// import { AssessorAssessmentData } from 'someData/index.js'
import { getAssessorData } from 'network/getSupOrTherOrAsseData'
import { postAssignedAssessmentData } from 'network/postAssignedData.js'
export default {
  components: {
    NewAssessmentTable
  },
  name: 'AssessmentDistribution',
  props: {
    nameid: {
      type: String,
      default () {
        return ''
      }
    },
    // 分配情况
    distributionAssessmentData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    'distributionAssessmentData': function (val) {
      this.assessmentState = val
    }
  },
  data () {
    return {
      assessmentState: {},
      AssessorAssessmentData: [],
      assignAssessmentData: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  },
  created () {
    this.assessmentState = this.distributionAssessmentData
    this.getAssessorData()
  },
  methods: {
    getAssessorData () {
      getAssessorData().then(res => {
        this.AssessorAssessmentData = res
        console.log(res)
      })
    },
    postAssignedAssessmentData (values) {
      postAssignedAssessmentData(values).then(res => {
        console.log(res)
      })
    },
    nextStep () {
      this.assignAssessmentData = this.$refs.assignAssessment.Choicesresult
      if (JSON.stringify(this.assignAssessmentData) !== '{}') {
        const values = {
          assessmentValues: this.assignAssessmentData,
          name: this.nameid
        }
        if (!this.assessmentState.state) {
          this.postAssignedAssessmentData(values)
        }
        this.$emit('nextStep')
      } else {
        if (!this.assessmentState.state) {
          this.$message.warning('请至少选择一项评估')
        } else {
          this.$emit('nextStep')
        }
      }
    },
    prevStep () {
      this.$emit('prevStep')
    }
  }
}
</script>

<style scoped>
.main-content {
  text-align: center;
}
</style>
