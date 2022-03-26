<template>
  <a-table
    :columns="columns"
    :data-source="studentData"
    :customRow="tableRowClick"
    :pagination="pagination">
    <span slot="enterscore" slot-scope="enterscore"><a-badge :color="enterscore?'green':'red'"/>{{ enterscore?'已完成':'未完成' }}</span>
    <span slot="absent" slot-scope="absent"><a-badge :color="absent?'green':'red'"/>{{ absent?'出勤':'请假' }}</span>
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
          width: '10%',
          align: 'center',
          scopedSlots: {
            customRender: 'customRender'
          }
        },
        {
          title: '数据录入',
          dataIndex: 'enterscore',
          width: '70%',
          align: 'center',
          scopedSlots: { customRender: 'enterscore' }
        },
        {
          title: '出勤',
          dataIndex: 'absent',
          width: '20%',
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
            this.$router.push('/therapists/studentinfo/detail/' + record.name)
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
