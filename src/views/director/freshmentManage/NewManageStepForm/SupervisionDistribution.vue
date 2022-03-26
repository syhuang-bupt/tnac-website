<template>
  <div class="main-content">
    <a-alert
      :closable="true"
      message="班级选择和督导分配为必选项，请在选择后点击下一步！"
      style="margin-bottom: 24px;"/>
    <div class="class-select">
      <span class="class-select-text">选择班级：</span>
      <a-radio-group v-model="classValue">
        <a-radio v-for="(item,index) in classCategory" :value="item" :key="index" style="font-size:14px;font-weight:bold">{{ item }}</a-radio>
      </a-radio-group>
    </div>
    <supervision-distribution-table @selectedChange="selectedChange" :defaultSupervision="supervisionValue" class="supervision-table"></supervision-distribution-table>
    <a-button type="primary" class="nextBtn" @click="nextStep">{{ supervisionState.state?'下一步':'提交' }}</a-button>
  </div>
</template>

<script>
import SupervisionDistributionTable from '@/components/common/NewStudentDistribution/SupervisionDistributionTable'
import { postAssignedSupervisorData } from 'network/postAssignedData.js'
export default {
  name: 'SupervisionDistribution',
  components: {
    SupervisionDistributionTable
  },
  props: {
    nameid: {
      type: String,
      default () {
        return ''
      }
    },
    // 分配情况
    distributionSupervisionData: {
      type: Object,
      default () {
        return {}
      }
    },
    distributionClassData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    'distributionSupervisionData': function (val) {
      this.supervisionState = val
      if (this.supervisionState.state) {
        this.supervisionValue = this.supervisionState.detail
      }
    },
    'distributionClassData': function (val) {
      this.classState = val
      if (this.classState.state) {
        this.classValue = this.classState.detail
      }
    }
  },
  data () {
    return {
      supervisionState: {},
      classState: {},
      classValue: '',
      supervisionValue: '',
      classCategory: ['密集个训', '融合预备班--初', '融合预备班--中', '融合预备班--高', '普小融合衔接班']
    }
  },
  methods: {
    postAssignedSupervisorData (values) {
      postAssignedSupervisorData(values).then(res => {
        console.log(res)
      })
    },
    nextStep () {
      if (this.supervisionValue !== '' && this.classValue !== '') {
        const values = {
          supervisionValue: this.supervisionValue,
          classValue: this.classValue,
          name: this.nameid
        }
        if (!this.supervisionState.state) {
          this.postAssignedSupervisorData(values)
        }
        this.$emit('nextStep')
      } else if (this.classValue === '' && this.supervisionValue === '') {
        this.$message.warning('请选择班级和督导')
      } else if (this.supervisionValue === '') {
        this.$message.warning('请选择一名督导')
      } else {
        this.$message.warning('请选择班级')
      }
    },
    selectedChange (val) {
      this.supervisionValue = val
      // console.log(this.supervisionValue)
    }
  }
}
</script>

<style scoped>
.main-content {
  text-align: center;
}
.class-select {
  text-align: left;
  margin-top: 20px;
}
.class-select-text {
  font-size: 14px;
  font-weight: bold;
}
.supervision-table {
  margin-top: 15px;
}
</style>
