<template>
  <div>
    <a-table :columns="columns" :data-source="assessmentTableData" bordered :pagination="pagination">
      <span slot="IEPName" class="title-style">IEP干预计划</span>
      <span slot="IEPTime" class="title-style">评估安排时间</span>
      <span slot="customAction" class="title-style">操作</span>
      <span slot="action" slot-scope="action,record">
        <!-- 暂时传一个评估名字，后期可能需要更改 -->
        <span v-if="!record.edit">IEP未完成</span>
        <a @click="editIEPClick(record.IEPName)" v-else-if="record.edit && !record.excute">编辑</a>
        <a @click="watchIEPClick(record.IEPName)" v-else-if="record.edit && record.excute">查看</a>
      </span>
    </a-table>
  </div>
</template>

<script>
import { getAllAssessmentIEPData } from 'network/getStudentDetail.js'
const columns = [
  {
    dataIndex: 'IEPName',
    width: '30%',
    key: 'IEPName',
    slots: { title: 'IEPName' }
  },
  {
    dataIndex: 'assessor',
    width: '30%',
    key: 'assessor',
    slots: { title: 'assessor' }
  },
  {
    dataIndex: 'IEPTime',
    width: '30%',
    key: 'IEPTime',
    slots: { title: 'IEPTime' }
  },
  {
    key: 'action',
    width: '10%',
    align: 'center',
    slots: { title: 'customAction' },
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  data () {
    return {
      columns,
      assessmentTableData: [],
      studentName: '',
      pagination: {
        // 设置每一页的数据量
        pageSize: 5
      }
    }
  },
  created () {
    this.studentName = this.$route.params.nameid
    this.getAllAssessmentIEPData(this.studentName)
  },
  methods: {
    getAllAssessmentIEPData (values) {
      getAllAssessmentIEPData(values).then(res => {
        console.log(res)
        this.assessmentTableData = res
      })
    },
    editIEPClick (IEPName) {
      console.log(IEPName)
      this.$emit('editIEP', IEPName)
    },
    watchIEPClick (IEPName) {
      this.$emit('watchIEP', IEPName)
    }
  }
}
</script>

<style scoped>
.title-style {
    font-size: 14px;
    font-weight: bold;
}
</style>
