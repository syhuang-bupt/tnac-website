<template>
  <div>
    <a-table :columns="columns" :data-source="externalAssessmentData" bordered :pagination="pagination">
      <span slot="customName" class="title-style">评估报告</span>
      <span slot="customFrom" class="title-style">评估来源</span>
      <span slot="customTime" class="title-style">评估时间</span>
      <span slot="customAction" class="title-style">操作</span>
      <span slot="action" slot-scope="text, record">
        <!-- target="_blank" 这条属性是设置在新的网页打开链接-->
        <a :href="record.assessmenthref" target="_blank">查看</a>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    dataIndex: 'assessmentname',
    width: '30%',
    key: 'assessmentname',
    slots: { title: 'customName' },
    scopedSlots: { customRender: 'assessmentname' }
  },
  {
    dataIndex: 'assessmentfrom',
    width: '30%',
    key: 'assessmentfrom',
    slots: { title: 'customFrom' }
  },
  {
    dataIndex: 'assessmenttime',
    width: '30%',
    key: 'assessmenttime',
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
  name: 'ExternalAssessmentReportTable',
  props: {
    externalAssessmentData: {
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
  }
}
</script>

<style scoped>
.title-style {
    font-size: 14px;
    font-weight: bold;
}
</style>
