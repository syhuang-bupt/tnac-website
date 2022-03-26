<template>
  <!-- 目前这张表存在以下问题：
    1.当修改A督导为已有学生的督导B时，需要进行判断B是否满员。
    2.目前只支持修改督导，学生不支持修改。 -->
  <a-table
    :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
    :columns="columns"
    :data-source="currentSupervisionData"
    bordered>
    <template slot="students" slot-scope="students">
      <span v-for="(item,index) in students" :key="index">{{ item + '\u00a0' + '\u00a0' }}</span>
    </template>
    <span slot="studentnum" slot-scope="studentnum"><a-badge :color="studentnum>=20?'red':'green'"/>{{ studentnum }}</span>
  </a-table>
</template>
<script>
const columns = [
  {
    title: '名字',
    dataIndex: 'name',
    width: '20%',
    align: 'center',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '已负责学生',
    dataIndex: 'studentnum',
    width: '15%',
    align: 'center',
    scopedSlots: { customRender: 'studentnum' }
  },
  {
    title: '负责学生',
    width: '60%',
    align: 'center',
    dataIndex: 'students',
    scopedSlots: { customRender: 'students' }
  }
]

export default {
  name: 'SupervisionInfoTable',
  props: {
    supervisionData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      columns,
      selectedRowKeys: [],
      currentSupervisionData: this.supervisionData
    }
  },
  watch: {
    'supervisionData': function (val) {
      this.currentSupervisionData = val
    }
  },
  methods: {
    onSelectChange (selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
      console.log(selectedRowKeys)
      this.$emit('selectedSupervisionChange', selectedRowKeys)
    }
  }
}
</script>
<style scoped>
</style>
