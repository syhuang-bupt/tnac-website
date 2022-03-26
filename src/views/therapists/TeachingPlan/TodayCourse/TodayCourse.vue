<template>
  <page-header-wrapper :title="false" >
    <div class="main-content">
      <a-card :bordered="false">
        <a-row>
          <a-col>
            <info title="我的待办" :value="PendingNumber"/>
          </a-col>
        </a-row>
      </a-card>
      <a-card
        style="margin-top: 24px"
        :bordered="false"
        title="教学任务">

        <div slot="extra">
          <a-button type="primary" :size="'large'" style="margin-right:347px;" disabled><a-icon type="printer"/>一键打印</a-button>
          <a-date-picker
            :default-value="moment()"
            @change="onDateChange"
            format="YYYY-MM-DD"
            :disabled-date="disabledDate"
          />
        </div>

        <a-list size="large">
          <a-list-item :key="index" v-for="(item, index) in data">
            <a-list-item-meta>
              <a slot="title" class="course-title" @click="courseScoreEntry(item)">{{ item.course }}</a>
              <span slot="description" v-for="(dItem,dIndex) in item.description" :key="dIndex">{{ dItem +'\u3000' }}</span>
            </a-list-item-meta>
            <div class="list-content">
              <div class="list-content-item">
                <p>{{ item.owner.length===1 ? item.owner[0] : '团体课' }}</p>
              </div>
              <div class="list-content-item">
                <span>开始时间</span>
                <p>{{ item.startTime }}</p>
              </div>
              <div class="list-content-item">
                <a-progress type="circle" :percent="item.progress.value" :width="60" />
              </div>
            </div>
          </a-list-item>
        </a-list>
      </a-card>
    </div>
  </page-header-wrapper>
</template>

<script>
import storage from 'store'
import { therapistsTeachingTodayCourse } from 'network/therapistsTeachingAndScore.js'
import Info from '../../components/Info'
import moment from 'moment'
export default {
  name: 'TodayCourse',
  components: {
    Info
  },
  data () {
    return {
      data: [],
      nowDate: '',
      PendingNumber: 0,
      getInfoKey: {}
    }
  },
  created () {
    this.getInfoKey.name = storage.get('INFO').name
    this.getInfoKey.date = moment().format('YYYY-MM-DD')
    this.nowDate = moment().format('YYYY-MM-DD')
    this.getInfoKey.check = '计划'
    this.therapistsTeachingTodayCourse(this.getInfoKey)
  },
  methods: {
    moment,
    therapistsTeachingTodayCourse (values) {
      console.log(values)
      therapistsTeachingTodayCourse(values).then(res => {
        console.log(res)
        this.data = res
        // 处理待办任务个数
        this.PendingNumber = 0
        for (var i = 0; i < res.length; i++) {
          if (res[i].progress.value !== 100) {
            this.PendingNumber++
          }
        }
      })
    },
    onDateChange (date, dateString) {
      this.getInfoKey.date = dateString
      this.nowDate = dateString
      this.therapistsTeachingTodayCourse(this.getInfoKey)
    },
    disabledDate (current) {
      // Can not select days before today and today
      return current && current > moment().add(2, 'days').endOf('day') || current < moment().subtract(3, 'days').endOf('day')
    },
    courseScoreEntry (item) {
      const detailInfo = JSON.stringify({
        course: item.course,
        startTime: item.startTime,
        owner: item.owner,
        date: this.nowDate
      })
      this.$router.push({
        path: '/therapists/teachingplan/todaycourse/scoreentry/detail',
        query: { item: detailInfo }
      })
      // console.log(item)
    }
  }
}
</script>

<style lang="less" scoped>
.list-content-item {
    color: rgba(0, 0, 0, .45);
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    margin-left: 138px;
    span {
        line-height: 20px;
        color: rgb(53, 53, 53);
    }
    p {
        margin-top: 4px;
        margin-bottom: 0;
        line-height: 22px;
        color: rgb(53, 53, 53);
    }
}
.course-title {
  font-weight: bold;
}
</style>
