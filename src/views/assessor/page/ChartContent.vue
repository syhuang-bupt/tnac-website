<template>
  <div v-if="assessmentType==='VB'">
    <vb-assessment-chart @submitVBAssessment="submitVBAssessment"/>
  </div>
</template>

<script>
import VbAssessmentChart from 'components/common/Assessment/VB/VbAssessmentChart'
export default {
  components: {
    VbAssessmentChart
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
