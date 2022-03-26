<template>
  <div>
    <a-table :columns="columns" :data-source="assessmentTableData" bordered :pagination="pagination">
      <span slot="customName" class="title-style">评估报告</span>
      <span slot="customTime" class="title-style">评估安排时间</span>
      <span slot="customAction" class="title-style">操作</span>
      <span slot="action" slot-scope="action,record">
        <!-- 暂时传一个评估名字，后期可能需要更改 -->
        <a v-if="!record.isDone" @click="checkDetailClick(record.assessmentName)">评估</a>
        <a v-else @click="watchDetailClick(record.assessmentName)">查看</a>
      </span>
    </a-table>
  </div>
</template>

<script>
import storage from 'store'
import { getAssessmentData } from 'network/assessmentDataAll.js'
const columns = [
  {
    dataIndex: 'assessmentName',
    width: '30%',
    key: 'assessmentName',
    slots: { title: 'customName' },
    scopedSlots: { customRender: 'assessmentName' }
  },
  {
    dataIndex: 'assessmentTime',
    width: '30%',
    key: 'assessmentTime',
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
  name: 'AssessorStartEvaluateTable',
  data () {
    return {
      columns,
      studentName: '',
      getInfoKey: {},
      assessmentTableData: [],
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
    this.getAssessmentData(this.getInfoKey)
  },
  methods: {
    getAssessmentData (values) {
      console.log(values)
      getAssessmentData(values).then(res => {
        console.log(res)
        this.assessmentTableData = res
      })
    },
    checkDetailClick (assessmentName) {
      // console.log(assessmentname)
      this.$emit('checkDetail', assessmentName)
    },
    watchDetailClick (assessmentName) {
      // console.log(assessmentname)
      this.$emit('watchDetail', assessmentName)
      // 这里写查看评估详情的代码
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
