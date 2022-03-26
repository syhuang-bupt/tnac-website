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
        <avatar-dot :avatars="therapistsStudentdata" v-if="isStudentAvatar" :routerInfo="'/therapists/studentinfo/detail/'"/>
        <div class="student-list" v-else><enrolled-avatar-table-therapists :studentData="therapistsStudentdata"/></div>
      </div>
      <div class="footer">
        <switch-views class="switch-view" @fromAvatarToTable="avatarToTableClick()" @fromTableToAvatar="tableToAvatarClick()"></switch-views>
      </div>
    </div>
  </page-header-wrapper>
</template>

<script>
import storage from 'store'
import AvatarDot from 'components/common/Avatar/AvatarDot'
import SwitchViews from 'components/common/SwitchViews/SwitchViews'
import EnrolledAvatarTableTherapists from 'components/common/TableForAvatar/therapists/EnrolledAvatarTableTherapists'
// 一些测试用的数据导入
// import { therapistsStudentdata, therapistsShowAvatars } from 'someData/index.js'
import { getTherapistStudentData } from 'network/getStudentData.js'
export default {
  name: 'StudentInfo',
  components: {
    AvatarDot,
    SwitchViews,
    EnrolledAvatarTableTherapists
  },
  data () {
    return {
      isStudentAvatar: true,
      therapistsStudentdata: [],
      therapistsStudentdataTmp: [],
      therapistsStudentdataFilter: []
    }
  },
  created () {
    this.getTherapistStudentData(storage.get('INFO').name)
    this.therapistsStudentdataTmp = this.therapistsStudentdata
  },
  methods: {
    getTherapistStudentData (values) {
      getTherapistStudentData(values).then(res => {
        console.log(res)
        this.therapistsStudentdata = res
      })
    },
    onSearch (value) {
      const len = this.therapistsStudentdata.length
      var j = 0
      if (value !== '' && len > 1) {
        for (var i = 0; i < len; i++) {
          if (this.therapistsStudentdata[i].name === value) {
            this.therapistsStudentdataFilter[j++] = this.therapistsStudentdata[i]
          }
        }
        this.therapistsStudentdata = this.therapistsStudentdataFilter
        this.therapistsStudentdataFilter = []
      }
    },
    searchChange (value) {
      if (this.therapistsStudentdata.length !== this.therapistsStudentdataTmp.length) {
        this.therapistsStudentdata = this.therapistsStudentdataTmp
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
