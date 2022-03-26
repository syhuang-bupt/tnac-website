<template>
  <div v-if="iEPType==='VB'">
    <business-vB-iEP @exit="returnNoDetail" :isDone="done"/>
  </div>
</template>

<script>
import BusinessVBIEP from 'components/common/IEP/VB/BusinessVBIEP'
export default {
  components: {
    BusinessVBIEP
  },
  name: 'EvaluateContent',
  props: {
    whosIEP: {
      type: String,
      default () {
        return ''
      }
    },
    iEPType: {
      type: String,
      default () {
        return ''
      }
    },
    isDone: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      done: false
    }
  },
  created () {
    this.done = this.isDone
  },
  methods: {
    returnNoDetail () {
      this.$emit('returnNoDetail')
    }
  }
}
</script>
