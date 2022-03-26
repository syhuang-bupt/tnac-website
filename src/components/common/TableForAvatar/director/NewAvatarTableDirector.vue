<template>
  <a-table
    :columns="columns"
    :data-source="studentData"
    :customRow="tableRowClick"
    :pagination="pagination">
    <span slot="supervisionDistribution" slot-scope="supervisionDistribution"><a-badge :color="supervisionDistribution?'green':'red'"/>{{ supervisionDistribution?'已完成':'未完成' }}</span>
    <span slot="classDistribution" slot-scope="classDistribution"><a-badge :color="classDistribution?'green':'red'"/>{{ classDistribution?'已完成':'未完成' }}</span>
    <span slot="assessmentDistribution" slot-scope="assessmentDistribution"><a-badge :color="assessmentDistribution?'green':'red'"/>{{ assessmentDistribution?'已完成':'未完成' }}</span>
    <span slot="courseArrangement" slot-scope="courseArrangement"><a-badge :color="courseArrangement?'green':'red'"/>{{ courseArrangement?'已完成':'未完成' }}</span>
  </a-table>
</template>
<script>
export default {
  name: 'NewAvatarTableDirector',
  props: {
    studentData: {
        type: Array,
        default () {
            return []
        }
    }
  },
  data () {
    return {
      pagination: {
        // 设置每一页的数据量
        pageSize: 8
      },
      columns: [
        {
          title: '名字',
          dataIndex: 'name',
          align: 'center',
          scopedSlots: {
            customRender: 'customRender'
          }
        },
        {
          title: '督导分配',
          dataIndex: 'supervisionDistribution',
          align: 'center',
          scopedSlots: { customRender: 'supervisionDistribution' }
        },
        {
          title: '班级分配',
          dataIndex: 'classDistribution',
          align: 'center',
          scopedSlots: { customRender: 'classDistribution' }
        },
        {
          title: '评估分配',
          dataIndex: 'assessmentDistribution',
          align: 'center',
          scopedSlots: { customRender: 'assessmentDistribution' }
        },
        {
          title: '课程安排',
          dataIndex: 'courseArrangement',
          align: 'center',
          scopedSlots: { customRender: 'courseArrangement' }
        }
      ]
    }
  },
  methods: {
    tableRowClick (record, index) {
      return {
        on: {
          click: () => {
            this.$router.push('/director/freshmenmanage/assigned/distribution/' + record.name)
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
