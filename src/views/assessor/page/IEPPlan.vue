<template>
  <div>
    <iEP-content v-if="isIEPDetail" :iEPType="IEPName" :whosIEP="studentName" :isDone="isDone" @returnNoDetail="returnNoDetail"/>
    <assessor-iEP-table v-else @editIEP="editIEP" @watchIEP="watchIEP"/>
  </div>
</template>

<script>
import IEPContent from './IEPContent'
import AssessorIEPTable from '@/components/common/Table/AssessorIEPTable/AssessorIEPTable'
export default {
  components: {
    AssessorIEPTable,
    IEPContent
  },
  data () {
    return {
      isDone: false,
      isIEPDetail: false,
      IEPName: '',
      studentName: ''
    }
  },
  created () {
    this.studentName = this.$route.params.nameid
  },
  methods: {
    returnNoDetail () {
      this.isIEPDetail = false
    },
    editIEP (IEPName) {
      this.isDone = false
      this.isIEPDetail = true
      this.IEPName = IEPName
    },
    watchIEP (IEPName) {
      this.isDone = true
      this.isIEPDetail = true
      this.IEPName = IEPName
    }
  }
}
</script>

<style scoped>

</style>
