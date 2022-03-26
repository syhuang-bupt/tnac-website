<template>
  <div v-if="assessmentType==='VB'">
    <vb-assessment @returnNoDetail="returnNoDetail" @assessmentCompleted="assessmentCompleted"/>
  </div>
</template>

<script>
import VbAssessment from '@/components/common/Assessment/VB/VbAssessment'
export default {
  components: {
    VbAssessment
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
