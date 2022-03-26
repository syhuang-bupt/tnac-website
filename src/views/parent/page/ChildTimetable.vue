<template>
  <div class="main-content-style">
    <a-table bordered :data-source="courseData" :columns="columns">
      <template slot="therapist" slot-scope="text, record">
        <span>{{ record.therapist }}</span>
        <span>{{ (record.assistantTeacher !== '' && record.assistantTeacher) ? '（' + record.assistantTeacher + '）' : '' }}</span>
      </template>
    </a-table>
  </div>
</template>

<script>
import { courseData } from 'someData/index.js'
export default {
  name: 'ChildTimetable',
  data () {
    return {
      count: 0,
      courseData,
      columns: [
        {
          title: '开始时间',
          dataIndex: 'startTime',
          align: 'center',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.startTime < b.startTime ? 1 : -1
        },
        {
          title: '课程类型',
          dataIndex: 'courseType',
          width: '30%',
          align: 'center',
          scopedSlots: { customRender: 'courseType' }
        },
        {
          title: '康复师',
          dataIndex: 'therapist',
          align: 'center',
          scopedSlots: { customRender: 'therapist' }
        }
      ]
    }
  }
}
</script>
