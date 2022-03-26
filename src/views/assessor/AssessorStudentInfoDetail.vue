<template>
  <page-header-wrapper :title="false">
    <div class="content-main" ref="maincontentheight">
      <div class="left-content">
        <a-card :bordered="false">
          <div class="account-center-avatarHolder">
            <div class="avatar">
              <img src="~assets/avatar.jpg">
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
          @tabChange="key => handleTabChange(key, 'noTitleKey')">
          <history-info v-if="noTitleKey === 'HistoryInfo'" :nameid="nameid" style="min-height:408px"/>
          <assessment-report v-else-if="noTitleKey === 'AssessmentReport'" style="min-height:408px"/>
          <iEP-plan v-else-if="noTitleKey === 'IEPPlan'" style="min-height:408px"/>
        </a-card>
      </div>
    </div>
  </page-header-wrapper>
</template>

<script>
import { PageView, RouteView } from '@/layouts'
import HistoryInfo from './page/HistoryInfo'
import AssessmentReport from './page/AssessmentReport'
import IEPPlan from './page/IEPPlan'
import { getAssessorStudentDetail } from 'network/getStudentDetail.js'
// import { studentdetail } from 'someData/index.js'
export default {
  name: 'StudentInfoDetail',
  components: {
    RouteView,
    PageView,
    HistoryInfo,
    AssessmentReport,
    IEPPlan
  },
  data () {
      return {
        nameid: '',
        studentdetail: [],
        tabListNoTitle: [
          {
            key: 'HistoryInfo',
            tab: '历史信息'
          },
          {
            key: 'AssessmentReport',
            tab: '评估数据录入'
          },
          {
            key: 'IEPPlan',
            tab: 'IEP干预计划'
          }
        ],
        noTitleKey: 'HistoryInfo'
    }
  },
  created () {
    this.nameid = this.$route.params.nameid
    this.getAssessorStudentDetail(this.nameid)
  },
  methods: {
    getAssessorStudentDetail (values) {
      getAssessorStudentDetail(values).then(res => {
        this.studentdetail = res
        console.log(res)
      })
    },
    handleTabChange (key, type) {
      this[type] = key
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
