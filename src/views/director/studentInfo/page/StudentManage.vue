<template>
  <div class="main-content">
    <course-change-table
      style="min-height:360px"
      @getCourseAgain="getCourseAgain"
      :nameid="nameid"
      :weekdaysData="weekdaysDataSource"
      :saturdayData="saturdayDataSource"
      :sundayData="sundayDataSource"/>
    <student-relationship-change-model
      :allSupervision="allSupervision"
      :visible="relationshipModelVisible"
      :originSupervision="supervision"
      :originClass="classD"
      @closeRelationshipModelCancel="closeRelationshipModelCancel"
      @closeRelationshipModelOk="closeRelationshipModelOk"/>
    <a-modal
      title="课表备份"
      :visible="timetableBackupsVisible"
      :confirm-loading="confirmLoading"
      :dialog-style="{ top: '130px', left: '150px' }"
      @ok="handleBackupsOk"
      @cancel="handleBackupsCancel"
    >
      <p>{{ '注意：每天最多备份一份课表，多次保存将进行替换。' }}</p>
    </a-modal>
    <a-modal
      title="历史课表"
      :visible="historyTableVisible"
      :width="'1000px'"
      :dialog-style="{ top: '80px', left: '150px' }"
      @cancel="handleHistoryTableCancel">
      <template slot="footer">
        <a-button key="back" @click="handleHistoryTableCancel" v-show="true">
          关闭
        </a-button>
      </template>
      <a-select style="width: 320px" @select="handleBackupSelested" placeholder="请选择备份课表">
        <a-select-option v-for="(item,index) in backupSchedule" :key="index" :value="item">
          {{ item }}
        </a-select-option>
      </a-select>
      <student-timetable bordered style="margin-top:20px" :courseDataSource="historyCourseData"/>
    </a-modal>
    <div class="copyBtn">
      <a-button @click="handleRelationshipChange">
        学生关系修改
      </a-button>
      <a-button @click="BackupsModal" style="margin-left:15px">
        课表备份
      </a-button>
      <a-button @click="checkHistoryTableModal" style="margin-left:15px">
        历史课表
      </a-button>
    </div>
  </div>
</template>

<script>
import { editRelationship } from 'network/editData.js'
import StudentTimetable from 'components/common/Table/StudentTimetable/StudentTimetable'
import StudentRelationshipChangeModel from '@/components/common/Model/StudentRelationshipChangeModel'
import CourseChangeTable from 'components/common/StudentInfo/CourseChangeTable/CourseChangeTable'
import { getDirectorStudentDetailStudentSchedule, getAllSupervisionData, postStudentScheduleBackup, getStudentBackupSchedule, getStudentBackupDetail } from 'network/getStudentDetail.js'
import moment from 'moment'
export default {
  name: 'StudentManage',
  components: {
    StudentRelationshipChangeModel,
    CourseChangeTable,
    StudentTimetable
  },
  props: {
    nameid: {
      type: String,
      default () {
        return ''
      }
    },
    originSupervision: {
      type: String,
      default () {
        return ''
      }
    },
    originClass: {
      type: String,
      default () {
        return ''
      }
    }

  },
  data () {
    return {
      // 三种课表
      weekdaysDataSource: [],
      saturdayDataSource: [],
      sundayDataSource: [],

      backupSchedule: [], // 哪些天存在备份课表

      historyCourseData: {}, // 历史课表数据
      historyTableVisible: false,
      confirmLoading: false,
      timetableBackupsVisible: false,
      relationshipModelVisible: false,
      supervision: '',
      classD: '',
      allSupervision: []
    }
  },
  created () {
    this.supervision = this.originSupervision
    this.classD = this.originClass
    this.getDirectorStudentDetailStudentSchedule(this.nameid)
    this.getAllSupervisionData()
  },
  methods: {
    // 时间处理相关函数
    moment,
    // 获取学生课表相关函数
    getDirectorStudentDetailStudentSchedule (values) {
      getDirectorStudentDetailStudentSchedule(values).then(res => {
        this.weekdaysDataSource = res.weekdaysDataSource
        this.saturdayDataSource = res.saturdayDataSource
        this.sundayDataSource = res.sundayDataSource
        console.log(res)
      })
    },
    getCourseAgain () {
      this.getDirectorStudentDetailStudentSchedule(this.nameid)
    },
    // 课表备份
    postStudentScheduleBackup (values) {
      postStudentScheduleBackup(values).then(res => {
        console.log(res)
      })
    },
    // 获取学生备份课表相关函数
    getStudentBackupSchedule (values) {
      getStudentBackupSchedule(values).then(res => {
        this.backupSchedule = res
        console.log(res)
      })
    },
    // 获取学生备份课表详情
    getStudentBackupDetail (values) {
      getStudentBackupDetail(values).then(res => {
        console.log(values)
        this.historyCourseData = res
        console.log(res)
      })
    },
    getAllSupervisionData () {
      getAllSupervisionData().then(res => {
        console.log(res)
        this.allSupervision = res
      })
    },
    // 修改关系
    editRelationship (values) {
      console.log(values)
      editRelationship(values).then(res => {
        console.log(res)
      })
    },
    // 历史课表相关函数
    checkHistoryTableModal () {
      this.getStudentBackupSchedule(this.nameid)
      this.historyTableVisible = true
    },
    handleHistoryTableCancel (e) {
      this.historyTableVisible = false
    },
    handleBackupSelested (value) {
      // 这里写获取后端历史课表的代码
      const getInfoKey = {
        name: this.nameid,
        date: value
      }
      this.getStudentBackupDetail(getInfoKey)
      console.log(value)
    },
    // 课表备份相关函数
    BackupsModal () {
      this.timetableBackupsVisible = true
    },
    handleBackupsOk (e) {
      this.confirmLoading = true
      setTimeout(() => {
        // 这里写提交备份课表的代码
        this.postStudentScheduleBackup(this.nameid)
        this.timetableBackupsVisible = false
        this.confirmLoading = false
      }, 2000)
    },
    handleBackupsCancel (e) {
      this.timetableBackupsVisible = false
    },
    // 学生关系修改相关函数
    handleRelationshipChange () {
      console.log('学生关系修改')
      this.relationshipModelVisible = true
    },
    closeRelationshipModelCancel () {
      this.relationshipModelVisible = false
      console.log('成功取消表单数据')
    },
    closeRelationshipModelOk (finalSupervision, finalClass) {
      this.relationshipModelVisible = false
      this.supervision = finalSupervision
      this.classD = finalClass
      const values = {
        name: this.nameid,
        classValue: finalClass,
        supervisionValue: finalSupervision
      }
      this.editRelationship(values)
      this.$emit('getDetailAgain')
      console.log(this.supervision + this.classD)
    }
  }
}
</script>

<style scoped>
.copyBtn {
  margin-top: 12px;
  text-align: center;
}
</style>
