<template>
  <div>
    <iEP-content v-if="isIEPDetail" :iEPType="IEPName" :isDone="isDone" :whosIEP="studentName" @returnNoDetail="returnNoDetail"/>
    <business-assessor-iEP-table v-else @editIEP="editIEP" @watchIEP="watchIEP"/>
  </div>
</template>

<script>
import IEPContent from './IEPContent'
import BusinessAssessorIEPTable from '@/components/common/Table/AssessorIEPTable/BusinessAssessorIEPTable'
export default {
  components: {
    BusinessAssessorIEPTable,
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
