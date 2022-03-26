<template>
  <div>
    <a-table :columns="columns" :data-source="StudentScoreEntryData" bordered>
      <span slot="field" class="title-style">领域</span>
      <span slot="task" class="title-style">任务</span>
      <span slot="taskObjectives" class="title-style">任务目标</span>
      <span slot="startTime" class="title-style">开始时间</span>
      <span slot="exploratoryData" class="title-style">试探数据</span>
      <span slot="completeData" class="title-style">完成数据</span>
      <span slot="operation" class="title-style">操作</span>
      <span slot="exploratoryData" slot-scope="exploratoryData,record">
        <a-switch
          v-if="record.editable || record.exploratoryData!==null"
          :disabled="!record.editable"
          :checked="record.exploratoryData"
          checked-children="+"
          un-checked-children="-"
          @change="exploratoryDataChange(record.key)"/>
        <span v-else></span>
      </span>
      <span slot="completeData" slot-scope="completeData,record">
        <a-switch
          v-if="record.editable || record.completeData!==null"
          :disabled="!record.editable"
          :checked="record.completeData"
          checked-children="+"
          un-checked-children="-"
          @change="completeDataChange(record.key)"/>
        <span v-else></span>
      </span>
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
    dataIndex: 'taskObjectives',
    key: 'taskObjectives',
    align: 'center',
    slots: { title: 'taskObjectives' }
  },
  {
    dataIndex: 'startTime',
    key: 'startTime',
    align: 'center',
    slots: { title: 'startTime' }
  },
  {
    dataIndex: 'exploratoryData',
    key: 'exploratoryData',
    align: 'center',
    width: '15%',
    slots: { title: 'exploratoryData' },
    scopedSlots: { customRender: 'exploratoryData' }
  },
  {
    dataIndex: 'completeData',
    key: 'completeData',
    align: 'center',
    width: '15%',
    slots: { title: 'completeData' },
    scopedSlots: { customRender: 'completeData' }
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
  watch: {
    'scoreEntryData': function (val) {
      this.StudentScoreEntryData = val
      this.cacheData = this.StudentScoreEntryData.map(item => ({ ...item }))
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
    edit (key) {
      const newData = [...this.StudentScoreEntryData]
      const target = newData.filter(item => key === item.key)[0]
      this.editingKey = key
      if (target) {
        target.editable = true
        this.StudentScoreEntryData = newData
      }
    },
    save (key) {
      const newData = [...this.StudentScoreEntryData]
      const newCacheData = [...this.cacheData]
      const target = newData.filter(item => key === item.key)[0]
      const targetCache = newCacheData.filter(item => key === item.key)[0]
      if (target && targetCache) {
        delete target.editable
        this.StudentScoreEntryData = newData
        Object.assign(targetCache, target)
        this.cacheData = newCacheData
        if (target.exploratoryData === null) {
          target.exploratoryData = false
          target.completeData = false
        }
      }
      this.editingKey = ''
    },
    cancel (key) {
      const newData = [...this.StudentScoreEntryData]
      const target = newData.filter(item => key === item.key)[0]
      this.editingKey = ''
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
        delete target.editable
        this.StudentScoreEntryData = newData
      }
    },
    exploratoryDataChange (key) {
      this.StudentScoreEntryData[key].exploratoryData = !this.StudentScoreEntryData[key].exploratoryData
    },
    completeDataChange (key) {
      this.StudentScoreEntryData[key].completeData = !this.StudentScoreEntryData[key].completeData
    }
  }
}
</script>

<style scoped>
  /* 使用 css 时可以用 >>> 进行样式穿透，达到覆盖样式的目的 */
.title-style {
  font-size: 14px;
  font-weight: bold;
}
.editable-row-operations a {
  margin-right: 8px;
}
</style>
