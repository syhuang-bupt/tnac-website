<template>
  <a-table
    :columns="columns"
    :data-source="studentData"
    :customRow="tableRowClick"
    :pagination="pagination">
    <span slot="assessmentreport" slot-scope="assessmentreport"><a-badge :color="assessmentreport?'green':'red'"/>{{ assessmentreport?'已完成':'未完成' }}</span>
    <span slot="IEPplan" slot-scope="IEPplan"><a-badge :color="IEPplan?'green':'red'"/>{{ IEPplan?'已完成':'未完成' }}</span>
  </a-table>
</template>
<script>
export default {
  name: 'EnrolledAvatarTableTherapists',
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
          width: '20%',
          scopedSlots: {
            customRender: 'customRender'
          }
        },
        {
          title: '评估报告',
          dataIndex: 'assessmentreport',
          width: '50%',
          align: 'center',
          scopedSlots: { customRender: 'assessmentreport' }
        },
        {
          title: '生成IEP干预计划',
          dataIndex: 'IEPplan',
          width: '30%',
          align: 'center',
          scopedSlots: { customRender: 'IEPplan' }
        }
      ]
    }
  },
  methods: {
    tableRowClick (record, index) {
      return {
        on: {
          click: () => {
            this.$router.push('/assessor/studentinfo/detail/' + record.name)
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
