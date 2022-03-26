<template>
  <page-header-wrapper :title="false">
    <div class="main-content">
      <br />
      <a-button class="editable-add-btn" @click="handleAdd">添加</a-button>
      <a-table bordered :data-source="BusinessEvaluationData" :columns="columns" class="stu-table">
        <span slot="name" class="title-style">姓名</span>
        <span slot="sex" class="title-style">性别</span>
        <span slot="age" class="title-style">年龄</span>
        <span slot="guardianName" class="title-style">监护人</span>
        <span slot="guardianPhone" class="title-style">监护人电话</span>
        <span slot="address" class="title-style">住址</span>
        <span slot="operation" class="title-style">操作</span>
        <template slot="operation" slot-scope="text, record">
          <a style="margin-right:12px" @click="() => editAdmittedStudentInfo(record.name)">编辑</a>
          <a-popconfirm
            v-if="BusinessEvaluationData.length"
            title="确定删除吗?"
            @confirm="() => onDelete(record.name)">
            <a href="javascript:;">删除</a>
          </a-popconfirm>
        </template>
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
    </div>
  </page-header-wrapper>
</template>
<script>
import { deleteBusinessEvaluationStudent } from 'network/deleteData.js'
import { getAllBusinessEvaluation } from 'network/getStaffOrStudentData.js'
// import { BusinessEvaluationData } from 'someData/index.js'
export default {
  components: {

  },
  data () {
    return {
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      BusinessEvaluationData: [],
      columns: [
        {
          dataIndex: 'name',
          align: 'center',
          width: '18%',
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
          width: '8%',
          slots: { title: 'sex' }
        },
        {
          dataIndex: 'age',
          align: 'center',
          width: '8%',
          slots: { title: 'age' }
        },
        {
          dataIndex: 'guardianName',
          align: 'center',
          width: '10%',
          slots: { title: 'guardianName' }
        },
        {
          dataIndex: 'guardianPhone',
          align: 'center',
          width: '12%',
          slots: { title: 'guardianPhone' }
        },
        {
          dataIndex: 'address',
          align: 'center',
          width: '22%',
          ellipsis: true,
          slots: { title: 'address' }
        },
        {
          dataIndex: 'operation',
          align: 'center',
          width: '10%',
          slots: { title: 'operation' },
          scopedSlots: { customRender: 'operation' }
        }
      ]
    }
  },
  created () {
    this.getAllBusinessEvaluation()
  },
  methods: {
    getAllBusinessEvaluation () {
      getAllBusinessEvaluation().then(res => {
        console.log(res)
        this.BusinessEvaluationData = res
      })
    },
    deleteBusinessEvaluationStudent (values) {
      console.log(values)
      deleteBusinessEvaluationStudent(values).then(res => {
        console.log(res)
      })
    },
    handleSearch (selectedKeys, confirm, dataIndex) {
      confirm()
      this.searchText = selectedKeys[0]
      this.searchedColumn = dataIndex
    },
    handleReset (clearFilters) {
      clearFilters()
      this.searchText = ''
    },
    onDelete (name) {
      this.deleteBusinessEvaluationStudent(name)
      const BusinessEvaluationData = [...this.BusinessEvaluationData]
      this.BusinessEvaluationData = BusinessEvaluationData.filter(item => item.name !== name)
    },
    editAdmittedStudentInfo (name) {
      console.log(name)
      this.$router.push('/administration/studentmanage/studentinfo/business/edit/' + name)
    },
    handleAdd () {
      this.$router.push('/administration/studentmanage/studentinfo/business/add')
      const { BusinessEvaluationData } = this
      const count = this.BusinessEvaluationData.length
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: 32,
        address: `London, Park Lane no. ${count}`
      }
      this.BusinessEvaluationData = [...BusinessEvaluationData, newData]
      this.count = count + 1
    }
  }
}
</script>
<style scoped>
.editable-add-btn {
  margin-bottom: 8px;
  margin-left: 16px;
  margin-right: 16px;
}
.main-content {
  min-height: 600px;
  background-color: white;
}
.stu-table {
  margin-left: 16px;
  margin-right: 16px;
}
.title-style {
    font-size: 14px;
    font-weight: bold;
}
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
