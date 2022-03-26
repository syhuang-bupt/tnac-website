<template>
  <div class="main-content">
    <div v-if="nowStep==='dataUpload'">
      <a-select v-model="nowPage" style="width: 260px" @change="handleChange">
        <a-select-option value="milepost-stage1">
          里程碑评估-第一阶段
        </a-select-option>
        <a-select-option value="milepost-stage2">
          里程碑评估-第二阶段
        </a-select-option>
        <a-select-option value="milepost-stage3">
          里程碑评估-第三阶段
        </a-select-option>
        <a-select-option value="obstacle">
          障碍评估
        </a-select-option>
        <a-select-option value="transition">
          转衔评估
        </a-select-option>
      </a-select>
      <div class="form-main-style">
        <a-form
          id="components-form-demo-validate-other"
          :form="form"
          v-bind="formItemLayout"
        >
          <div v-show="nowPage === 'milepost-stage1'" class="infinite-list-wrapper">
            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(1) 提要求</div>
                  <a-form-item label="1M" class="form-content">
                    <a-radio-group v-decorator="['L1Q1-m1',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="2M" class="form-content">
                    <a-radio-group v-decorator="['L1Q1-m2',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="3M" class="form-content">
                    <a-radio-group v-decorator="['L1Q1-m3',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="4M" class="form-content">
                    <a-radio-group v-decorator="['L1Q1-m4',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="5M" class="form-content">
                    <a-radio-group v-decorator="['L1Q1-m5',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(2) 命名</div>
                  <a-form-item label="1M" class="form-content">
                    <a-radio-group v-decorator="['L1Q2-m1',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="2M" class="form-content">
                    <a-radio-group v-decorator="['L1Q2-m2',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="3M" class="form-content">
                    <a-radio-group v-decorator="['L1Q2-m3',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="4M" class="form-content">
                    <a-radio-group v-decorator="['L1Q2-m4',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="5M" class="form-content">
                    <a-radio-group v-decorator="['L1Q2-m5',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(3) 听者反应</div>
                  <a-form-item label="1M" class="form-content">
                    <a-radio-group v-decorator="['L1Q3-m1',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="2M" class="form-content">
                    <a-radio-group v-decorator="['L1Q3-m2',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="3M" class="form-content">
                    <a-radio-group v-decorator="['L1Q3-m3',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="4M" class="form-content">
                    <a-radio-group v-decorator="['L1Q3-m4',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="5M" class="form-content">
                    <a-radio-group v-decorator="['L1Q3-m5',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(4) 视觉配对</div>
                  <a-form-item label="1M" class="form-content">
                    <a-radio-group v-decorator="['L1Q4-m1',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="2M" class="form-content">
                    <a-radio-group v-decorator="['L1Q4-m2',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="3M" class="form-content">
                    <a-radio-group v-decorator="['L1Q4-m3',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="4M" class="form-content">
                    <a-radio-group v-decorator="['L1Q4-m4',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="5M" class="form-content">
                    <a-radio-group v-decorator="['L1Q4-m5',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(5) 独立游戏</div>
                  <a-form-item label="1M" class="form-content">
                    <a-radio-group v-decorator="['L1Q5-m1',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="2M" class="form-content">
                    <a-radio-group v-decorator="['L1Q5-m2',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="3M" class="form-content">
                    <a-radio-group v-decorator="['L1Q5-m3',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="4M" class="form-content">
                    <a-radio-group v-decorator="['L1Q5-m4',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="5M" class="form-content">
                    <a-radio-group v-decorator="['L1Q5-m5',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(6) 社交</div>
                  <a-form-item label="1M" class="form-content">
                    <a-radio-group v-decorator="['L1Q6-m1',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="2M" class="form-content">
                    <a-radio-group v-decorator="['L1Q6-m2',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="3M" class="form-content">
                    <a-radio-group v-decorator="['L1Q6-m3',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="4M" class="form-content">
                    <a-radio-group v-decorator="['L1Q6-m4',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="5M" class="form-content">
                    <a-radio-group v-decorator="['L1Q6-m5',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(7) 动作模仿</div>
                  <a-form-item label="1M" class="form-content">
                    <a-radio-group v-decorator="['L1Q7-m1',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="2M" class="form-content">
                    <a-radio-group v-decorator="['L1Q7-m2',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="3M" class="form-content">
                    <a-radio-group v-decorator="['L1Q7-m3',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="4M" class="form-content">
                    <a-radio-group v-decorator="['L1Q7-m4',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="5M" class="form-content">
                    <a-radio-group v-decorator="['L1Q7-m5',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(8) 仿说</div>
                  <a-form-item label="1M" class="form-content">
                    <a-radio-group v-decorator="['L1Q8-m1',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="2M" class="form-content">
                    <a-radio-group v-decorator="['L1Q8-m2',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="3M" class="form-content">
                    <a-radio-group v-decorator="['L1Q8-m3',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="4M" class="form-content">
                    <a-radio-group v-decorator="['L1Q8-m4',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="5M" class="form-content">
                    <a-radio-group v-decorator="['L1Q8-m5',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(9) 自发性语音行为</div>
                  <a-form-item label="1M" class="form-content">
                    <a-radio-group v-decorator="['L1Q9-m1',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="2M" class="form-content">
                    <a-radio-group v-decorator="['L1Q9-m2',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="3M" class="form-content">
                    <a-radio-group v-decorator="['L1Q9-m3',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="4M" class="form-content">
                    <a-radio-group v-decorator="['L1Q9-m4',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="5M" class="form-content">
                    <a-radio-group v-decorator="['L1Q9-m5',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
            </a-row>
          </div>
          <div v-show="nowPage === 'milepost-stage2'" class="infinite-list-wrapper">
            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(1) 提要求</div>
                  <a-form-item label="6M" class="form-content">
                    <a-radio-group v-decorator="['L2Q1-m6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="7M" class="form-content">
                    <a-radio-group v-decorator="['L2Q1-m7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="8M" class="form-content">
                    <a-radio-group v-decorator="['L2Q1-m8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="9M" class="form-content">
                    <a-radio-group v-decorator="['L2Q1-m9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="10M" class="form-content">
                    <a-radio-group v-decorator="['L2Q1-m10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(2) 命名</div>
                  <a-form-item label="6M" class="form-content">
                    <a-radio-group v-decorator="['L2Q2-m6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="7M" class="form-content">
                    <a-radio-group v-decorator="['L2Q2-m7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="8M" class="form-content">
                    <a-radio-group v-decorator="['L2Q2-m8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="9M" class="form-content">
                    <a-radio-group v-decorator="['L2Q2-m9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="10M" class="form-content">
                    <a-radio-group v-decorator="['L2Q2-m10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(3) 听者反应</div>
                  <a-form-item label="6M" class="form-content">
                    <a-radio-group v-decorator="['L2Q3-m6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="7M" class="form-content">
                    <a-radio-group v-decorator="['L2Q3-m7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="8M" class="form-content">
                    <a-radio-group v-decorator="['L2Q3-m8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="9M" class="form-content">
                    <a-radio-group v-decorator="['L2Q3-m9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="10M" class="form-content">
                    <a-radio-group v-decorator="['L2Q3-m10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(4) 视觉配对</div>
                  <a-form-item label="6M" class="form-content">
                    <a-radio-group v-decorator="['L2Q4-m6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="7M" class="form-content">
                    <a-radio-group v-decorator="['L2Q4-m7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="8M" class="form-content">
                    <a-radio-group v-decorator="['L2Q4-m8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="9M" class="form-content">
                    <a-radio-group v-decorator="['L2Q4-m9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="10M" class="form-content">
                    <a-radio-group v-decorator="['L2Q4-m10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(5) 独立游戏</div>
                  <a-form-item label="6M" class="form-content">
                    <a-radio-group v-decorator="['L2Q5-m6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="7M" class="form-content">
                    <a-radio-group v-decorator="['L2Q5-m7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="8M" class="form-content">
                    <a-radio-group v-decorator="['L2Q5-m8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="9M" class="form-content">
                    <a-radio-group v-decorator="['L2Q5-m9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="10M" class="form-content">
                    <a-radio-group v-decorator="['L2Q5-m10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(6) 社交</div>
                  <a-form-item label="6M" class="form-content">
                    <a-radio-group v-decorator="['L2Q6-m6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="7M" class="form-content">
                    <a-radio-group v-decorator="['L2Q6-m7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="8M" class="form-content">
                    <a-radio-group v-decorator="['L2Q6-m8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="9M" class="form-content">
                    <a-radio-group v-decorator="['L2Q6-m9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="10M" class="form-content">
                    <a-radio-group v-decorator="['L2Q6-m10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(7) 动作模仿</div>
                  <a-form-item label="6M" class="form-content">
                    <a-radio-group v-decorator="['L2Q7-m6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="7M" class="form-content">
                    <a-radio-group v-decorator="['L2Q7-m7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="8M" class="form-content">
                    <a-radio-group v-decorator="['L2Q7-m8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="9M" class="form-content">
                    <a-radio-group v-decorator="['L2Q7-m9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="10M" class="form-content">
                    <a-radio-group v-decorator="['L2Q7-m10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(8) 仿说</div>
                  <a-form-item label="6M" class="form-content">
                    <a-radio-group v-decorator="['L2Q8-m6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="7M" class="form-content">
                    <a-radio-group v-decorator="['L2Q8-m7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="8M" class="form-content">
                    <a-radio-group v-decorator="['L2Q8-m8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="9M" class="form-content">
                    <a-radio-group v-decorator="['L2Q8-m9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="10M" class="form-content">
                    <a-radio-group v-decorator="['L2Q8-m10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(9) 复杂指认</div>
                  <a-form-item label="6M" class="form-content">
                    <a-radio-group v-decorator="['L2Q9-m6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="7M" class="form-content">
                    <a-radio-group v-decorator="['L2Q9-m7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="8M" class="form-content">
                    <a-radio-group v-decorator="['L2Q9-m8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="9M" class="form-content">
                    <a-radio-group v-decorator="['L2Q9-m9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="10M" class="form-content">
                    <a-radio-group v-decorator="['L2Q9-m10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(10) 对话</div>
                  <a-form-item label="6M" class="form-content">
                    <a-radio-group v-decorator="['L2Q10-m6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="7M" class="form-content">
                    <a-radio-group v-decorator="['L2Q10-m7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="8M" class="form-content">
                    <a-radio-group v-decorator="['L2Q10-m8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="9M" class="form-content">
                    <a-radio-group v-decorator="['L2Q10-m9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="10M" class="form-content">
                    <a-radio-group v-decorator="['L2Q10-m10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(11) 教师常规及集体能力</div>
                  <a-form-item label="6M" class="form-content">
                    <a-radio-group v-decorator="['L2Q11-m6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="7M" class="form-content">
                    <a-radio-group v-decorator="['L2Q11-m7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="8M" class="form-content">
                    <a-radio-group v-decorator="['L2Q11-m8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="9M" class="form-content">
                    <a-radio-group v-decorator="['L2Q11-m9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="10M" class="form-content">
                    <a-radio-group v-decorator="['L2Q11-m10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(12) 语言结构</div>
                  <a-form-item label="6M" class="form-content">
                    <a-radio-group v-decorator="['L2Q12-m6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="7M" class="form-content">
                    <a-radio-group v-decorator="['L2Q12-m7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="8M" class="form-content">
                    <a-radio-group v-decorator="['L2Q12-m8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="9M" class="form-content">
                    <a-radio-group v-decorator="['L2Q12-m9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="10M" class="form-content">
                    <a-radio-group v-decorator="['L2Q12-m10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>
          </div>
          <div v-show="nowPage === 'milepost-stage3'" class="infinite-list-wrapper">
            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(1) 提要求</div>
                  <a-form-item label="11M" class="form-content">
                    <a-radio-group v-decorator="['L3Q1-m11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="12M" class="form-content">
                    <a-radio-group v-decorator="['L3Q1-m12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="13M" class="form-content">
                    <a-radio-group v-decorator="['L3Q1-m13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="14M" class="form-content">
                    <a-radio-group v-decorator="['L3Q1-m14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="15M" class="form-content">
                    <a-radio-group v-decorator="['L3Q1-m15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(2) 命名</div>
                  <a-form-item label="11M" class="form-content">
                    <a-radio-group v-decorator="['L3Q2-m11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="12M" class="form-content">
                    <a-radio-group v-decorator="['L3Q2-m12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="13M" class="form-content">
                    <a-radio-group v-decorator="['L3Q2-m13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="14M" class="form-content">
                    <a-radio-group v-decorator="['L3Q2-m14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="15M" class="form-content">
                    <a-radio-group v-decorator="['L3Q2-m15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(3) 听者反应</div>
                  <a-form-item label="11M" class="form-content">
                    <a-radio-group v-decorator="['L3Q3-m11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="12M" class="form-content">
                    <a-radio-group v-decorator="['L3Q3-m12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="13M" class="form-content">
                    <a-radio-group v-decorator="['L3Q3-m13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="14M" class="form-content">
                    <a-radio-group v-decorator="['L3Q3-m14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="15M" class="form-content">
                    <a-radio-group v-decorator="['L3Q3-m15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(4) 视觉配对</div>
                  <a-form-item label="11M" class="form-content">
                    <a-radio-group v-decorator="['L3Q4-m11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="12M" class="form-content">
                    <a-radio-group v-decorator="['L3Q4-m12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="13M" class="form-content">
                    <a-radio-group v-decorator="['L3Q4-m13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="14M" class="form-content">
                    <a-radio-group v-decorator="['L3Q4-m14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="15M" class="form-content">
                    <a-radio-group v-decorator="['L3Q4-m15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(5) 独立游戏</div>
                  <a-form-item label="11M" class="form-content">
                    <a-radio-group v-decorator="['L3Q5-m11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="12M" class="form-content">
                    <a-radio-group v-decorator="['L3Q5-m12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="13M" class="form-content">
                    <a-radio-group v-decorator="['L3Q5-m13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="14M" class="form-content">
                    <a-radio-group v-decorator="['L3Q5-m14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="15M" class="form-content">
                    <a-radio-group v-decorator="['L3Q5-m15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(6) 社交</div>
                  <a-form-item label="11M" class="form-content">
                    <a-radio-group v-decorator="['L3Q6-m11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="12M" class="form-content">
                    <a-radio-group v-decorator="['L3Q6-m12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="13M" class="form-content">
                    <a-radio-group v-decorator="['L3Q6-m13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="14M" class="form-content">
                    <a-radio-group v-decorator="['L3Q6-m14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="15M" class="form-content">
                    <a-radio-group v-decorator="['L3Q6-m15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(7) 阅读</div>
                  <a-form-item label="11M" class="form-content">
                    <a-radio-group v-decorator="['L3Q7-m11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="12M" class="form-content">
                    <a-radio-group v-decorator="['L3Q7-m12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="13M" class="form-content">
                    <a-radio-group v-decorator="['L3Q7-m13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="14M" class="form-content">
                    <a-radio-group v-decorator="['L3Q7-m14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="15M" class="form-content">
                    <a-radio-group v-decorator="['L3Q7-m15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(8) 书写</div>
                  <a-form-item label="11M" class="form-content">
                    <a-radio-group v-decorator="['L3Q8-m11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="12M" class="form-content">
                    <a-radio-group v-decorator="['L3Q8-m12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="13M" class="form-content">
                    <a-radio-group v-decorator="['L3Q8-m13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="14M" class="form-content">
                    <a-radio-group v-decorator="['L3Q8-m14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="15M" class="form-content">
                    <a-radio-group v-decorator="['L3Q8-m15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(9) 复杂指认</div>
                  <a-form-item label="11M" class="form-content">
                    <a-radio-group v-decorator="['L3Q9-m11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="12M" class="form-content">
                    <a-radio-group v-decorator="['L3Q9-m12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="13M" class="form-content">
                    <a-radio-group v-decorator="['L3Q9-m13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="14M" class="form-content">
                    <a-radio-group v-decorator="['L3Q9-m14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="15M" class="form-content">
                    <a-radio-group v-decorator="['L3Q9-m15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(10) 对话</div>
                  <a-form-item label="11M" class="form-content">
                    <a-radio-group v-decorator="['L3Q10-m11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="12M" class="form-content">
                    <a-radio-group v-decorator="['L3Q10-m12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="13M" class="form-content">
                    <a-radio-group v-decorator="['L3Q10-m13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="14M" class="form-content">
                    <a-radio-group v-decorator="['L3Q10-m14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="15M" class="form-content">
                    <a-radio-group v-decorator="['L3Q10-m15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(11) 教师常规及集体能力</div>
                  <a-form-item label="11M" class="form-content">
                    <a-radio-group v-decorator="['L3Q11-m11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="12M" class="form-content">
                    <a-radio-group v-decorator="['L3Q11-m12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="13M" class="form-content">
                    <a-radio-group v-decorator="['L3Q11-m13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="14M" class="form-content">
                    <a-radio-group v-decorator="['L3Q11-m14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="15M" class="form-content">
                    <a-radio-group v-decorator="['L3Q11-m15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(12) 语言结构</div>
                  <a-form-item label="11M" class="form-content">
                    <a-radio-group v-decorator="['L3Q12-m11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="12M" class="form-content">
                    <a-radio-group v-decorator="['L3Q12-m12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="13M" class="form-content">
                    <a-radio-group v-decorator="['L3Q12-m13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="14M" class="form-content">
                    <a-radio-group v-decorator="['L3Q12-m14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="15M" class="form-content">
                    <a-radio-group v-decorator="['L3Q12-m15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div >
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12">
                <div>
                  <div class="secondary-title">(13) 算术</div>
                  <a-form-item label="11M" class="form-content">
                    <a-radio-group v-decorator="['L3Q13-m11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="12M" class="form-content">
                    <a-radio-group v-decorator="['L3Q13-m12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="13M" class="form-content">
                    <a-radio-group v-decorator="['L3Q13-m13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="14M" class="form-content">
                    <a-radio-group v-decorator="['L3Q13-m14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>

                  <a-form-item label="15M" class="form-content">
                    <a-radio-group v-decorator="['L3Q13-m15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                      <a-radio value="0" class="radio-item">0</a-radio>
                      <a-radio value="1/2" class="radio-item">1/2</a-radio>
                      <a-radio value="1" class="radio-item">1</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </div>
              </a-col>
              <a-col :span="12">
              </a-col>
            </a-row>
          </div>
          <div v-show="nowPage === 'obstacle'" class="infinite-list-wrapper">
            <div style="margin-top:12px">
              <a-form-item label="1）行为问题">
                <a-radio-group v-decorator="['P2-Q1',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="2）教学控制">
                <a-radio-group v-decorator="['P2-Q2',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="3）有缺陷的提要求">
                <a-radio-group v-decorator="['P2-Q3',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="4）有缺陷的命名">
                <a-radio-group v-decorator="['P2-Q4',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="5）有缺陷的仿说">
                <a-radio-group v-decorator="['P2-Q5',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="6）有缺陷的动作模仿">
                <a-radio-group v-decorator="['P2-Q6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
            </div>

            <div style="margin-top:12px">
              <a-form-item label="7）有缺陷的视觉配对">
                <a-radio-group v-decorator="['P2-Q7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="8）有缺陷的听者技能">
                <a-radio-group v-decorator="['P2-Q8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="9）有缺陷的对话技能">
                <a-radio-group v-decorator="['P2-Q9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="10）有缺陷的社会技能">
                <a-radio-group v-decorator="['P2-Q10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="11）依赖辅助">
                <a-radio-group v-decorator="['P2-Q11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="12）猜想式反应">
                <a-radio-group v-decorator="['P2-Q12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
            </div>

            <div style="margin-top:12px">
              <a-form-item label="13）有缺陷的扫视技能">
                <a-radio-group v-decorator="['P2-Q13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="14）有缺陷的条件性辨别">
                <a-radio-group v-decorator="['P2-Q14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="15）不能泛化">
                <a-radio-group v-decorator="['P2-Q15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="16）薄弱动机">
                <a-radio-group v-decorator="['P2-Q16',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="17）行为稍难就减低动机">
                <a-radio-group v-decorator="['P2-Q17',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="18）依赖强化物">
                <a-radio-group v-decorator="['P2-Q18',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
            </div>

            <div style="margin-top:12px">
              <a-form-item label="19）自我刺激">
                <a-radio-group v-decorator="['P2-Q19',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="20）有缺陷的表达">
                <a-radio-group v-decorator="['P2-Q20',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="21）强迫性行为">
                <a-radio-group v-decorator="['P2-Q21',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="22）多动行为">
                <a-radio-group v-decorator="['P2-Q22',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="23）没有目光接触">
                <a-radio-group v-decorator="['P2-Q23',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="24）感觉性防御">
                <a-radio-group v-decorator="['P2-Q24',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                </a-radio-group>
              </a-form-item>
            </div>
          </div>
          <div v-show="nowPage === 'transition'" class="infinite-list-wrapper">
            <div style="margin-top:12px">
              <a-form-item label="1）VB-MAPP里程碑总分">
                <a-radio-group v-decorator="['P3-Q1',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="2）VB-MAPP障碍总分">
                <a-radio-group v-decorator="['P3-Q2',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="3）负面行为和教学控制">
                <a-radio-group v-decorator="['P3-Q3',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="4）教室规则和集体技能">
                <a-radio-group v-decorator="['P3-Q4',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="5）社交技能和社会游戏">
                <a-radio-group v-decorator="['P3-Q5',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
            </div>

            <div style="margin-top:12px">
              <a-form-item label="6）独立的学业性工作">
                <a-radio-group v-decorator="['P3-Q6',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="7）泛化">
                <a-radio-group v-decorator="['P3-Q7',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="8）强化物范围">
                <a-radio-group v-decorator="['P3-Q8',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="9）技能获得的速度">
                <a-radio-group v-decorator="['P3-Q9',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="10）新技能的维持">
                <a-radio-group v-decorator="['P3-Q10',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
            </div>

            <div style="margin-top:12px">
              <a-form-item label="11）自然环境学习">
                <a-radio-group v-decorator="['P3-Q11',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="12）无须训练的转衔">
                <a-radio-group v-decorator="['P3-Q12',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="13）对变化的适应性">
                <a-radio-group v-decorator="['P3-Q13',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="14）自发性行为">
                <a-radio-group v-decorator="['P3-Q14',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="15）独立的休闲时间">
                <a-radio-group v-decorator="['P3-Q15',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
            </div>

            <div style="margin-top:12px">
              <a-form-item label="16）一般的自助技能">
                <a-radio-group v-decorator="['P3-Q16',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="17）如厕技能">
                <a-radio-group v-decorator="['P3-Q17',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="18）进餐技能">
                <a-radio-group v-decorator="['P3-Q18',{ initialValue: '0'},{ rules: [{ required: true, message: '请选择！' }] }]">
                  <a-radio value="0" class="radio-item">0</a-radio>
                  <a-radio value="1" class="radio-item">1</a-radio>
                  <a-radio value="2" class="radio-item">2</a-radio>
                  <a-radio value="3" class="radio-item">3</a-radio>
                  <a-radio value="4" class="radio-item">4</a-radio>
                  <a-radio value="5" class="radio-item">5</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 12, offset: 8 }" style="margin-top:12px">
                <a-button type="primary" @click="returnClick" style="margin-right:12px">
                  返回
                </a-button>
                <a-button type="danger" :loading="loading" @click="handleAssessmentSubmit">
                  提交
                </a-button>
              </a-form-item>
            </div>
          </div>
        </a-form>
      </div>
    </div>
    <vb-assessment-chart v-else @submitVBAssessment="submitVBAssessment"/>
  </div>
</template>

<script>
import storage from 'store'
import VbAssessmentChart from 'components/common/Assessment/VB/VbAssessmentChart'
import { postVbAssessmentData } from 'network/assessmentDataAll'
export default {
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    },
    nowPage: 'milepost-stage1',
    nowStep: 'dataUpload',
    nameid: '',
    loading: false
  }),
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'validate_other' })
  },
  created () {
    this.nameid = this.$route.params.nameid
  },
  components: {
    VbAssessmentChart
  },
  methods: {
    postVbAssessmentData (values) {
      console.log(values)
      postVbAssessmentData(values).then(res => {
        console.log(res)
      })
    },
    handleChange (value) {
      this.nowPage = value
    },
    returnClick () {
      this.$emit('returnNoDetail')
    },
    submitVBAssessment () {
      this.$emit('assessmentCompleted')
    },
    handleAssessmentSubmit () {
      this.form.validateFields((err, values) => {
        if (!err) {
          // 这里写上传数据的代码
          this.loading = true
          values.assessorName = storage.get('INFO').name
          values.studentName = this.nameid
          this.postVbAssessmentData(values)
          setTimeout(() => {
            this.loading = false
            this.nowStep = 'dataChart'
          }, 2000)
        }
      })
    }
  }
}
</script>
<style scoped>
.main-content {
  padding-left: 10px;
}
.form-main-style {
  margin-top: 10px;
  padding: 5px;
}
.infinite-list-wrapper{
  height: 500px;
  overflow:auto;
}
.form-content {
  margin-bottom:5px
}
/* .form-content2 {
  margin-bottom: 2px;
}
.form-content3 {
  margin-bottom: 8px;
} */
.radio-item {
  margin-left: 10px;
}
</style>
