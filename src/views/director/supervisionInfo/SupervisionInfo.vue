<template>
  <page-header-wrapper :title="false" >
    <div class="container">
      <sponsor-conference-modal
        :visible="isConferenceModalVisible"
        @closeConferenceModelOk="closeConferenceModelOk"
        @closeConferenceModelCancel="closeConferenceModelCancel"/>
      <div class="header">
        <h1 class="list-research-text">列表搜索</h1>
        <a-input-search
          class="input-search"
          placeholder="请输入督导姓名"
          enter-button="搜索"
          size="large"
          @search="onSearch"
          @change="e => searchChange(e.target.value)"/>
        <a-divider></a-divider>
      </div>
      <div class="content">
        <a-button class="sponsorConference-btn" @click="handleConference">召集开会</a-button>
        <supervision-info-table
          :supervisionData="supervisiondata"
          @selectedSupervisionChange="selectedSupervisionChange"/>
      </div>
    </div>
  </page-header-wrapper>
</template>

<script>
import SupervisionInfoTable from 'components/common/WorkerInforTable/director/SupervisionInfoTable'
import SponsorConferenceModal from '@/components/common/Model/SponsorConferenceModal'
import { getSupervisionData } from 'network/getSupOrTherOrAsseData.js'
// import { supervisiondata } from 'someData/index.js'
export default {
  name: 'SupervisionInfo',
  components: {
    SupervisionInfoTable,
    SponsorConferenceModal
  },
  data () {
    return {
      supervisiondata: [],
      supervisiondataTmp: [],
      supervisiondataFilter: [],
      isConferenceModalVisible: false,
      selectedSupervisionData: []
    }
  },
  created () {
    this.getSupervisionData()
  },
  methods: {
    getSupervisionData () {
      getSupervisionData().then(res => {
        console.log(res)
        this.supervisiondata = res
        this.supervisiondataTmp = this.supervisiondata
      })
    },
    handleConference () {
      if (this.selectedSupervisionData.length === 0) {
        this.$message.error('请先选择参会的督导')
      } else {
        this.isConferenceModalVisible = true
      }
    },
    closeConferenceModelCancel () {
      this.isConferenceModalVisible = false
    },
    closeConferenceModelOk (values) {
      console.log(values)
      this.isConferenceModalVisible = false
      // 根据values和selectedSupervisionData向后端发送数据
      // console.log(values)
    },
    onSearch (value) {
      console.log('开始搜索')
      const len = this.supervisiondata.length
      var j = 0
      if (value !== '' && len > 1) {
        for (var i = 0; i < len; i++) {
          if (this.supervisiondata[i].name === value) {
            this.supervisiondataFilter[j++] = this.supervisiondata[i]
          }
        }
        this.supervisiondata = this.supervisiondataFilter
        this.supervisiondataFilter = []
      }
    },
    searchChange (value) {
      console.log('搜索内容改变')
      if (this.supervisiondata.length !== this.supervisiondataTmp.length) {
        this.supervisiondata = this.supervisiondataTmp
      }
    },
    selectedSupervisionChange (selectedRowKeys) {
      console.log(selectedRowKeys)
      this.selectedSupervisionData = selectedRowKeys
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
  .sponsorConference-btn {
    margin-bottom: 12px;
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
