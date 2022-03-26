<template>
  <div v-if="assessmentType==='VB'">
    <business-vb-assessment @returnNoDetail="returnNoDetail" @assessmentCompleted="assessmentCompleted"/>
  </div>
</template>

<script>
import BusinessVbAssessment from '@/components/common/Assessment/VB/BusinessVbAssessment'
export default {
  components: {
    BusinessVbAssessment
  },
  name: 'EvaluateContent',
  props: {
    assessmentType: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    returnNoDetail () {
      this.$emit('returnNoDetail')
    },
    assessmentCompleted () {
      this.$emit('assessmentCompleted')
    }
  }
}
</script>
