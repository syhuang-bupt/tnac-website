<template>
  <div>
    <iEP-content
      v-if="isIEPDetail"
      :iEPType="IEPName"
      :whosIEP="studentName"
      :isDone="isDone"
      :issup="true"
      @returnNoDetail="returnNoDetail"/>
    <supervision-iEP-table v-else @editIEP="editIEP" @watchIEP="watchIEP"/>
  </div>
</template>

<script>
import IEPContent from 'views/assessor/page/IEPContent'
import SupervisionIEPTable from '@/components/common/Table/SupervisionIEPTable/SupervisionIEPTable'
export default {
  components: {
    SupervisionIEPTable,
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
