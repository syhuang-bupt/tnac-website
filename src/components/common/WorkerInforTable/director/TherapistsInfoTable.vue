<template>
  <div>
    <check-therapist-timetable-modal
      :isVisible="isTimetableModalVisible"
      :therapistCourseData="therapistTimetableData"
      @checkTimetableModelClose="checkTimetableModelClose"/>
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="currentTherapistsData"
      bordered>
      <template slot="students" slot-scope="students">
        <span v-for="(item,index) in students" :key="index">{{ item + '\u00a0' + '\u00a0' }}</span>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <span>
            <a @click="() => checkTimetable(record)">课表</a>
          </span>
        </div>
      </template>
      <span slot="studentnum" slot-scope="studentnum"><a-badge :color="studentnum>=20?'red':'green'"/>{{ studentnum }}</span>
    </a-table>
  </div>
</template>
<script>
import CheckTherapistTimetableModal from '../../Model/CheckTherapistTimetableModal.vue'
const columns = [
  {
    title: '名字',
    dataIndex: 'name',
    width: '20%',
    align: 'center',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '已负责学生数',
    dataIndex: 'studentnum',
    width: '15%',
    align: 'center',
    scopedSlots: { customRender: 'studentnum' }
  },
  {
    title: '负责学生',
    width: '50%',
    align: 'center',
    dataIndex: 'students',
    scopedSlots: { customRender: 'students' }
  },
  {
    title: '操作',
    width: '15%',
    align: 'center',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]

export default {
  components: { CheckTherapistTimetableModal },
  name: 'TherapistsInfoTable',
  props: {
    therapistsData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentTherapistsData: this.therapistsData,
      columns,
      isTimetableModalVisible: false,
      selectedRowKeys: [],
      therapistTimetableData: []
    }
  },
  watch: {
    'therapistsData': function (val) {
      this.currentTherapistsData = val
    }
  },
  methods: {
    onSelectChange (selectedRowKeys) {
      // console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
      this.$emit('selectedTherapistsChange', selectedRowKeys)
    },
    checkTimetable (record) {
      this.isTimetableModalVisible = true
      this.therapistTimetableData = record.timetable
    },
    checkTimetableModelClose () {
      this.isTimetableModalVisible = false
    }
  }
}
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
