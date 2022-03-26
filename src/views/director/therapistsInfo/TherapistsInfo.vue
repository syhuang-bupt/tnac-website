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
          placeholder="请输入康复师姓名"
          enter-button="搜索"
          size="large"
          @search="onSearch"
          @change="e => searchChange(e.target.value)"/>
        <a-divider></a-divider>
      </div>
      <div class="content">
        <a-button class="sponsorConference-btn" @click="handleConference">召集开会</a-button>
        <therapists-info-table
          :therapistsData="therapistsdata"
          @selectedTherapistsChange="selectedTherapistsChange"/>
      </div>
    </div>
  </page-header-wrapper>
</template>

<script>
import TherapistsInfoTable from 'components/common/WorkerInforTable/director/TherapistsInfoTable'
// import { therapistsdata } from 'someData/index.js'
import { getTherapistsData } from 'network/getSupOrTherOrAsseData.js'
import SponsorConferenceModal from '@/components/common/Model/SponsorConferenceModal'
export default {
  name: 'TherapistsInfo',
  components: {
    TherapistsInfoTable,
    SponsorConferenceModal
  },
  data () {
    return {
      therapistsdata: [],
      therapistsdataTmp: [],
      therapistsdataFilter: [],
      isConferenceModalVisible: false,
      selectedTherapistsData: []
    }
  },
  created () {
    this.getTherapistsData()
  },
  methods: {
    getTherapistsData () {
      getTherapistsData().then(res => {
        console.log(res)
        this.therapistsdata = res
        this.therapistsdataTmp = this.therapistsdata
      })
    },
    handleConference () {
      if (this.selectedTherapistsData.length === 0) {
        this.$message.error('请先选择参会的康复师')
      } else {
        this.isConferenceModalVisible = true
      }
    },
    closeConferenceModelCancel () {
      this.isConferenceModalVisible = false
    },
    closeConferenceModelOk (values) {
      this.isConferenceModalVisible = false
      // 根据values和selectedTherapistsData向后端发送数据
      // console.log(values)
    },
    onSearch (value) {
      const len = this.therapistsdata.length
      var j = 0
      if (value !== '' && len > 1) {
        for (var i = 0; i < len; i++) {
          if (this.therapistsdata[i].name === value) {
            this.therapistsdataFilter[j++] = this.therapistsdata[i]
          }
        }
        this.therapistsdata = this.therapistsdataFilter
        this.therapistsdataFilter = []
      }
    },
    searchChange (value) {
      if (this.therapistsdata.length !== this.therapistsdataTmp.length) {
        this.therapistsdata = this.therapistsdataTmp
      }
    },
    selectedTherapistsChange (selectedRowKeys) {
      this.selectedTherapistsData = selectedRowKeys
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
  .sponsorConference-btn {
    margin-bottom: 12px;
  }
</style>
