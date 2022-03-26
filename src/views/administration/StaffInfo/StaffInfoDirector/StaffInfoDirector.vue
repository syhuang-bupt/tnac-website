<template>
  <page-header-wrapper :title="false">
    <div class="main-content">
      <br />
      <a-button v-if="directorData.length===0" class="editable-add-btn" @click="handleAdd">添加</a-button>
      <a-table bordered :data-source="directorData" :columns="columns" class="director-table" :pagination="false">
        <span slot="name" class="title-style">姓名</span>
        <span slot="sex" class="title-style">性别</span>
        <span slot="age" class="title-style">年龄</span>
        <span slot="phoneNumber" class="title-style">电话</span>
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
        <template slot="operation" slot-scope="text, record">
          <a style="margin-right:12px" @click="() => editDirectorInfo(record.name)">编辑</a>
          <a-popconfirm
            title="确定删除?"
            @confirm="() => onDelete(record.name)">
            <a href="javascript:;">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
    </div>
  </page-header-wrapper>
</template>
<script>
import { deleteDirector } from 'network/deleteData.js'
import { addDirector } from 'network/addNewStudentOrStaff.js'
import { getAllDirectorData } from 'network/getStaffOrStudentData.js'
export default {
  name: 'StaffInfoDirector',
  components: {
  },
  data () {
    return {
      defaultDirectorData: {},
      directorData: [],
      columns: [
        {
          dataIndex: 'name',
          align: 'center',
          slots: { title: 'name' }
        },
        {
          dataIndex: 'sex',
          align: 'center',
          slots: { title: 'sex' }
        },
        {
          dataIndex: 'age',
          align: 'center',
          slots: { title: 'age' }
        },
        {
          dataIndex: 'phoneNumber',
          align: 'center',
          slots: { title: 'phoneNumber' }
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
          width: '12%',
          slots: { title: 'operation' },
          scopedSlots: { customRender: 'operation' }
        }
      ]
    }
  },
  created () {
    console.log('我被创建了')
    this.getAllDirectorData()
  },
  methods: {
    addDirector (values) {
      addDirector(values).then(res => {
        console.log(res)
      })
    },
    getAllDirectorData () {
      getAllDirectorData().then(res => {
        console.log(res)
        this.directorData = res
      })
    },
    deleteDirector (values) {
      console.log(values)
      deleteDirector(values).then(res => {
        console.log(res)
      })
    },
    onDelete (name) {
      this.deleteDirector(name)
      const directorData = [...this.directorData]
      this.directorData = directorData.filter(item => item.name !== name)
    },
    editDirectorInfo (name) {
      this.$router.push('/administration/stuffmanage/stuffinfo/director/edit/' + name)
    },
    handleAdd () {
      this.$router.push('/administration/stuffmanage/stuffinfo/director/add')
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
.director-table {
  margin-left: 16px;
  margin-right: 16px;
}
.title-style {
    font-size: 14px;
    font-weight: bold;
}
</style>
