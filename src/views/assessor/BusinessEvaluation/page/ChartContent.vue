<template>
  <div v-if="assessmentType==='VB'">
    <business-vb-assessment-chart @submitVBAssessment="submitVBAssessment"/>
  </div>
</template>

<script>
import BusinessVbAssessmentChart from 'components/common/Assessment/VB/BusinessVbAssessmentChart'
export default {
  components: {
    BusinessVbAssessmentChart
  },
  props: {
    assessmentType: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    submitVBAssessment () {
      this.$emit('returnNoDetail')
    }
  }
}
</script>
