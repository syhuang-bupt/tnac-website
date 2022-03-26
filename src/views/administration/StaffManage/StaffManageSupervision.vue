<template>
  <page-header-wrapper :title="false" >
    <div class="main-content">
      <br />
      <attendance-state-model :visible="isModelVisible" :whoData="whoData" @closeModel="closeModel"/>
      <a-table :data-source="supervisionManageData" :columns="columns" class="stu-table" bordered>
        <span slot="name" class="title-style">姓名</span>
        <span slot="sex" class="title-style">性别</span>
        <span slot="age" class="title-style">年龄</span>
        <span slot="phoneNumber" class="title-style">电话</span>
        <span slot="attendanceState" class="title-style">出勤状态</span>
        <span slot="attendanceData" class="title-style">出勤数据</span>
        <span slot="attendanceState" slot-scope="attendanceState,record">
          <a-switch
            checked-children="出勤"
            un-checked-children="缺席"
            :defaultChecked="attendanceState"
            @change="attendanceStateChange(record.key)"/>
        </span>
        <span slot="attendanceData" slot-scope="attendanceData,record"><a @click="() => checkAttendanceData(record.name)">查看</a></span>
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
import { getSupervisionDailyManage } from 'network/getStaffOrStudentData.js'
import AttendanceStateModel from '@/components/common/Model/AttendanceStateModel'
// import { supervisionManageData } from 'someData/index.js'
export default {
  name: 'StaffManageSupervision',
  components: {
    AttendanceStateModel
  },
  data () {
    return {
      supervisionManageData: [],
      whoData: '',
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      isModelVisible: false,
      columns: [
        {
          dataIndex: 'name',
          key: 'name',
          align: 'center',
          width: '20%',
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
          key: 'sex',
          align: 'center',
          width: '16%',
          slots: { title: 'sex' }
        },
        {
          dataIndex: 'age',
          key: 'age',
          align: 'center',
          width: '16%',
          slots: { title: 'age' }
        },
        {
          dataIndex: 'phoneNumber',
          key: 'phoneNumber',
          align: 'center',
          width: '24%',
          slots: { title: 'phoneNumber' }
        },
        {
          dataIndex: 'attendanceState',
          key: 'attendanceState',
          align: 'center',
          width: '12%',
          slots: { title: 'attendanceState' },
          scopedSlots: { customRender: 'attendanceState' }
        },
        {
          dataIndex: 'attendanceData',
          key: 'attendanceData',
          align: 'center',
          width: '12%',
          slots: { title: 'attendanceData' },
          scopedSlots: { customRender: 'attendanceData' }
        }
      ]
    }
  },
  created () {
    this.getStaffDailyManage()
  },
  methods: {
    getStaffDailyManage () {
      getSupervisionDailyManage().then(res => {
        console.log(res)
        this.supervisionManageData = res
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
    checkAttendanceData (name) {
      console.log('我要查看出勤数据')
      this.whoData = name
      this.isModelVisible = true
    },
    closeModel () {
      this.isModelVisible = false
    },
    attendanceStateChange (key) {
      this.supervisionManageData[key].attendanceState = !this.supervisionManageData[key].attendanceState
    }
  }
}
</script>
<style scoped>
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
