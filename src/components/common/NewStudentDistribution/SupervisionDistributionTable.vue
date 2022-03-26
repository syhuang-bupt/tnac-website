<template>
  <a-table :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange, type: 'radio' }" :columns="columns" :data-source="data" :pagination="pagination">
    <span slot="studentnum" slot-scope="studentnum"><a-badge :color="studentnum<=20?'green':'red'"/>{{ studentnum }}</span>
  </a-table>
</template>

<script>
import { getSupervisionData } from 'network/getSupOrTherOrAsseData.js'
const columns = [
  {
    title: '督导',
    dataIndex: 'name'
  },
  {
    title: '负责学生数',
    dataIndex: 'studentnum',
    scopedSlots: { customRender: 'studentnum' }
  }
]

export default {
  name: 'SupervisionDistributionTable',
  props: {
    defaultSupervision: {
      type: String,
      default () {
        return ''
      }
    }
  },
  watch: {
    'defaultSupervision': function (val) {
      this.selectedSupervision = val
      console.log(this.selectedSupervision)
      // console.log(this.data.find(item => item.name === this.selectedSupervision))
    }
  },
  data () {
    return {
      data: [],
      columns,
      selectedSupervision: '',
      selectedRowKeys: [], // Check here to configure the default column
      pagination: {
        // 设置每一页的数据量
        pageSize: 8
      }
    }
  },
  computed: {
  },
  created () {
    this.getSupervisionData()
    // this.selectedRowKeys[0] = this.data.filter(item => item.name === this.selectedSupervision)[0]
  },
  methods: {
    getSupervisionData () {
      getSupervisionData().then(res => {
        console.log(res)
        this.data = res
        this.selectedRowKeys[0] = this.data.filter(item => item.name === this.selectedSupervision)[0].key
      })
    },
    onSelectChange (selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedSupervision = this.data.filter(item => item.key === selectedRowKeys[0])[0].name
      this.$emit('selectedChange', this.selectedSupervision)
    }
  }
}
</script>
