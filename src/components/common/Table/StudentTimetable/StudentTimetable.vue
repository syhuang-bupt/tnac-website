<template>
  <div>
    <a-modal
      :title="courseName"
      :width="'500px'"
      :visible="courseDetailVisible"
      @cancel="handleCourseDetailCancel"
    >
      <template slot="footer">
        <a-button key="back" @click="handleCourseDetailCancel" v-show="true">
          关闭
        </a-button>
      </template>
      <a-list item-layout="horizontal" :data-source="courseDetail" class="infinite-list-wrapper">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta
            :description="item.begin_date + '——' + item.end_date">
            <a slot="title">{{ item.value0 + '-' + item.value1 + (item.value2 ? '-' + item.value2 : '') }}</a>
          </a-list-item-meta>
          <div>{{ item.plan_type }}</div>
        </a-list-item>
      </a-list>
    </a-modal>
    <div class="dateSelectStyle">
      <a-radio-group :default-value="timetableDate" button-style="solid" @change="onDateChange">
        <a-radio-button value="weekdays">
          工作日
        </a-radio-button>
        <a-radio-button value="saturday">
          周六
        </a-radio-button>
        <a-radio-button value="sunday">
          周日
        </a-radio-button>
      </a-radio-group>
    </div>
    <a-table v-if="timetableDate==='weekdays'" bordered :data-source="courseData.weekdaysDataSource" :columns="columns">
      <template slot="title">
        <span style="font-size:16px;font-weight:bold">工作日</span>
      </template>
      <template slot="therapist" slot-scope="text, record">
        <span>{{ record.therapist }}</span>
        <span>{{ record.assistantTeacher !== '' && record.assistantTeacher ? '（' + record.assistantTeacher + '）' : '' }}</span>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a @click="() => checkCourseDetail(record)">查看</a>
      </template>
    </a-table>
    <a-table v-else-if="timetableDate==='saturday'" bordered :data-source="courseData.saturdayDataSource" :columns="columns">
      <template slot="title">
        <span style="font-size:16px;font-weight:bold">周六</span>
      </template>
      <template slot="therapist" slot-scope="text, record">
        <span>{{ record.therapist }}</span>
        <span>{{ record.assistantTeacher !== '' && record.assistantTeacher ? '（' + record.assistantTeacher + '）' : '' }}</span>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a @click="() => checkCourseDetail(record)">查看</a>
      </template>
    </a-table>
    <a-table v-else-if="timetableDate==='sunday'" bordered :data-source="courseData.sundayDataSource" :columns="columns">
      <template slot="title">
        <span style="font-size:16px;font-weight:bold">周日</span>
      </template>
      <template slot="therapist" slot-scope="text, record">
        <span>{{ record.therapist }}</span>
        <span>{{ record.assistantTeacher !== '' && record.assistantTeacher ? '（' + record.assistantTeacher + '）' : '' }}</span>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a @click="() => checkCourseDetail(record)">查看</a>
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
  name: 'StudentTimetableTable',
  props: {
    courseDataSource: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      timetableDate: 'weekdays',
      courseName: '',
      courseData: {},
      courseDetail: [],
      courseDetailVisible: false,
      columns: [
        {
          title: '开始时间',
          dataIndex: 'startTime',
          align: 'center',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.startTime < b.startTime ? 1 : -1
        },
        {
          title: '课程类型',
          dataIndex: 'courseType',
          width: '30%',
          align: 'center',
          scopedSlots: { customRender: 'courseType' }
        },
        {
          title: '康复师',
          dataIndex: 'therapist',
          align: 'center',
          scopedSlots: { customRender: 'therapist' }
        },
        {
          title: '操作',
          dataIndex: 'operation',
          align: 'center',
          width: '16%',
          scopedSlots: { customRender: 'operation' }
        }
      ]
    }
  },
  created () {
    this.courseData = this.courseDataSource
  },
  watch: {
    'courseDataSource': function (val) {
      this.courseData = val
    }
  },
  methods: {
    onDateChange (e) {
      this.timetableDate = e.target.value
    },
    handleCourseDetailCancel () {
      this.courseDetailVisible = false
    },
    checkCourseDetail (record) {
      this.courseDetailVisible = true
      this.courseName = record.courseType
      this.courseDetail = record.courseDetail
    }
  }
}
</script>

<style scoped>
.dateSelectStyle {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
}
</style>
