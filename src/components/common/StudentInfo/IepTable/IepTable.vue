<template>
  <div>
    <a-table :columns="columns" :data-source="iepTableData" bordered :pagination="pagination">
      <span slot="IEPName" class="title-style">评估报告</span>
      <span slot="assessor" class="title-style">评估师</span>
      <span slot="IEPTime" class="title-style">评估时间</span>
      <span slot="operation" class="title-style">操作</span>
      <span slot="operation" slot-scope="action,record">
        <!-- 暂时传一个评估名字，后期可能需要更改 -->
        <a @click="checkDetailClick(record.IEPName)" v-if="record.edit && record.excute">查看</a>
        <span v-else>IEP未完成</span>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    dataIndex: 'IEPName',
    width: '28%',
    key: 'IEPName',
    slots: { title: 'IEPName' }
  },
  {
    dataIndex: 'assessor',
    width: '28%',
    key: 'assessor',
    slots: { title: 'assessor' }
  },
  {
    dataIndex: 'IEPTime',
    width: '28%',
    key: 'IEPTime',
    slots: { title: 'IEPTime' }
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
    iepTableData: {
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
    checkDetailClick (IEPName) {
      // console.log(assessmentname)
      this.$emit('checkDetail', IEPName)
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
