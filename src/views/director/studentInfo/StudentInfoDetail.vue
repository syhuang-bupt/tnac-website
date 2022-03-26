<template>
  <page-header-wrapper :title="false">
    <div class="content-main" ref="maincontentheight">
      <div class="left-content">
        <a-card :bordered="false">
          <div class="account-center-avatarHolder">
            <div class="avatar">
              <img :src="studentdetail.avatar">
            </div>
            <div class="username">{{ nameid }}</div>
          </div>
          <div>
            <div class="student_info_item"><a-icon type="user"/>{{ ' 性\u2003\u2003\u2003别：'+studentdetail.sex }}</div>
            <div class="student_info_item"><a-icon type="crown"/>{{ ' 年\u2003\u2003\u2003龄：'+studentdetail.age }}</div>
            <div class="student_info_item"><a-icon type="team"/>{{ ' 看护人姓名：'+studentdetail.guardianName }}</div>
            <div class="student_info_item"><a-icon type="phone"/>{{ ' 看护人电话：'+studentdetail.guardianPhone }}</div>
            <div class="student_info_item"><a-icon type="home"/>{{ ' 住\u2003\u2003\u2003址：'+studentdetail.address }}</div>
            <div class="student_info_item"><a-icon type="bank"/>{{ ' 户\u2003\u2003\u2003籍：'+studentdetail.register }}</div>
          </div>
          <a-divider :dashed="true"/>
          <div>
            <div class="schoolInfo">在校信息</div>
            <div class="student_info_item"><a-icon type="apartment"/>{{ ' 班\u2003\u2003\u2003级：'+studentdetail.class }}</div>
            <div class="student_info_item"><a-icon type="usergroup-add"/>{{ ' 督\u2003\u2003\u2003导：'+studentdetail.supervision }}</div>
          </div>
        </a-card>
      </div>
      <div class="right-content">
        <a-card
          style="width:100%"
          :bordered="false"
          :tabList="tabListNoTitle"
          :activeTabKey="noTitleKey"
          @tabChange="key => handleTabChange(key, 'noTitleKey')"
        >
          <history-info v-if="noTitleKey === 'HistoryInfo'" :nameid="this.nameid" style="min-height:408px"/>
          <student-manage
            v-else-if="noTitleKey === 'StudentManage'"
            @getDetailAgain="getDetailAgain"
            :nameid="this.nameid"
            :originSupervision="studentdetail.supervision"
            :originClass="studentdetail.class"
            style="min-height:408px"/>
          <assessment-report v-else-if="noTitleKey === 'AssessmentReport'" style="min-height:408px"/>
          <rehabilitation-plan v-else-if="noTitleKey === 'RehabilitationPlan'" style="min-height:408px"/>
        </a-card>
      </div>
    </div>
  </page-header-wrapper>
</template>

<script>
import { PageView, RouteView } from '@/layouts'
import HistoryInfo from './page/HistoryInfo'
import StudentManage from './page/StudentManage'
import AssessmentReport from './page/AssessmentReport'
import RehabilitationPlan from './page/RehabilitationPlan'
// import { studentdetail } from 'someData/index.js'
import { getDirectorStudentDetail } from 'network/getStudentDetail.js'
export default {
  name: 'StudentInfoDetail',
  components: {
    RouteView,
    PageView,
    HistoryInfo,
    StudentManage,
    AssessmentReport,
    RehabilitationPlan
  },
  data () {
      return {
        nameid: null,
        studentdetail: [],
        tabListNoTitle: [
          {
            key: 'HistoryInfo',
            tab: '历史信息'
          },
          {
            key: 'StudentManage',
            tab: '学生管理'
          },
          {
            key: 'AssessmentReport',
            tab: '评估报告'
          },
          {
            key: 'RehabilitationPlan',
            tab: '康复进展'
          }
        ],
        noTitleKey: 'HistoryInfo'
    }
  },
  created () {
    this.nameid = this.$route.params.nameid
    // 取消这一行的注释即可
    console.log(this.nameid)
    this.getDirectorStudentDetail(this.nameid)
  },
  mounted () {
    // this.$nextTick(() => { // 页面渲染完成后的回调
    //     console.log(this.$refs.maincontentheight.offsetHeight)
    // })
  },
  methods: {
    handleTabChange (key, type) {
      this[type] = key
    },
    getDirectorStudentDetail (values) {
      getDirectorStudentDetail(values).then(res => {
        this.studentdetail = res
        console.log(res)
      })
    },
    getDetailAgain () {
      this.getDirectorStudentDetail(this.nameid)
    },
    RelationshipChange (finalSupervision, finalClass) {
      console.log('下层组件修改了督导和班级，可以重新从服务器请求一次数据了' + '督导变成了：' + finalSupervision + '班级变成了：' + finalClass)
      this.studentdetail.class = finalClass
      this.studentdetail.supervision = finalSupervision
    }
  }
}
</script>

<style lang="less" scoped>
.content-main {
  display: flex;
}
.left-content {
  background-color: white;
  min-width: 280px;
  max-width: 300px;
}
.right-content {
  margin-left: 20px;
  flex: 1;
}
.account-center-avatarHolder {
  text-align: center;
  margin-bottom: 24px;

  & > .avatar {
    margin: 0 auto;
    width: 104px;
    height: 104px;
    margin-bottom: 20px;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .username {
    color: rgba(0, 0, 0, 0.85);
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    margin-bottom: 4px;
  }
}

.schoolInfo {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 12px;
}
.student_info_item {
  margin-bottom: 5px;
}
</style>
