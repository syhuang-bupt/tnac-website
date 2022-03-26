<template>
  <page-header-wrapper :title="false" >
    <div class="main-content">
      <br />
      <attendance-state-model :visible="isModelVisible" :whoData="whoData" @closeModel="closeModel"/>
      <a-table :data-source="directorData" :columns="columns" class="stu-table" :pagination="false" bordered>
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
      </a-table>
    </div>
  </page-header-wrapper>
</template>
<script>
import { getDirectorDailyManage } from 'network/getStaffOrStudentData.js'
import AttendanceStateModel from '@/components/common/Model/AttendanceStateModel'
export default {
  name: 'StaffManageDirector',
  components: {
    AttendanceStateModel
  },
  data () {
    return {
      whoData: '',
      isModelVisible: false,
      directorData: [],
      columns: [
        {
          dataIndex: 'name',
          key: 'name',
          align: 'center',
          width: '20%',
          slots: { title: 'name' }
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
      getDirectorDailyManage().then(res => {
        console.log(res)
        this.directorData = res
      })
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
      this.directorData[key].attendanceState = !this.directorData[key].attendanceState
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
</style>
