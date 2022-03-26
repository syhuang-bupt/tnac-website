<template>
  <div class="table-content">
    <a-table :columns="columns" :data-source="resultData" bordered :pagination="pagination">
      <span slot="field" class="title-style">任务类型</span>
      <span slot="task" class="title-style">任务</span>
      <span slot="taskObjectives" class="title-style">任务目标</span>
      <span slot="startTime" class="title-style">开始时间</span>
      <span slot="totalTimes" class="title-style">总次数</span>
      <span slot="noAssistanceTimes" class="title-style">无辅助次数</span>
      <span slot="noAssistanceCorrectTimes" class="title-style">无辅助正确次数</span>
      <span slot="correctRate" class="title-style">正确率</span>
      <template slot="correctRate" slot-scope="correctRate">
        <a>{{ correctRate + '%' }}</a>
      </template>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: 'field',
    key: 'field',
    align: 'center',
    slots: { title: 'field' }
  },
  {
    dataIndex: 'task',
    key: 'task',
    align: 'center',
    slots: { title: 'task' }
  },
  {
    dataIndex: 'taskObjectives',
    key: 'taskObjectives',
    align: 'center',
    slots: { title: 'taskObjectives' }
  },
  {
    dataIndex: 'startTime',
    key: 'startTime',
    align: 'center',
    slots: { title: 'startTime' }
  },
  {
    dataIndex: 'totalTimes',
    key: 'totalTimes',
    align: 'center',
    slots: { title: 'totalTimes' }
  },
  {
    dataIndex: 'noAssistanceTimes',
    key: 'noAssistanceTimes',
    align: 'center',
    slots: { title: 'noAssistanceTimes' }
  },
  {
    dataIndex: 'noAssistanceCorrectTimes',
    key: 'noAssistanceCorrectTimes',
    align: 'center',
    slots: { title: 'noAssistanceCorrectTimes' }
  },
  {
    dataIndex: 'correctRate',
    key: 'correctRate',
    align: 'center',
    slots: { title: 'correctRate' },
    scopedSlots: { customRender: 'correctRate' }
  }
]

export default {
  name: 'SupervisionGexunDailyPlan',
  props: {
    resultData: {
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
        pageSize: 10
      }
    }
  }
}
</script>

<style scoped>
.table-content {
  text-align: center;
}
.title-style {
  font-size: 14px;
  font-weight: bold;
}
.btn-add {
  margin:0 auto
}
</style>
