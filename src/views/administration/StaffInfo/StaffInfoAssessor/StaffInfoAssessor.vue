<template>
  <page-header-wrapper :title="false">
    <div class="main-content">
      <br />
      <a-button class="editable-add-btn" @click="handleAdd">添加</a-button>
      <a-table bordered :data-source="assessorInfoData" :columns="columns" class="assessor-table">
        <span slot="name" class="title-style">姓名</span>
        <span slot="sex" class="title-style">性别</span>
        <span slot="age" class="title-style">年龄</span>
        <span slot="phoneNumber" class="title-style">电话</span>
        <span slot="goodDomain" class="title-style">擅长领域</span>
        <span slot="levelStar" class="title-style">星级</span>
        <span slot="address" class="title-style">住址</span>
        <span slot="stuffInformationDetail" class="title-style">详细信息</span>
        <span slot="employeeProperty" class="title-style">员工性质</span>
        <span slot="employeeContractStart" class="title-style">合同开始时间</span>
        <span slot="employeeContractEnd" class="title-style">合同结束时间</span>
        <span slot="employeeContract" class="title-style">员工合同</span>
        <span slot="operation" class="title-style">操作</span>
        <template slot="stuffInformationDetail" slot-scope="text,record">
          <span v-if="record.stuffInformationDetail.length===0" >未录入</span>
          <div v-else v-for="(item,index) in record.stuffInformationDetail" :key="index">
            <a :href="item.link" target="_blank">{{ item.name }}</a>
          </div>
        </template>
        <template slot="employeeContract" slot-scope="text,record">
          <span v-if="record.employeeContract.length===0">未录入</span>
          <div v-else v-for="(item,index) in record.employeeContract" :key="index">
            <a :href="item.link" target="_blank">{{ item.name }}</a>
          </div>
        </template>
        <span slot="goodDomain" slot-scope="goodDomain">
          <a-tag
            v-for="tag in goodDomain"
            :key="tag"
            :color="tag === 'VB' ? 'volcano' : tag === 'ESDM' ? 'geekblue' : tag === '语言' ? 'green' : 'purple'">
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
        <span slot="levelStar" slot-scope="levelStar">
          <a-rate :value="levelStar" disabled/>
        </span>
        <template slot="operation" slot-scope="text, record">
          <a style="margin-right:12px" @click="() => editTherapistInfo(record.name)">编辑</a>
          <a-popconfirm
            v-if="assessorInfoData.length"
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
import { deleteAssessor } from 'network/deleteData.js'
import { getAllAssessorData } from 'network/getStaffOrStudentData.js'
// import { assessorInfoData } from 'someData/index.js'
export default {
  name: 'StaffInfoTherapists',
  data () {
    return {
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      assessorInfoData: [],
      columns: [
        {
          dataIndex: 'name',
          align: 'center',
          width: '12%',
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
          width: '6%',
          slots: { title: 'sex' }
        },
        {
          dataIndex: 'age',
          align: 'center',
          width: '6%',
          slots: { title: 'age' }
        },
        {
          dataIndex: 'phoneNumber',
          align: 'center',
          slots: { title: 'phoneNumber' }
        },
        {
          dataIndex: 'goodDomain',
          align: 'center',
          slots: { title: 'goodDomain' },
          scopedSlots: { customRender: 'goodDomain' }
        },
        {
          dataIndex: 'levelStar',
          align: 'center',
          slots: { title: 'levelStar' },
          scopedSlots: { customRender: 'levelStar' }
        },
        {
          dataIndex: 'address',
          align: 'center',
          ellipsis: true,
          slots: { title: 'address' }
        },
        {
          dataIndex: 'stuffInformationDetail',
          align: 'center',
          slots: { title: 'stuffInformationDetail' },
          scopedSlots: { customRender: 'stuffInformationDetail' }
        },
        {
          dataIndex: 'employeeProperty',
          align: 'center',
          slots: { title: 'employeeProperty' }
        },
        {
          dataIndex: 'employeeContractStart',
          align: 'center',
          slots: { title: 'employeeContractStart' }
        },
        {
          dataIndex: 'employeeContractEnd',
          align: 'center',
          slots: { title: 'employeeContractEnd' }
        },
        {
          dataIndex: 'employeeContract',
          align: 'center',
          slots: { title: 'employeeContract' },
          scopedSlots: { customRender: 'employeeContract' }
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
    this.getAllAssessorData()
  },
  methods: {
    getAllAssessorData () {
      getAllAssessorData().then(res => {
        console.log(res)
        this.assessorInfoData = res
      })
    },
    deleteAssessor (values) {
      console.log(values)
      deleteAssessor(values).then(res => {
        console.log(res)
        if (res) {
          const assessorInfoData = [...this.assessorInfoData]
          this.assessorInfoData = assessorInfoData.filter(item => item.name !== values)
        } else {
          this.$message.warning('该评估师有评估尚未完成，请完成后再删除！')
        }
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
      this.deleteAssessor(name)
    },
    editTherapistInfo (name) {
      this.$router.push('/administration/stuffmanage/stuffinfo/assessor/edit/' + name)
    },
    handleAdd () {
      this.$router.push('/administration/stuffmanage/stuffinfo/assessor/add')
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
.assessor-table {
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
