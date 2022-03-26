<template>
  <page-header-wrapper :title="false">
    <div class="main-content">
      <div style="margin-bottom:20px">
        <span style="margin-right:12px; font-size:16px; font-weight:bold">{{ '学生姓名:' + '\u00a0' + detailInfo.owner }}</span>
      </div>
      <gx-maintain-score :scoreEntryData="StudentScoreEntryData" :getInfoKeySource="detailInfo" v-if="detailInfo.course==='个训'"/>
      <jx-maintain-score :scoreEntryData="StudentScoreEntryData" :getInfoKeySource="detailInfo" v-if="detailInfo.course==='精细'"/>
    </div>
  </page-header-wrapper>
</template>
<script>
import storage from 'store'
import GxMaintainScore from 'components/common/EntryScoreTable/GxMaintainScore'
import JxMaintainScore from 'components/common/EntryScoreTable/JxMaintainScore'
// import { StudentScoreEntryData } from 'someData/index.js'
import { getTherapistsTeachingTodayCourseDetail } from 'network/therapistsTeachingAndScore.js'
export default {
  name: 'MaintainMissonScoreEntry',
  data () {
    return {
      detailInfo: {},
      StudentScoreEntryData: []
    }
  },
  components: {
    GxMaintainScore,
    JxMaintainScore
  },
  created () {
    this.detailInfo = JSON.parse(this.$route.query.item)
    this.detailInfo.name = storage.get('INFO').name
    this.detailInfo.check = '维持'
    this.getTherapistsTeachingTodayCourseDetail(this.detailInfo)
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
