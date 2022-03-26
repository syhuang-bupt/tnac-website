<template>
  <a-table
    :columns="columns"
    :data-source="assessorAssessmentData"
    :pagination="pagination">
    <a-checkbox-group
      slot="gooddomain"
      slot-scope="gooddomain,record"
      name="checkboxgroup"
      class="checkboxgroup"
      :disabled="isDisabled[record.key]"
      :options="gooddomain"
      @change="value => onChange(record.name,value)"/>
    <span slot="state" slot-scope="state"><a-badge :color="state>=20 ? 'red':'green'"/>{{ state }}</span>
  </a-table>
</template>
<script>
const columns = [
  {
    title: '名字',
    dataIndex: 'name',
    width: '15%'
  },
  {
    title: '擅长领域',
    dataIndex: 'gooddomain',
    width: '70%',
    align: 'center',
    scopedSlots: { customRender: 'gooddomain' }
  },
  {
    title: '状态',
    dataIndex: 'state',
    width: '15%',
    scopedSlots: { customRender: 'state' }
  },
    {
      dataIndex: 'disabled',
      scopedSlots: { customRender: 'disabled' }
    }
]

const isDisabled = []
export default {
  name: 'NewAssessmentTable',
  props: {
    assessorAssessmentDataSource: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      columns,
      isDisabled,
      assessorAssessmentData: [],
      Choicesresult: {},
      pagination: {
        // 设置每一页的数据量
        pageSize: 5
      }
    }
  },
  watch: {
    'assessorAssessmentDataSource': function (val) {
      this.assessorAssessmentData = val
    }
  },
  created () {
    this.assessorAssessmentData = this.assessorAssessmentDataSource
    for (var i = 0; i < this.assessorAssessmentData.length; i++) {
      isDisabled[i] = this.assessorAssessmentData[i].state >= 10
    }
  },
  methods: {
    onChange (key, checkedValues) {
      // console.log('key = ', key)
      // console.log('checked = ', checkedValues)
      // this.Choicesresult是存储结果的对象，到时候点击提交发给服务器即可
      this.Choicesresult[key] = checkedValues
      if (checkedValues.length === 0) {
        delete this.Choicesresult[key]
      }
      // console.log(this.Choicesresult)
      // // 判断object对象是否为空
      // console.log(JSON.stringify(this.Choicesresult) === '{}')
    }
    // parenteClickYes () {
    // }
  }
}
</script>
<style scoped>

</style>
