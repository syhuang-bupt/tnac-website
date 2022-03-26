<template>
  <a-table :columns="columns" :data-source="tableData" bordered :pagination="pagination">
    <span slot="field" class="title-style">领域</span>
    <span slot="task" class="title-style">任务</span>
    <span slot="taskObjectives" class="title-style">任务目标</span>
    <span slot="startTime" class="title-style">开始时间</span>
    <span slot="therapist" class="title-style">康复师</span>
    <span slot="planCategory" class="title-style">计划类别</span>
    <span slot="duration" class="title-style">课程时间</span>
    <template slot="duration" slot-scope="text, record">
      <span>{{ record.duration[0] + '至' + record.duration[1] }}</span>
    </template>
  </a-table>
</template>
<script>
import { getMaintain } from 'network/getMaintain.js'
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
    dataIndex: 'therapist',
    key: 'therapist',
    align: 'center',
    slots: { title: 'therapist' }
  },
  {
    dataIndex: 'planCategory',
    key: 'planCategory',
    align: 'center',
    slots: { title: 'planCategory' }
  },
  {
    dataIndex: 'duration',
    key: 'duration',
    align: 'center',
    slots: { title: 'duration' },
    scopedSlots: { customRender: 'duration' }
  }
]
export default {
  name: 'SupervisionGexunMaintain',
  data () {
    return {
      columns,
      nameid: '',
      tableData: [],
      getInfoKey: {},
      pagination: {
        // 设置每一页的数据量
        pageSize: 10
      }
    }
  },
  created () {
    this.nameid = this.$route.params.nameid
    this.getInfoKey.name = this.nameid
    this.getInfoKey.courseType = '个训'
    this.getMaintain(this.getInfoKey)
  },
  methods: {
    getMaintain (values) {
      console.log(values)
      getMaintain(values).then(res => {
        console.log(res)
        this.tableData = res
      })
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
