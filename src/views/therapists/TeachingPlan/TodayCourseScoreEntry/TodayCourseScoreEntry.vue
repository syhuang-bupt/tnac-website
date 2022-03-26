<template>
  <page-header-wrapper :title="false">
    <div class="main-content">
      <div style="margin-bottom:20px">
        <span style="margin-right:12px; font-size:16px; font-weight:bold">学生姓名:</span>
        <a-select :default-value="detailInfo.owner" style="width: 300px" @change="handleStudentChange">
          <a-select-option v-for="(item,index) in detailInfo.owner" :key="index" :value="item">
            {{ item }}
          </a-select-option>
        </a-select>
      </div>
      <gx-score :scoreEntryData="StudentScoreEntryData" :getInfoKeySource="detailInfo" v-if="detailInfo.course==='个训'"/>
      <jx-score :scoreEntryData="StudentScoreEntryData" :getInfoKeySource="detailInfo" v-if="detailInfo.course==='精细'"/>
      <yy-score :scoreEntryData="StudentScoreEntryData" :getInfoKeySource="detailInfo" v-if="detailInfo.course==='语言'"/>
      <sj-score :scoreEntryData="StudentScoreEntryData" :getInfoKeySource="detailInfo" v-if="detailInfo.course==='社交'"/>
      <jt-score :scoreEntryData="StudentScoreEntryData" :getInfoKeySource="detailInfo" v-if="detailInfo.course==='集体'"/>
    </div>
  </page-header-wrapper>
</template>
<script>
import storage from 'store'
import GxScore from 'components/common/EntryScoreTable/GxScore'
import JxScore from 'components/common/EntryScoreTable/JxScore'
import YyScore from 'components/common/EntryScoreTable/YyScore'
import SjScore from 'components/common/EntryScoreTable/SjScore'
import JtScore from 'components/common/EntryScoreTable/JtScore'
// import { StudentScoreEntryData } from 'someData/index.js'
import { getTherapistsTeachingTodayCourseDetail } from 'network/therapistsTeachingAndScore.js'
export default {
  name: 'TodayCourseScoreEntry',
  components: {
    GxScore,
    JxScore,
    YyScore,
    SjScore,
    JtScore
  },
  data () {
    return {
      detailInfo: {},
      StudentScoreEntryData: []
    }
  },
  created () {
    this.detailInfo = JSON.parse(this.$route.query.item)
    this.detailInfo.name = storage.get('INFO').name
    this.detailInfo.check = '计划'
    this.getTherapistsTeachingTodayCourseDetail(this.detailInfo)
    // console.log(this.detailInfo)
  },
  methods: {
    getTherapistsTeachingTodayCourseDetail (values) {
      console.log(values)
      getTherapistsTeachingTodayCourseDetail(values).then(res => {
        console.log(res)
        this.StudentScoreEntryData = res
      })
    },
    handleStudentChange (values) {
      console.log(values)
    }
  }
}
</script>
<style scoped>
.main-content {
  padding: 12px;
  background-color: white;
  min-height: 600px;
}
</style>
