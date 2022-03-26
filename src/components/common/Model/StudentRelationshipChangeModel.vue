<template>
  <div>
    <a-modal
      title="学生关系修改"
      :visible="visible"
      :destroyOnClose="true"
      :confirm-loading="confirmLoading"
      :dialog-style="{ top: '150px', left: '250px' }"
      @ok="handleOk"
      @cancel="handleCancel">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
        <a-form-item label="督导">
          <a-select placeholder="督导" @change="handleSupervisionSelectChange" :defaultValue="originSupervision">
            <a-select-option v-for="(item,index) in supervisionArray" :value="item" :key="index">
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="班级">
          <a-select placeholder="班级" @change="handleClassSelectChange" :defaultValue="originClass">
            <a-select-option v-for="(item,index) in classTypeArray" :value="item" :key="index">
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: 'StudentRelationshipChangeModel',
  props: {
    visible: {
      type: Boolean,
      default () {
        return ''
      }
    },
    allSupervision: {
      type: Array,
      default () {
        return []
      }
    },
    originSupervision: {
      type: String,
      default () {
        return ''
      }
    },
    originClass: {
      type: String,
      default () {
        return ''
      }
    }
  },
  watch: {
    'allSupervision': function (val) {
      this.supervisionArray = this.allSupervision
    }
  },
  data () {
    return {
      confirmLoading: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      supervisionArray: [],
      classTypeArray: ['密集个训', '融合预备班--初', '融合预备班--中', '融合预备班--高', '普小融合衔接班'],
      finalSupervision: '',
      finalClass: ''
    }
  },
  created () {
    this.supervisionArray = this.allSupervision
  },
  methods: {
    handleOk (e) {
      this.confirmLoading = true
      setTimeout(() => {
        this.confirmLoading = false
        this.handleSubmit(e)
      }, 1000)
    },
    handleCancel (e) {
      // 如果点击取消。就直接关闭弹窗了，不对数据做处理
      console.log('Clicked cancel button')
      this.$emit('closeRelationshipModelCancel')
    },
    handleSubmit (e) {
      console.log('我点击了提交')
      this.$emit('closeRelationshipModelOk', this.finalSupervision, this.finalClass)
    },
    handleSupervisionSelectChange (value) {
      this.finalSupervision = value
    },
    handleClassSelectChange (value) {
      this.finalClass = value
    }
  }
}
</script>
