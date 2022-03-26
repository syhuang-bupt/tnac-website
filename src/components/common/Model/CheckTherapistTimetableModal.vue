<template>
  <div>
    <a-modal
      title="查看课表"
      :visible="isVisible"
      @cancel="handleCancel">
      <template slot="footer">
        <a-button key="back" type="primary" @click="handleCancel" v-show="true">
          关闭
        </a-button>
      </template>
      <a-list size="large" bordered :data-source="therapistTimetable">
        <a-list-item slot="renderItem" slot-scope="item">
          <span>{{ item.dateProps + '（' + item.startTime + '）' }}</span>
          <span>{{ item.courseType + '（' + item.student + '）' }}</span>
        </a-list-item>
      </a-list>
    </a-modal>
  </div>
</template>
<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default () {
        return false
      }
    },
    therapistCourseData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      therapistTimetable: []
    }
  },
  created () {
    this.therapistTimetable = this.therapistCourseData
  },
  watch: {
    'therapistCourseData': function (val) {
      this.therapistTimetable = val
    }
  },
  methods: {
    handleCancel (e) {
      this.$emit('checkTimetableModelClose')
    }
  }
}
</script>
