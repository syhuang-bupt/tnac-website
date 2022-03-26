<template>
  <div>
    <a-table :columns="columns" :data-source="assessmentTableData" bordered :pagination="pagination">
      <span slot="assessmentName" class="title-style">评估报告</span>
      <span slot="assessor" class="title-style">评估师</span>
      <span slot="assessmentTime" class="title-style">评估时间</span>
      <span slot="operation" class="title-style">操作</span>
      <span slot="operation" slot-scope="action,record">
        <!-- 暂时传一个评估名字，后期可能需要更改 -->
        <a @click="checkDetailClick(record.assessmentName)" v-if="record.edit">查看</a>
        <span v-else>评估未完成</span>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    dataIndex: 'assessmentName',
    width: '28%',
    key: 'assessmentName',
    slots: { title: 'assessmentName' }
  },
  {
    dataIndex: 'assessor',
    width: '28%',
    key: 'assessor',
    slots: { title: 'assessor' }
  },
  {
    dataIndex: 'assessmentTime',
    width: '28%',
    key: 'assessmentTime',
    slots: { title: 'assessmentTime' }
  },
  {
    key: 'operation',
    width: '16%',
    align: 'center',
    slots: { title: 'operation' },
    scopedSlots: { customRender: 'operation' }
  }
]

export default {
  name: 'AssessmentReportTable',
  props: {
    assessmentTableData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      columns,
      pagination: {
        // 设置每一页的数据量
        pageSize: 5
      }
    }
  },
  methods: {
    checkDetailClick (assessmentName) {
      // console.log(assessmentname)
      this.$emit('checkDetail', assessmentName)
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
