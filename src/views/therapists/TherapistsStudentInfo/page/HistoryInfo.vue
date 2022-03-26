<template>
  <div class="main-content-style">
    <div class="history-info">
      <h2 class="report-title">干预历史+发育历史</h2>
      <div v-for="(item,index) in studentInformation" :key="index">
        <a :href="item.link" target="_blank">{{ item.name }}</a>
      </div>
    </div>
    <a-divider class="divider"/>
    <div class="matters-needing-attention">
      <h2 class="report-title">注意事项</h2>
      <a-list :grid="{ gutter: 16, column: 4 }" :data-source="attentionData" style="margin-top:12px">
        <a-list-item slot="renderItem" slot-scope="item" class="list-item-style">
          <a-card :title="item.title">
            {{ item.attention }}
          </a-card>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import { getTherapistStudentDetailHistoryInfo } from 'network/getStudentDetail.js'
export default {
  name: 'HistoryInfo',
  data () {
    return {
      studentInformation: [],
      // 强化物和注意事项暂时不从后端获取
      attentionData: [
        {
          title: '强化物',
          attention: '强化物就是那些能够提高特定反应的可能性，或使特定反应的概率增加的任何事物或事件'
        },
        {
          title: '注意事项',
          attention: '注意实时的强化物是否从奖励变成了惩罚，如：孩子自己叠衣被奖励零花钱，如果不叠衣被是否会挨骂'
        }
      ],
      getInfoKey: {}
    }
  },
  props: {
    nameid: {
      type: String,
      default () {
        return ''
      }
    }
  },
  created () {
    this.getInfoKey.role = 2
    this.getInfoKey.name = this.nameid
    this.getTherapistStudentDetailHistoryInfo(this.getInfoKey)
  },
  methods: {
    getTherapistStudentDetailHistoryInfo (values) {
      console.log(values)
      getTherapistStudentDetailHistoryInfo(values).then(res => {
        console.log(res)
        this.studentInformation = res.studentInformation
      })
    }
  }
}
</script>

<style scoped>
.report-title {
  font-size:18px;
  font-weight: bold;
  color: #414141;
}
.list-item-style {
  width: 420px;
}
</style>
