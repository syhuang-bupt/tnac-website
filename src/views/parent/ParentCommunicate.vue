<template>
  <page-header-wrapper :title="false" >
    <div class="main-content">
      <a-list
        v-if="comments.length"
        :data-source="comments"
        class="infinite-list-wrapper"
        item-layout="horizontal"
      >
        <a-list-item slot="renderItem" slot-scope="item">
          <a-comment
            :author="item.author"
            :avatar="item.avatar"
            :content="item.content"
            :datetime="item.datetime"
          />
        </a-list-item>
      </a-list>
      <a-comment>
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        <div slot="content" style="text-align:center">
          <a-textarea :value="value" @change="handleChange" :auto-size="{ minRows: 4, maxRows: 8 }"/>
          <a-button html-type="submit" style="margin-top:10px" :loading="submitting" type="primary" @click="handleSubmit">
            发送
          </a-button>
        </div>
      </a-comment>
    </div>
  </page-header-wrapper>
</template>
<script>
import moment from 'moment'
export default {
  data () {
    return {
      comments: [
        {
          author: '王小明',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            '我们希望学校能够提供更多的学生上学数据和照片。',
          datetime: '2021-06-23 13:52'
        },
        {
          author: '王小明',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            '学校的办公电话多少啊？着急用。',
          datetime: '2021-06-22 08:25'
        }
      ],
      submitting: false,
      value: '',
      moment
    }
  },
  methods: {
    handleSubmit () {
      if (!this.value) {
        return
      }
      this.submitting = true
      setTimeout(() => {
        this.submitting = false
        this.comments = [
          {
            author: '王小明',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: this.value,
            datetime: moment().format('YYYY-MM-DD HH:mm')
          },
          ...this.comments
        ]
        this.value = ''
      }, 1000)
    },
    handleChange (e) {
      this.value = e.target.value
    }
  }
}
</script>

<style scoped>
.main-content {
  background-color: #fff;
  min-height: 600px;
  padding: 20px 12px 0 16px;

    /* -moz-box-shadow:2px 2px 3px rgb(156, 156, 156);
  -webkit-box-shadow:2px 2px 3px rgb(156, 156, 156);
  box-shadow:2px 2px 3px rgb(156, 156, 156); */
  background:#fff;
  -webkit-box-shadow: #666 0px 0px 5px;
  -moz-box-shadow: #666 0px 0px 5px;
  box-shadow: #666 0px 0px 5px;
}
.infinite-list-wrapper{
  height: 420px;
  overflow:auto;
}
</style>
