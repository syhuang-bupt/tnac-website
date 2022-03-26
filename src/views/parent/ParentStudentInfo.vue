<template>
  <page-header-wrapper :title="false" >
    <div class="container">
      <div class="header">
        <h1 class="list-research-text">列表搜索</h1>
        <a-input-search
          class="input-search"
          placeholder="请输入姓名"
          enter-button="搜索"
          size="large"
          @search="onSearch"
          @change="e => searchChange(e.target.value)"/>
        <a-divider></a-divider>
      </div>
      <div class="content">
        <avatar-without-dot :avatars="parentStudentdata" :routerInfo="'/parent/studentinfo/detail/'"/>
      </div>
    </div>
  </page-header-wrapper>
</template>

<script>
import storage from 'store'
import AvatarWithoutDot from 'components/common/Avatar/AvatarWithoutDot'
import { getParentStudentData } from 'network/getStudentData.js'
// 一些测试用的数据导入
// import { parentStudentdata } from 'someData/index.js'
export default {
  name: 'ParentStudentInfo',
  components: {
    AvatarWithoutDot
  },
  data () {
    return {
      name: '',
      isStudentAvatar: true,
      parentStudentdata: [],
      parentStudentdataTmp: [],
      parentStudentdataFilter: []
    }
  },
  created () {
    this.name = storage.get('INFO').name
    this.getParentStudentData(this.name)
    this.parentStudentdataTmp = this.parentStudentdata
  },
  methods: {
    getParentStudentData (values) {
      getParentStudentData(values).then(res => {
        console.log(res)
        this.parentStudentdata = res
      })
    },
    onSearch (value) {
      const len = this.newStudentdata.length
      var k = 0
      if (value !== '' && len > 1) {
        for (var i = 0; i < len; i++) {
          if (this.parentStudentdata[i].name === value) {
            this.parentStudentdataFilter[k++] = this.parentStudentdata[i]
          }
        }
        this.parentStudentdata = this.parentStudentdataFilter
        this.parentStudentdataFilter = []
      }
    },
    searchChange (value) {
      if (this.parentStudentdata.length !== this.parentStudentdataTmp.length) {
        this.parentStudentdata = this.parentStudentdataTmp
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
