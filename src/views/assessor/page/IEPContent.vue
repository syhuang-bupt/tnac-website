<template>
  <div v-if="iEPType==='VB'">
    <vB-iEP @exit="returnNoDetail" :isDone="done" :issup="true"/>
  </div>
</template>

<script>
import VBIEP from 'components/common/IEP/VB/VBIEP'
export default {
  components: {
    VBIEP
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
    },
    issup: {
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
