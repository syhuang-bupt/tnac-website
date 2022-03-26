<template>
  <div>
    <a-table :columns="columns" :data-source="assessmentTableData" bordered :pagination="pagination">
      <span slot="customName" class="title-style">IEP干预计划</span>
      <span slot="customTime" class="title-style">评估安排时间</span>
      <span slot="customAction" class="title-style">操作</span>
      <span slot="action" slot-scope="action,record">
        <!-- 暂时传一个评估名字，后期可能需要更改 -->
        <a @click="editIEPClick(record.customName)" v-if="!record.isDone">编辑</a>
        <a @click="watchIEPClick(record.customName)" v-else>查看</a>
      </span>
    </a-table>
  </div>
</template>

<script>
import storage from 'store'
import { getAssessorIEP } from 'network/assessmentIEPData.js'
const columns = [
  {
    dataIndex: 'customName',
    width: '30%',
    key: 'customName',
    slots: { title: 'customName' }
  },
  {
    dataIndex: 'customTime',
    width: '30%',
    key: 'customTime',
    slots: { title: 'customTime' }
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
      getInfoKey: {},
      pagination: {
        // 设置每一页的数据量
        pageSize: 5
      }
    }
  },
  created () {
    this.studentName = this.$route.params.nameid
    this.getInfoKey.studentName = this.studentName
    this.getInfoKey.assessorName = storage.get('INFO').name
    this.getAssessorIEP(this.getInfoKey)
  },
  methods: {
    getAssessorIEP (values) {
      getAssessorIEP(values).then(res => {
        console.log(res)
        this.assessmentTableData = res
      })
    },
    editIEPClick (assessmentName) {
      console.log(assessmentName)
      this.$emit('editIEP', assessmentName)
    },
    watchIEPClick (assessmentName) {
      this.$emit('watchIEP', assessmentName)
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
