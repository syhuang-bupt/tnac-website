<template>
  <a-table :columns="columns" :data-source="planDetail" bordered :pagination="pagination">
    <span slot="field" class="title-style">任务类型</span>
    <span slot="task" class="title-style">任务</span>
    <span slot="taskObjectives" class="title-style">任务目标</span>
    <span slot="planCategory" class="title-style">计划类别</span>
    <span slot="startTime" class="title-style">开始时间</span>
    <span slot="therapist" class="title-style">康复师</span>
  </a-table>
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
    dataIndex: 'planCategory',
    key: 'planCategory',
    align: 'center',
    slots: { title: 'planCategory' }
  },
  {
    dataIndex: 'startTime',
    key: 'startTime',
    align: 'center',
    slots: { title: 'startTime' }
  },
  {
    dataIndex: 'therapist',
    key: 'therapist',
    align: 'center',
    slots: { title: 'therapist' }
  }
]

export default {
  name: 'DirectorGexunDailyPlan',
  props: {
    planDetail: {
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
.title-style {
    font-size: 14px;
    font-weight: bold;
}
</style>
