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
        <avatar-without-dot :avatars="showAvatars" v-if="isStudentAvatar" :routerInfo="'/supervision/rehabilitationplan/detail/'"/>
      </div>
    </div>
  </page-header-wrapper>
</template>

<script>
import storage from 'store'
import { getSupervisionRehabilitationPlanStudent } from 'network/getStudentData.js'
import AvatarWithoutDot from 'components/common/Avatar/AvatarWithoutDot'
// 一些测试用的数据导入
// import { showAvatars } from 'someData/index.js'
export default {
  name: 'SupervisionRehabilitationPlanSelect',
  components: {
    AvatarWithoutDot
  },
  data () {
    return {
      isStudentAvatar: true,
      showAvatars: [],
      showAvatarsTmp: [],
      showAvatarsFilter: []
    }
  },
  created () {
    this.getSupervisionRehabilitationPlanStudent(storage.get('INFO').name)
    this.showAvatarsTmp = this.showAvatars
  },
  methods: {
    getSupervisionRehabilitationPlanStudent (values) {
      getSupervisionRehabilitationPlanStudent(values).then(res => {
        this.showAvatars = res
        console.log(res)
      })
    },
    onSearch (value) {
      const len = this.showAvatars.length
      var k = 0
      if (value !== '' && len > 1) {
        for (var i = 0; i < len; i++) {
          if (this.showAvatars[i].name === value) {
            this.showAvatarsFilter[k++] = this.showAvatars[i]
          }
        }
        this.showAvatars = this.showAvatarsFilter
        this.showAvatarsFilter = []
      }
    },
    searchChange (value) {
      if (this.showAvatars.length !== this.showAvatarsTmp.length) {
        this.showAvatars = this.showAvatarsTmp
      }
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
