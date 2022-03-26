<template>
  <div>
    <div v-if="!isDetail">
      <iep-table :iepTableData="iepTableData" @checkDetail="checkDetailClick"/>
    </div>
    <div v-else>
      <iEP-content v-if="isIEPDetail" :iEPType="IEPName" :whosIEP="nameid" :isDone="true" @returnNoDetail="returnNoDetail"/>
    </div>
  </div>
</template>

<script>
import IEPContent from 'views/assessor/page/IEPContent'
import { getAllIEPData } from 'network/businessStudentData.js'
import IepTable from '@/components/common/StudentInfo/IepTable/IepTable'
export default {
  components: {
    IepTable,
    IEPContent
  },
  data () {
    return {
      nameid: '',
      isDetail: false,
      IEPName: '',
      iepTableData: []
    }
  },
  created () {
    this.nameid = this.$route.params.nameid
    this.getAllIEPData(this.nameid)
  },
  methods: {
    getAllIEPData (values) {
      console.log(values)
      getAllIEPData(values).then(res => {
        console.log(res)
        this.iepTableData = res
      })
    },
    checkDetailClick (IEPName) {
      this.isDetail = true
      this.IEPName = IEPName
    },
    returnNoDetail () {
      this.isDetail = false
    }
  }
}
</script>

<style scoped>

</style>
