<template>
  <!-- 目前这张表存在以下问题：
    1.当修改A督导为已有学生的督导B时，需要进行判断B是否满员。
    2.目前只支持修改督导，学生不支持修改。 -->
  <a-table
    :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
    :columns="columns"
    :data-source="currentSupervisionData"
    bordered>
    <template
      v-for="col in ['name']"
      :slot="col"
      slot-scope="text, record"
    >
      <div :key="col">
        <a-select
          show-search
          placeholder="选择督导"
          option-filter-prop="children"
          :filter-option="filterOption"
          v-if="record.editable"
          :value="text"
          style="width: 200px"
          @change="value => handleChange(value, record.key, col)"
        >
          <a-select-option v-for="(item,index) in allSupervision" :value="item" :key="index">
            {{ item }}
          </a-select-option>
        </a-select>
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>
    <template slot="students" slot-scope="students">
      <span v-for="(item,index) in students" :key="index">{{ item+"，" }}</span>
    </template>
    <template slot="operation" slot-scope="text, record">
      <div class="editable-row-operations">
        <span v-if="record.editable">
          <a @click="() => save(record.key)">保存</a>
          <a-popconfirm title="确认取消?" @confirm="() => cancel(record.key)">
            <a>取消</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a :disabled="editingKey !== ''" @click="() => edit(record.key)">编辑</a>
        </span>
      </div>
    </template>
    <span slot="studentnum" slot-scope="studentnum"><a-badge :color="studentnum>=5?'red':'green'"/>{{ studentnum }}</span>
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
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.studentnum - b.studentnum,
    scopedSlots: { customRender: 'studentnum' }
  },
  {
    title: '负责学生',
    width: '50%',
    align: 'center',
    dataIndex: 'students',
    scopedSlots: { customRender: 'students' }
  },
  {
    title: '操作',
    width: '15%',
    align: 'center',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
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
    },
    allSupervision: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    this.cacheData = this.supervisionData.map(item => ({ ...item }))
    return {
      columns,
      editingKey: '',
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
      this.$emit('selectedSupervisionChange', selectedRowKeys)
    },
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )
    },
    handleChange (value, key, column) {
      const newData = [...this.currentSupervisionData]
      const target = newData.filter(item => key === item.key)[0]
      // target是对象类型的数据，if判断它是否为undefine
      if (target) {
        target[column] = value
        this.currentSupervisionData = newData
      }
    },
    edit (key) {
      const newData = [...this.currentSupervisionData]
      const target = newData.filter(item => key === item.key)[0]
      this.editingKey = key
      if (target) {
        target.editable = true
        this.currentSupervisionData = newData
      }
    },
    save (key) {
      const newData = [...this.currentSupervisionData]
      const newCacheData = [...this.cacheData]
      const target = newData.filter(item => key === item.key)[0]
      const targetCache = newCacheData.filter(item => key === item.key)[0]
      if (target && targetCache) {
        delete target.editable
        this.currentSupervisionData = newData
        Object.assign(targetCache, target)
        this.cacheData = newCacheData
      }
      this.editingKey = ''
    },
    cancel (key) {
      const newData = [...this.currentSupervisionData]
      const target = newData.filter(item => key === item.key)[0]
      this.editingKey = ''
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
        delete target.editable
        this.currentSupervisionData = newData
      }
    }
  }
}
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
