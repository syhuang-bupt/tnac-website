<template>
  <a-table
    :columns="columns"
    :data-source="studentData"
    :customRow="tableRowClick"
    :pagination="pagination">
    <span slot="assessmentstatus" slot-scope="assessmentstatus"><a-badge :color="assessmentstatus?'green':'red'"/>{{ assessmentstatus?'已完成':'未完成' }}</span>
    <span slot="IEPstatus" slot-scope="IEPstatus"><a-badge :color="IEPstatus?'green':'red'"/>{{ IEPstatus?'已完成':'未完成' }}</span>
    <span slot="treatmentplan" slot-scope="treatmentplan"><a-badge :color="treatmentplan?'green':'red'"/>{{ treatmentplan?'已完成':'未完成' }}</span>
    <span slot="enterscore" slot-scope="enterscore"><a-badge :color="enterscore?'green':'red'"/>{{ enterscore?'已完成':'未完成' }}</span>
    <span slot="absent" slot-scope="absent"><a-badge :color="absent?'green':'red'"/>{{ absent?'出勤':'请假' }}</span>
  </a-table>
</template>
<script>
export default {
  name: 'EnrolledAvatarTableSupervision',
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
          title: '评估状态',
          dataIndex: 'assessmentstatus',
          align: 'center',
          scopedSlots: { customRender: 'assessmentstatus' }
        },
        {
          title: '生成可执行IEP',
          dataIndex: 'IEPstatus',
          align: 'center',
          scopedSlots: { customRender: 'IEPstatus' }
        },
        {
          title: '康复计划',
          dataIndex: 'treatmentplan',
          align: 'center',
          scopedSlots: { customRender: 'treatmentplan' }
        },
        {
          title: '数据录入',
          dataIndex: 'enterscore',
          align: 'center',
          scopedSlots: { customRender: 'enterscore' }
        },
        {
          title: '出勤',
          dataIndex: 'absent',
          align: 'center',
          scopedSlots: { customRender: 'absent' }
        }
      ]
    }
  },
  methods: {
    tableRowClick (record, index) {
      return {
        on: {
          click: () => {
            this.$router.push('/supervision/studentinfo/detail/' + record.name)
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
