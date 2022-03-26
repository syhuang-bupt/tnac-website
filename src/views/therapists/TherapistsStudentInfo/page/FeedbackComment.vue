<template>
  <div class="main-content">
    <a-tabs
      tab-position="left"
      :style="{ height: '550px'}"
      @prevClick="callback"
      @nextClick="callback"
      @change="tabchange_name"
    >
      <a-tab-pane v-for="(item,index) in supervisiondata" :key="index" :tab="item.name">
        <a-tabs
          type="card"
          :style="{ height: '550px'}"
          @change="tabchange_fun"
        >
          <a-tab-pane key="1" tab="收件箱">
            <div class="infinite-list-wrapper">
              <div v-if="recmessages.length>0">
                <a-card v-for="(item2,index2) in recmessages" :key="index2" class="info-card" size="small">
                  <div class="card-top">
                    <div class="avatar">
                      <img src="~assets/avatar.jpg">
                    </div>
                    <div class="text">
                      {{ item2.createTime }}
                    </div>
                  </div>
                  <p>{{ item2.content }}</p>
                </a-card>
              </div>

              <div v-else>
                <a-empty>
                  <span slot="description"> 暂无评论 </span>
                </a-empty>
              </div>
            </div>

            <div class="card-messages">
              <a-textarea :auto-size="{ minRows: 3, maxRows: 8 }" placeholder="输入评论" v-model="message"/>
              <a-button type="primary" @click="ChooseRec" class="submit-button">选择联系人</a-button>
            </div>
          </a-tab-pane>

          <a-tab-pane key="2" tab="发件箱" force-render>
            <div class="infinite-list-wrapper">
              <div v-if="sendmessages.length>0">
                <a-card v-for="(item2,index2) in sendmessages" :key="index2" class="info-card" size="small">
                  <div class="card-top">
                    <div class="avatar">
                      <img src="~assets/avatar.jpg">
                    </div>
                    <div class="text">
                      {{ item2.createTime }}
                    </div>
                  </div>
                  <p>{{ item2.content }}</p>
                </a-card>
              </div>

              <div v-else>
                <a-empty>
                  <span slot="description"> 暂无评论 </span>
                </a-empty>
              </div>
            </div>

            <div class="card-messages">
              <a-textarea :auto-size="{ minRows: 3, maxRows: 8 }" placeholder="输入评论" v-model="message"/>
              <a-button type="primary" @click="ChooseRec" class="submit-button">选择联系人</a-button>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-tab-pane>
    </a-tabs>

    <a-modal
      title="请选择联系人"
      ok-text="确认发送"
      cancel-text="返回"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <div>
        <div style="{ borderBottom: '1px solid #E9E9E9' }">
          <a-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange">
            全选
          </a-checkbox>
        </div>
        <br />
        <a-checkbox-group v-model="checkedList" :options="plainOptions" @change="ChooseChange" />
      </div>
    </a-modal>
  </div>
</template>

<script>
import { AllMessages, supervisiondata } from 'someData/index.js'
import moment from 'moment'
export default {
  data () {
    return {
      AllMessages,
      supervisiondata,
      supervisionname: [],
      stumessages: [],
      recmessages: [],
      sendmessages: [],
      message: '',
      currentTime: '',
      nameid: this.$route.params.nameid,
      tabsup: '0',
      tabfun: '0',
      visible: false,
      confirmLoading: false,
      checkedList: [],
      indeterminate: false,
      checkAll: false,
      plainOptions: []
    }
  },
  created () {
    this.getStumessages()
    this.getRecmessages()
    this.getSendmessages()
    this.getSupervisionname()
    this.plainOptions = this.supervisionname
    this.checkedList = [this.supervisionname[0]]
  },
  methods: {
    moment,
    callback (val) {
      console.log(val)
    },
    tabchange_name (val) {
      this.tabsup = val
      this.getRecmessages()
      this.getSendmessages()
      this.checkedList = [this.supervisiondata[val].name]
    },
    tabchange_fun (val) {
      this.tabfun = val
      this.getRecmessages()
      this.getSendmessages()
    },
    getSupervisionname () {
      for (var i = 0; i < supervisiondata.length; i++) {
        this.supervisionname.push(supervisiondata[i].name)
      }
    },
    getStumessages () {
      this.stumessages = []
      for (var i = 0; i < AllMessages.length; i++) {
        if (AllMessages[i].Stuid === this.nameid) {
          this.stumessages.push(AllMessages[i])
        }
      }
    },
    getRecmessages () {
      this.recmessages = []
      for (var i = 0; i < this.stumessages.length; i++) {
        if (this.stumessages[i].Recid === '葛群' && this.stumessages[i].Sendid === this.supervisiondata[this.tabsup].name) {
          this.recmessages.push(this.stumessages[i])
        }
      }
    },
    getSendmessages () {
      this.sendmessages = []
      for (var i = 0; i < this.stumessages.length; i++) {
        if (this.stumessages[i].Sendid === '葛群' && this.stumessages[i].Recid === this.supervisiondata[this.tabsup].name) {
          this.sendmessages.push(this.stumessages[i])
        }
      }
    },
    ChooseRec () {
      if (this.message === '' || this.message.replace(/(^\s*)|(\s*$)/g, '') === '') {
          this.$message.info('发送内容不能为空')
      } else {
        this.showModal()
      }
    },
    getDate () {
      this.currentTime = moment().format('YYYY-MM-DD HH:mm:ss')
    },
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      if (this.checkedList.length === 0) {
        this.$message.info('未选择联系人')
      } else {
        this.submitMessage()
        this.confirmLoading = true
        setTimeout(() => {
          this.visible = false
          this.confirmLoading = false
          this.$message.info('发送成功')
          this.getStumessages()
          this.getRecmessages()
          this.getSendmessages()
          this.message = ''
        }, 1000)
      }
    },
    handleCancel (e) {
      this.visible = false
      this.checkedList = [this.therapistsdata[this.tabsup].name]
      // this.indeterminate = false
      this.checkAll = false
    },
    ChooseChange (checkedList) {
      // this.indeterminate = !!checkedList.length && checkedList.length < this.plainOptions.length
      this.checkAll = checkedList.length === this.plainOptions.length
    },
    onCheckAllChange (e) {
      Object.assign(this, {
        checkedList: e.target.checked ? this.plainOptions : [],
        // indeterminate: false,
        checkAll: e.target.checked
      })
    },
    submitMessage () {
      this.getDate()
      for (var i = 0; i < this.checkedList.length; i++) {
        AllMessages.push({
          Sendid: '葛群',
          // Recid: this.supervisiondata[this.tabsup].name,
          Recid: this.checkedList[i],
          Stuid: this.nameid,
          createTime: this.currentTime,
          content: this.message
        })
      }
    }
  }
}
</script>

<style scoped>
.main-content {
  padding:5px;
  -moz-box-shadow:2px 2px 3px rgb(156, 156, 156);
  -webkit-box-shadow:2px 2px 3px rgb(156, 156, 156);
  box-shadow:2px 2px 3px rgb(156, 156, 156);
  background:#fff;
}
.info-card {
  padding: 0;
  background-color: rgb(195, 209, 252);
  margin-bottom: 10px;
}
.infinite-list-wrapper{
  height: 340px;
  overflow:auto;
}
.card-messages{
  text-align: center;
  padding-right: 10px;
  margin-top: 20px;
}
.card-top{
  display:flex;
  height: 35px;
  align-items: center;
  /* justify-content: center; */
}
.avatar {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
  overflow: hidden;
}
img {
  height: 100%;
  width: 100%;
}
.text {
  font-weight: bold;
}
.submit-button {
  margin-top: 10px;
}
</style>
