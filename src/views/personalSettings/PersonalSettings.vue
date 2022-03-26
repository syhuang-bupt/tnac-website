<template>
  <div class="main-content">
    <h2>个人设置</h2>
    <a-modal
      title="密码修改"
      :visible="visible"
      :confirm-loading="confirmLoading"
      :dialog-style="{ top: '150px', left: '120px' }"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
      >
        <a-form-item>
          <a-input-password
            v-decorator="['currentPassword',{ rules: [{ required: true, message: '未填写' }] },]"
            type="password"
            autocomplete
            placeholder="输入原密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-input-password
            v-decorator="['newPassword',{ rules: [{ required: true, message: '未填写' }] },]"
            type="password"
            autocomplete
            placeholder="输入新密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-input-password
            v-decorator="['confirmPassword',{ rules: [{ required: true, message: '未填写' }] },]"
            type="password"
            autocomplete
            placeholder="确认新密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input-password>
        </a-form-item>
      </a-form>
    </a-modal>
    <a-list
      itemLayout="horizontal"
      :dataSource="settingsData"
    >
      <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
        <a-list-item-meta>
          <a slot="title">{{ item.title }}</a>
          <span slot="description">
            <span class="security-list-description">{{ item.description }}</span>
            <span class="security-list-value">{{ item.value }}</span>
          </span>
        </a-list-item-meta>
        <template>
          <a slot="actions" :disabled="item.isDisabled" @click="editClick()">修改</a>
        </template>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import { passwordScore } from '@/utils/passwordScore.js'
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'changePassword' })
  },
  data () {
    return {
      visible: false,
      confirmLoading: false,
      phoneNumber: '18810886666',
      password: '123456',
      // email: 'xm.wang@163.com',
      settingsData: [{ title: '手机号', description: '已绑定手机：', value: '', isDisabled: true },
                     { title: '帐户密码', description: '当前密码强度：', value: '', isDisabled: false }
                    //  { title: '邮箱', description: '已绑定邮箱：', value: '', isDisabled: true }
                    ]
    }
  },
  created () {
    this.settingsData[0].value = this.phoneNumber
    // this.settingsData[2].value = this.email
    this.judgePasswordStrength(this.password)
  },
  methods: {
    editClick (index) {
      this.visible = true
    },
    judgePasswordStrength (password) {
      if (passwordScore(password) === 0) {
        this.settingsData[1].value = '弱'
      } else if (passwordScore(password) === 1) {
        this.settingsData[1].value = '一般'
      } else if (passwordScore(password) === 2) {
        this.settingsData[1].value = '中等'
      } else if (passwordScore(password) === 3) {
        this.settingsData[1].value = '强'
      } else {
        this.settingsData[1].value = '安全'
      }
    },
    handleOk (e) {
      this.confirmLoading = true
      setTimeout(() => {
        this.form.validateFields((err, values) => {
          if (!err) {
            if (values.currentPassword !== this.password) {
              alert('原密码输入错误')
              this.confirmLoading = false
            } else if (values.newPassword !== values.confirmPassword) {
              alert('两次输入的新密码不一致')
              this.confirmLoading = false
            } else if (values.currentPassword === values.newPassword) {
              alert('新密码不能与原密码相同')
              this.confirmLoading = false
            } else {
              this.password = values.newPassword
              this.judgePasswordStrength(this.password)
              this.visible = false
              this.confirmLoading = false

              // *****在这里写发送新密码到后端的代码
            }
          } else {
            this.confirmLoading = false
          }
        })
      }, 2000)
    },
    handleCancel (e) {
      console.log('Clicked cancel button')
      this.visible = false
    }
  }
}
</script>

<style scoped>
.main-content {
  padding: 20px 20px 6px 24px;
  background-color: #fff;
  min-height: 600px;
}
.input-style {
  width: 500px;
}
</style>
