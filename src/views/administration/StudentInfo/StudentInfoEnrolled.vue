<template>
  <page-header-wrapper :title="false">
    <div class="main-content">
      <br />
      <a-modal
        title="离校去向"
        :visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <a-radio-group v-model="leftValue" style="margin-left:20px" @change="onChange">
          <a-radio :value="'融合进入学校'">
            融合进入学校
          </a-radio>
          <a-radio :value="'离开学校'" style="margin-left:50px">
            离开学校
          </a-radio>
        </a-radio-group>
      </a-modal>
      <a-button class="editable-add-btn" @click="handleAdd">添加</a-button>
      <a-table bordered :data-source="administrationStudentInfoEnrolled" :columns="columns" class="stu-table">
        <span slot="name" class="title-style">姓名</span>
        <span slot="sex" class="title-style">性别</span>
        <span slot="age" class="title-style">年龄</span>
        <span slot="guardianName" class="title-style">监护人</span>
        <span slot="guardianPhone" class="title-style">监护人电话</span>
        <span slot="address" class="title-style">住址</span>
        <span slot="studentInformation" class="title-style">详细信息</span>
        <span slot="serviceAgreement" class="title-style">服务协议</span>
        <span slot="informedConsent" class="title-style">知情同意书</span>
        <span slot="payEffectiveDate" class="title-style">缴费情况</span>
        <span slot="operation" class="title-style">操作</span>
        <span slot="payEffectiveDate" slot-scope="payEffectiveDate"><a-badge :color="payEffectiveDate==='未缴费'?'red':'green'"/>{{ payEffectiveDate }}</span>
        <template slot="studentInformation" slot-scope="text,record">
          <span v-if="record.studentInformation.length===0">未录入</span>
          <div v-else v-for="(item,index) in record.studentInformation" :key="index">
            <a :href="item.link" target="_blank">{{ item.name }}</a>
          </div>
        </template>
        <template slot="serviceAgreement" slot-scope="text,record">
          <span v-if="record.serviceAgreement.length===0">未录入</span>
          <div v-else v-for="(item,index) in record.serviceAgreement" :key="index">
            <a :href="item.link" target="_blank">{{ item.name }}</a>
          </div>
        </template>
        <template slot="informedConsent" slot-scope="text,record">
          <span v-if="record.informedConsent.length===0">未录入</span>
          <div v-else v-for="(item,index) in record.informedConsent" :key="index">
            <a :href="item.link" target="_blank">{{ item.name }}</a>
          </div>
        </template>
        <template slot="operation" slot-scope="text, record">
          <a style="margin-right:12px" @click="() => editEnrolledStudentInfo(record.name)">编辑</a>
          <a @click="showModal(record.name)">离校</a>
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
import { deleteEnrolledStudent } from 'network/deleteData.js'
import { getAllStudentInfoEnrolled } from 'network/getStaffOrStudentData.js'
// import { administrationStudentInfoEnrolled } from 'someData/index.js'
export default {
  data () {
    return {
      visible: false,
      editName: '',
      leftValue: '',
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      administrationStudentInfoEnrolled: [],
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
          dataIndex: 'guardianName',
          align: 'center',
          width: '7%',
          slots: { title: 'guardianName' }
        },
        {
          dataIndex: 'guardianPhone',
          align: 'center',
          width: '10%',
          slots: { title: 'guardianPhone' }
        },
        {
          dataIndex: 'address',
          align: 'center',
          ellipsis: true,
          slots: { title: 'address' }
        },
        {
          dataIndex: 'studentInformation',
          align: 'center',
          slots: { title: 'studentInformation' },
          scopedSlots: { customRender: 'studentInformation' }
        },
        {
          dataIndex: 'serviceAgreement',
          align: 'center',
          slots: { title: 'serviceAgreement' },
          scopedSlots: { customRender: 'serviceAgreement' }
        },
        {
          dataIndex: 'informedConsent',
          align: 'center',
          slots: { title: 'informedConsent' },
          scopedSlots: { customRender: 'informedConsent' }
        },
        {
          dataIndex: 'payEffectiveDate',
          align: 'center',
          slots: { title: 'payEffectiveDate' },
          scopedSlots: { customRender: 'payEffectiveDate' }
        },
        {
          dataIndex: 'operation',
          align: 'center',
          width: '9%',
          slots: { title: 'operation' },
          scopedSlots: { customRender: 'operation' }
        }
      ]
    }
  },
  created () {
    this.getAllStudentInfoEnrolled()
  },
  methods: {
    getAllStudentInfoEnrolled () {
      getAllStudentInfoEnrolled().then(res => {
        console.log(res)
        this.administrationStudentInfoEnrolled = res
      })
    },
    deleteEnrolledStudent (values) {
      console.log(values)
      deleteEnrolledStudent(values).then(res => {
        console.log(res)
      })
    },
    showModal (name) {
      this.editName = name
      this.visible = true
    },
    handleOk (e) {
      this.onDelete(this.editName)
      this.visible = false
    },
    handleCancel (e) {
      this.visible = false
    },
    onChange (e) {
      this.leftValue = e.target.value
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
      const values = {
        name: name,
        state: this.leftValue
      }
      this.deleteEnrolledStudent(values)
      const administrationStudentInfoEnrolled = [...this.administrationStudentInfoEnrolled]
      this.administrationStudentInfoEnrolled = administrationStudentInfoEnrolled.filter(item => item.name !== name)
      // 在这里写让后台标记离校以及删除的代码
    },
    editEnrolledStudentInfo (name) {
      console.log(name)
      this.$router.push('/administration/studentmanage/studentinfo/enrolled/edit/' + name)
    },
    handleAdd () {
      this.$router.push('/administration/studentmanage/studentinfo/enrolled/add')
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
