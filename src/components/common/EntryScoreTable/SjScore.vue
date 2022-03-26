<template>
  <div>
    <a-table :columns="columns" :data-source="StudentScoreEntryData" bordered>
      <span slot="field" class="title-style">领域</span>
      <span slot="task" class="title-style">任务</span>
      <span slot="startTime" class="title-style">开始时间</span>
      <span slot="totalTimes" class="title-style">总次数</span>
      <span slot="correctTimes" class="title-style">通过次数</span>
      <span slot="correctRate" class="title-style">正确率</span>
      <span slot="operation" class="title-style">操作</span>
      <template slot="correctRate" slot-scope="correctRate">
        <a v-if="correctRate">{{ correctRate + '%' }}</a>
      </template>
      <template
        v-for="col in ['totalTimes', 'correctTimes']"
        :slot="col"
        slot-scope="text, record">
        <div :key="col">
          <a-input-number
            v-if="record.editable"
            class="input-number"
            style="margin: -5px 0;width:70px;"
            :value="text"
            @change="value => handleChange(value, record.key, col)"/>
          <template v-else>{{ text }}</template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record.key)">保存</a>
            <a-popconfirm title="确认取消吗?" @confirm="() => cancel(record.key)">
              <a>取消</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a :disabled="editingKey !== ''" @click="() => edit(record.key)">数据录入</a>
          </span>
        </div>
      </template>
    </a-table>
    <div style="display:flex;justify-content:center;margin-top:12px">
      <a-button type="primary" @click="exit">退出</a-button>
      <a-button type="danger" style="margin-left:12px" @click="uploadInfo">保存</a-button>
    </div>
  </div>
</template>

<script>
import { postTherapistsTeachingTodayCourseDetail } from 'network/therapistsTeachingAndScore.js'
const columns = [
  {
    dataIndex: 'field',
    key: 'field',
    align: 'center',
    slots: { title: 'field' }
  },
  {
    dataIndex: 'task',
    key: 'task',
    align: 'center',
    slots: { title: 'task' }
  },
  {
    dataIndex: 'startTime',
    key: 'startTime',
    align: 'center',
    slots: { title: 'startTime' }
  },
  {
    dataIndex: 'totalTimes',
    key: 'totalTimes',
    align: 'center',
    width: '12%',
    slots: { title: 'totalTimes' },
    scopedSlots: { customRender: 'totalTimes' }
  },
  {
    dataIndex: 'correctTimes',
    key: 'correctTimes',
    align: 'center',
    width: '12%',
    slots: { title: 'correctTimes' },
    scopedSlots: { customRender: 'correctTimes' }
  },
  {
    dataIndex: 'correctRate',
    key: 'correctRate',
    align: 'center',
    slots: { title: 'correctRate' },
    scopedSlots: { customRender: 'correctRate' }
  },
  {
    dataIndex: 'operation',
    align: 'center',
    width: '12%',
    slots: { title: 'operation' },
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  props: {
    scoreEntryData: {
      type: Array,
      default () {
        return []
      }
    },
    getInfoKeySource: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      columns,
      editingKey: '',
      StudentScoreEntryData: [],
      getInfoKey: {}
    }
  },
  watch: {
    'scoreEntryData': function (val) {
      this.StudentScoreEntryData = val
      this.cacheData = this.StudentScoreEntryData.map(item => ({ ...item }))
    }
  },
  created () {
    this.getInfoKey = this.getInfoKeySource
    this.StudentScoreEntryData = this.scoreEntryData
    this.cacheData = this.StudentScoreEntryData.map(item => ({ ...item }))
  },
  methods: {
    postTherapistsTeachingTodayCourseDetail (values) {
      console.log(values)
      postTherapistsTeachingTodayCourseDetail(values).then(res => {
        console.log(res)
        this.$message.success('成绩已录入')
      })
    },
    exit () {
      this.$router.push('/therapists/teachingplan/todaycourse')
    },
    uploadInfo () {
      this.getInfoKey.myclass = this.StudentScoreEntryData
      this.postTherapistsTeachingTodayCourseDetail(this.getInfoKey)
    },
    handleChange (value, key, column) {
      const newData = [...this.StudentScoreEntryData]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.StudentScoreEntryData = newData
      }
    },
    edit (key) {
      const newData = [...this.StudentScoreEntryData]
      console.log(newData)
      const target = newData.filter(item => key === item.key)[0]
      this.editingKey = key
      if (target) {
        target.editable = true
        this.StudentScoreEntryData = newData
      }
    },
    save (key) {
      const newData = [...this.StudentScoreEntryData]
      console.log(newData)
      const newCacheData = [...this.cacheData]
      const target = newData.filter(item => key === item.key)[0]
      const targetCache = newCacheData.filter(item => key === item.key)[0]
      if (!target.correctTimes || !target.totalTimes) {
        this.$message.error('请填写完整成绩信息。')
        return
      }
      if (target.correctTimes > target.totalTimes) {
        this.$message.error('通过次数不得大于总次数！')
        return
      }
      if (target && targetCache) {
        delete target.editable
        this.StudentScoreEntryData = newData
        Object.assign(targetCache, target)
        this.cacheData = newCacheData
        target.correctRate = (target.correctTimes / target.totalTimes * 100).toFixed(2)
        console.log(target)
      }
      this.editingKey = ''
    },
    cancel (key) {
      const newData = [...this.StudentScoreEntryData]
      console.log(newData)
      const target = newData.filter(item => key === item.key)[0]
      this.editingKey = ''
      const tmpData = this.cacheData.filter(item => key === item.key)[0]
      tmpData.correctRate = (tmpData.correctTimes / tmpData.totalTimes * 100).toFixed(2)
      if (target) {
        Object.assign(target, tmpData)
        delete target.editable
        this.StudentScoreEntryData = newData
      }
    }
  }
}
</script>

<style scoped>
  /* 使用 css 时可以用 >>> 进行样式穿透，达到覆盖样式的目的 */
.input-number >>> .ant-input-number-handler-wrap{
  display: none;
}
.title-style {
  font-size: 14px;
  font-weight: bold;
}
.editable-row-operations a {
  margin-right: 8px;
}
</style>
