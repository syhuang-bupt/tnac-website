<template>
  <div>
    <a-alert
      :closable="true"
      message="确认发送后，通知将通过短信发送到通知对象，无法撤回。"
      style="margin-bottom: 24px;"/>
    <a-table :row-selection="rowSelection" :columns="columns" :data-source="enrolledStudentData" bordered>
      <span slot="name" class="title-style">姓名</span>
      <span slot="sex" class="title-style">性别</span>
      <span slot="age" class="title-style">年龄</span>
      <span slot="role" class="title-style">角色</span>
      <span slot="phone" class="title-style">电话</span>
      <span slot="address" class="title-style">住址</span>
      <div
        slot="filterDropdown"
        slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
        style="padding: 8px">
        <a-input
          v-ant-ref="c => (searchInput = c)"
          :placeholder="`搜索姓名`"
          :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block;"
          @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
          @pressEnter="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
        />
        <a-button
          type="primary"
          icon="search"
          size="small"
          style="width: 90px; margin-right: 8px"
          @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
        >
          搜索
        </a-button>
        <a-button size="small" style="width: 90px" @click="() => handleReset(clearFilters)">
          重置
        </a-button>
      </div>
      <a-icon
        slot="filterIcon"
        slot-scope="filtered"
        type="search"
        :style="{ color: filtered ? '#108ee9' : undefined }"
      />
      <template slot="customRender" slot-scope="text, record, index, column">
        <span v-if="searchText && searchedColumn === column.dataIndex">
          <template
            v-for="(fragment, i) in text
              .toString()
              .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
          >
            <mark
              v-if="fragment.toLowerCase() === searchText.toLowerCase()"
              :key="i"
              class="highlight">{{ fragment }}</mark>
            <template v-else>{{ fragment }}</template>
          </template>
        </span>
        <template v-else>
          {{ text }}
        </template>
      </template>
    </a-table>
    <div style="text-align:center">
      <a-button type="primary" @click="prevStep" style="margin-right:8px">
        上一步
      </a-button>
      <a-button type="danger" @click="submitNotice">
        发送
      </a-button>
    </div>
  </div>
</template>

<script>
const columns = [
        {
          dataIndex: 'name',
          width: '18%',
          align: 'center',
          slots: { title: 'name' },
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender'
          },
          onFilter: (value, record) =>
            record.name
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus()
              }, 0)
            }
          }
        },
        {
          dataIndex: 'sex',
          align: 'center',
          width: '10%',
          slots: { title: 'sex' }
        },
        {
          dataIndex: 'age',
          align: 'center',
          width: '10%',
          slots: { title: 'age' }
        },
        {
          dataIndex: 'role',
          align: 'center',
          width: '10%',
          slots: { title: 'role' }
        },
        {
          dataIndex: 'phone',
          align: 'center',
          width: '12%',
          slots: { title: 'phone' }
        },
        {
          dataIndex: 'address',
          align: 'center',
          width: '35%',
          slots: { title: 'address' }
        }
      ]
export default {
  props: {
    enrolledStudentData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      columns,
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      selectedRowKeys: [] // Check here to configure the default column
    }
  },
  computed: {
    rowSelection () {
      const { selectedRowKeys } = this
      return {
        selectedRowKeys,
        onChange: this.onSelectChange,
        hideDefaultSelections: true,
        selections: [
          {
            key: 'director',
            text: '选择教导主任',
            onSelect: changableRowKeys => {
              let newSelectedRowKeys = []
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (this.enrolledStudentData[index].role !== '教导主任') {
                  return false
                }
                return true
              })
              this.onSelectChange(newSelectedRowKeys)
            }
          },
          {
            key: 'supervision',
            text: '选择督导',
            onSelect: changableRowKeys => {
              let newSelectedRowKeys = []
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (this.enrolledStudentData[index].role !== '督导') {
                  return false
                }
                return true
              })
              this.onSelectChange(newSelectedRowKeys)
            }
          },
          {
            key: 'supervision',
            text: '选择康复师',
            onSelect: changableRowKeys => {
              let newSelectedRowKeys = []
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (this.enrolledStudentData[index].role !== '康复师') {
                  return false
                }
                return true
              })
              this.onSelectChange(newSelectedRowKeys)
            }
          },
          {
            key: 'supervision',
            text: '选择评估师',
            onSelect: changableRowKeys => {
              let newSelectedRowKeys = []
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (this.enrolledStudentData[index].role !== '评估师') {
                  return false
                }
                return true
              })
              this.onSelectChange(newSelectedRowKeys)
            }
          },
          {
            key: 'supervision',
            text: '选择其他人员',
            onSelect: changableRowKeys => {
              let newSelectedRowKeys = []
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (this.enrolledStudentData[index].role !== '其他人员') {
                  return false
                }
                return true
              })
              this.onSelectChange(newSelectedRowKeys)
            }
          }
        ],
        onSelection: this.onSelection
      }
    }
  },
  methods: {
    onSelectChange (selectedRowKeys) {
      // console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },
    submitNotice () {
      this.$emit('submitNoticeOk', this.selectedRowKeys)
    },
    prevStep () {
      this.$emit('prevStep')
    },
    handleSearch (selectedKeys, confirm, dataIndex) {
      confirm()
      this.searchText = selectedKeys[0]
      this.searchedColumn = dataIndex
    },
    handleReset (clearFilters) {
      clearFilters()
      this.searchText = ''
    }
  }
}
</script>
<style scoped>
.main-content {
  min-height: 600px;
  background-color: white;
  padding: 16px;
}
.title-style {
    font-size: 14px;
    font-weight: bold;
}
</style>
