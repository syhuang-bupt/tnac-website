<template>
  <page-header-wrapper :title="false">
    <div class="main-content">
      <br />
      <check-notice-model
        :isVisible="isCheckModelVisible"
        :noticeTitleAndContent="checkNiticeData"
        @checkNoticeModelClose="checkNoticeModelClose"/>
      <a-button class="editable-add-btn" @click="handleAdd">添加</a-button>
      <a-table bordered :data-source="noticeInfoData" :columns="columns" class="notice-table" :pagination="false">
        <span slot="noticeTitle" class="title-style">标题</span>
        <span slot="noticeDate" class="title-style">日期</span>
        <span slot="operation" class="title-style">操作</span>
        <template slot="noticeDate" slot-scope="noticeDate">
          <a>{{ noticeDate }}</a>
        </template>>
        <template slot="operation" slot-scope="text, record">
          <a style="margin-right:12px" @click="() => checkNoticeDetail(record.key)">查看</a>
          <a-popconfirm
            title="确定删除吗?"
            @confirm="() => onDelete(record.key)">
            <a href="javascript:;">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
    </div>
  </page-header-wrapper>
</template>
<script>
import { noticeInfoData } from 'someData/index.js'
import CheckNoticeModel from '@/components/common/Model/CheckNoticeModel'
export default {
  name: 'Notice',
  components: {
    CheckNoticeModel
  },
  data () {
    return {
      noticeInfoData,
      checkNiticeData: {},
      isCheckModelVisible: false,
      columns: [
        {
          dataIndex: 'noticeTitle',
          align: 'center',
          width: '43%',
          slots: { title: 'noticeTitle' }
        },
        {
          dataIndex: 'noticeDate',
          align: 'center',
          width: '43%',
          slots: { title: 'noticeDate' },
          scopedSlots: { customRender: 'noticeDate' }
        },
        {
          dataIndex: 'operation',
          align: 'center',
          width: '14%',
          slots: { title: 'operation' },
          scopedSlots: { customRender: 'operation' }
        }
      ]
    }
  },
  methods: {
    onDelete (key) {
      const noticeInfoData = [...this.noticeInfoData]
      this.noticeInfoData = noticeInfoData.filter(item => item.key !== key)
    },
    checkNoticeDetail (key) {
      this.checkNiticeData = this.noticeInfoData[key]
      this.isCheckModelVisible = true
    },
    handleAdd () {
      this.$router.push('/administration/notice/add')
    },
    checkNoticeModelClose () {
      this.isCheckModelVisible = false
    }
  }
}
</script>
<style scoped>
.editable-add-btn {
  margin-bottom: 8px;
  margin-left: 16px;
  margin-right: 16px;
}
.main-content {
  min-height: 600px;
  background-color: white;
}
.notice-table {
  margin-left: 16px;
  margin-right: 16px;
}
.title-style {
    font-size: 14px;
    font-weight: bold;
}
</style>
