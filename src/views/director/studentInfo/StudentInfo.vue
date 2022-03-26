<template>
  <page-header-wrapper :title="false" >
    <div class="container">
      <div class="header">
        <h1 class="list-research-text">列表搜索</h1>
        <a-input-search
          class="input-search"
          placeholder="请输入学生名"
          enter-button="搜索"
          size="large"
          @search="onSearch"
          @change="e => searchChange(e.target.value)"/>
        <a-divider></a-divider>
      </div>
      <div class="content">
        <!-- 根据boolean值:isStudentAvatar决定以头像形式展示信息，还是以表格形式展示信息 -->
        <avatar-dot :avatars="studentData" v-if="isStudentAvatar" :routerInfo="'/director/studentinfo/detail/'"></avatar-dot>
        <div class="student-list" v-else><enrolled-avatar-table-director :studentData="studentData"/></div>
      </div>
      <div class="footer">
        <switch-views class="switch-view" @fromAvatarToTable="avatarToTableClick()" @fromTableToAvatar="tableToAvatarClick()"></switch-views>
      </div>
    </div>
  </page-header-wrapper>
</template>

<script>
import AvatarDot from 'components/common/Avatar/AvatarDot'
import SwitchViews from 'components/common/SwitchViews/SwitchViews'
import EnrolledAvatarTableDirector from 'components/common/TableForAvatar/director/EnrolledAvatarTableDirector'
// 一些测试用的数据导入
// import { studentData } from 'someData/index.js'
import { getDirectorStudentData } from 'network/getStudentData.js'
export default {
  name: 'StudentInfo',
  components: {
    AvatarDot,
    SwitchViews,
    EnrolledAvatarTableDirector
  },
  data () {
    return {
      isStudentAvatar: true,
      studentData: [],
      studentDataTmp: [],
      studentDataFilter: []
    }
  },
  created () {
    // 这一行取消注释即可
    this.getDirectorStudentData()
  },
  methods: {
    getDirectorStudentData () {
      getDirectorStudentData().then(res => {
        console.log(res)
        this.studentData = res
        this.studentDataTmp = this.studentData
      })
    },
    onSearch (value) {
      const len = this.studentData.length
      var j = 0
      if (value !== '' && len > 1) {
        for (var i = 0; i < len; i++) {
          if (this.studentData[i].name === value) {
            this.studentDataFilter[j++] = this.studentData[i]
          }
        }
        this.studentData = this.studentDataFilter
        this.studentDataFilter = []
      }
    },
    searchChange (value) {
      if (this.studentData.length !== this.studentDataTmp.length) {
        this.studentData = this.studentDataTmp
      }
    },
    avatarToTableClick () {
      this.isStudentAvatar = false
    },
    tableToAvatarClick () {
      this.isStudentAvatar = true
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    padding: 12px 12px 6px 12px;
    background-color: #fff;
    flex-direction: column;
    min-height: 600px;
  }
  .container .header {
    display: flex;
    flex-direction: column;
  }
  .container .content {
    flex: 1;
  }
  .footer {
    flex-basis: 28px;
    align-self: flex-end;
  }
  .container .header .list-research-text {
    font-size: 18px;
    font-weight: bold;
    flex-basis: 50px;
  }
  .container .header .input-search {
    width: 600px;
    align-self:center;
    flex-basis: 60px;
  }
</style>
