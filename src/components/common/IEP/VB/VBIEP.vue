<template>
  <div class="infinite-list-wrapper">
    <!-- title -->
    <div>
      <h2>语言行为里程碑评估报告及个体化教育计划</h2>
      <h1>VB-MAPP Assessment Report and Individualized Education Plan</h1>
      <a-divider class="divider"/>
    </div>

    <!-- student basement information -->
    <div>
      <a-descriptions title="学生基本信息">
        <a-descriptions-item label="学生姓名">
          {{ VBdatatmp.name }}
        </a-descriptions-item>
        <a-descriptions-item label="出生日期">
          {{ VBdatatmp.birth }}
        </a-descriptions-item>
        <a-descriptions-item label="年龄">
          {{ VBdatatmp.age }}
        </a-descriptions-item>
      </a-descriptions>
      <a-textarea
        class="mytextarea"
        v-model="block1_stuinfo"
        :auto-size="{ minRows: 2, maxRows: 50 }"
      />
      <p class="mytextarea">
        {{ block1_static }}
      </p>
      <a-divider class="divider"/>
    </div>

    <!-- assessment overview -->
    <div>
      <a-descriptions title="评估总体情况"></a-descriptions>
      <a-textarea
        class="mytextarea"
        v-model="block2_overview"
        :auto-size="{ minRows: 2, maxRows: 50 }"
      />
      <a-divider class="divider"/>
    </div>
    <!-- 语言里程碑评估结果及教学计划 -->
    <div>
      <a-descriptions title="语言里程碑评估结果及教学计划"></a-descriptions>
      <a-textarea
        class="mytextarea"
        v-model="block3_part1"
        :auto-size="{ minRows: 2, maxRows: 50 }"
      />
      <v-bcharts
        :le1Data="le1Data"
        :le2Data="le2Data"
        :le3Data="le3Data"
        :formRecord="formRecord1"
        :formNameBirth="formNameBirth">
      </v-bcharts>
      <a-textarea
        class="mytextarea"
        v-model="block3_part2"
        :auto-size="{ minRows: 2, maxRows: 50 }"
      />
    </div>

    <!-- 这里是IEP表格 -->
    <!-- 此处有错 -->
    <div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[0]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[0]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">{{ MStable[0]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[0]"
            :target-keys="targetKeys1"
            :selected-keys="selectedKeys1"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange1"
            @selectChange="handleSelectChange1"
            @scroll="handleScroll1"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[1]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[1]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">{{ MStable[1]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[1]"
            :target-keys="targetKeys2"
            :selected-keys="selectedKeys2"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange2"
            @selectChange="handleSelectChange2"
            @scroll="handleScroll2"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[2]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[2]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">{{ MStable[2]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[2]"
            :target-keys="targetKeys3"
            :selected-keys="selectedKeys3"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange3"
            @selectChange="handleSelectChange3"
            @scroll="handleScroll3"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[3]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[3]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">{{ MStable[3]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[3]"
            :target-keys="targetKeys4"
            :selected-keys="selectedKeys4"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange4"
            @selectChange="handleSelectChange4"
            @scroll="handleScroll4"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[4]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[4]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">{{ MStable[4]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[4]"
            :target-keys="targetKeys5"
            :selected-keys="selectedKeys5"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange5"
            @selectChange="handleSelectChange5"
            @scroll="handleScroll5"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[5]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[5]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">> {{ MStable[5]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[5]"
            :target-keys="targetKeys6"
            :selected-keys="selectedKeys6"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange6"
            @selectChange="handleSelectChange6"
            @scroll="handleScroll6"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[6]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[6]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">>{{ MStable[6]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[6]"
            :target-keys="targetKeys7"
            :selected-keys="selectedKeys7"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange7"
            @selectChange="handleSelectChange7"
            @scroll="handleScroll7"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[7]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[7]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">{{ MStable[7]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[7]"
            :target-keys="targetKeys8"
            :selected-keys="selectedKeys8"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange8"
            @selectChange="handleSelectChange8"
            @scroll="handleScroll8"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[8]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[8]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">{{ MStable[8]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[8]"
            :target-keys="targetKeys9"
            :selected-keys="selectedKeys9"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange9"
            @selectChange="handleSelectChange9"
            @scroll="handleScroll9"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[9]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[9]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">{{ MStable[9]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[9]"
            :target-keys="targetKeys10"
            :selected-keys="selectedKeys10"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange10"
            @selectChange="handleSelectChange10"
            @scroll="handleScroll10"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[10]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[10]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">{{ MStable[10]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[10]"
            :target-keys="targetKeys11"
            :selected-keys="selectedKeys11"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange11"
            @selectChange="handleSelectChange11"
            @scroll="handleScroll11"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[11]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[11]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">{{ MStable[11]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[11]"
            :target-keys="targetKeys12"
            :selected-keys="selectedKeys12"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange12"
            @selectChange="handleSelectChange12"
            @scroll="handleScroll12"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[12]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[12]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">{{ MStable[12]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[12]"
            :target-keys="targetKeys13"
            :selected-keys="selectedKeys13"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange13"
            @selectChange="handleSelectChange13"
            @scroll="handleScroll13"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[13]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[13]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">{{ MStable[13]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[13]"
            :target-keys="targetKeys14"
            :selected-keys="selectedKeys14"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange14"
            @selectChange="handleSelectChange14"
            @scroll="handleScroll14"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[14]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[14]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">{{ MStable[14]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[14]"
            :target-keys="targetKeys15"
            :selected-keys="selectedKeys15"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange15"
            @selectChange="handleSelectChange15"
            @scroll="handleScroll15"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[15]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[15]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">> {{ MStable[15]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[15]"
            :target-keys="targetKeys16"
            :selected-keys="selectedKeys16"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange16"
            @selectChange="handleSelectChange16"
            @scroll="handleScroll16"
          />
        </div>
      </div>
      <div style="margin-top:20px" >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="技能领域" :bordered="false">
                <p> {{ MStable[16]['name'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card title="里程碑" :bordered="false">
                <p style="white-space: pre-line"> {{ MStable[16]['mile'] }}</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="评估结果" :bordered="false">
                <p style="white-space: pre-line">>{{ MStable[16]['assRes'] }}</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="margin-left:12px; margin-top:12px">
          <p style="font-size:14px; font-weight:bold">教学计划</p>
          <a-transfer
            :data-source="plan[16]"
            :target-keys="targetKeys17"
            :selected-keys="selectedKeys17"
            :list-style="{
              width: '400px',
              height: '300px',
            }"
            :titles="['请选中教学计划后点击>移至右边', '已经安排的教学计划']"
            :render="item => item.title"
            :disabled="disabled"
            @change="handleChange17"
            @selectChange="handleSelectChange17"
            @scroll="handleScroll17"
          />
        </div>
      </div>
    </div>

    <!-- assessment overview -->
    <div>
      <a-divider class="divider"/>
      <a-descriptions title="障碍评估结果及干预建议"></a-descriptions>
      <a-textarea
        class="mytextarea"
        v-model="block4_part1"
        :auto-size="{ minRows: 2, maxRows: 50 }"
      />
      <v-bcharts-2
        :rol1="rol1"
        :rol2="rol2"
        :rol3="rol3"
        :rol4="rol4"
        :formRecord="formRecord2"
        :formNameBirth="formNameBirth">
      </v-bcharts-2>
      <!-- 这里是障碍表格 -->
      <a-table
        :columns="ZAcolumns"
        :data-source="ZAtable"
        :pagination="false" >
        <div slot="txt" slot-scope="value">
          <span style="white-space: pre-line" >
            {{ value }}
          </span>
        </div>
      </a-table>
      <a-textarea
        class="mytextarea"
        v-model="block4_part2"
        :auto-size="{ minRows: 2, maxRows: 50 }"
      />
    </div>

    <div>
      <a-divider class="divider"/>
      <a-descriptions title="转衔评估结果及干预建议"></a-descriptions>
      <p class="mytextarea">
        {{ block5_part1 }}
      </p>
      <v-bcharts-3
        :zxrol1="zxrol1"
        :zxrol2="zxrol2"
        :zxrol3="zxrol3"
        :formRecord="formRecord3"
        :formNameBirth="formNameBirth">
      </v-bcharts-3>
      <!-- 这里是转衔表格 -->
      <a-table
        :columns="ZXcolumns"
        :data-source="ZXtable"
        :pagination="false" >
        <div slot="txt" slot-scope="value">
          <span style="white-space: pre-line" >
            {{ value }}
          </span>
        </div>
      </a-table>
      <a-textarea
        class="mytextarea"
        v-model="block5_part2"
        :auto-size="{ minRows: 2, maxRows: 50 }"
      />
    </div>

    <div>
      <a-divider class="divider"/>
      <a-descriptions title="评估信息">
        <a-descriptions-item label="评估师">
          <a-input placeholder="Basic usage" v-model="assessor_edit "/>
        </a-descriptions-item>
        <a-descriptions-item label="评估日期">
          <a-input placeholder="Basic usage" v-model="date_edit "/>
        </a-descriptions-item>
      </a-descriptions>
    </div>

    <div class="button-content">
      <a-button type="danger" @click="exit">
        退出
      </a-button>
      <a-button v-if="!done" type="primary" :loading="loading" style="margin-left:12px" @click="submitVBAssessment">
        提交
      </a-button>
    </div>
  </div>

</template>

<script>
import storage from 'store'
import { getVBAssessment, getIEP, postIEP } from 'network/assessmentIEPData.js'
import { vBchartsData } from 'network/assessmentDataAll.js'
import VBcharts from 'components/common/Assessment/VB/VBcharts'
import VBcharts2 from 'components/common/Assessment/VB/VBcharts2'
import VBcharts3 from 'components/common/Assessment/VB/VBcharts3'

export default {
  name: 'VBIEP',
  components: {
    VBcharts,
    VBcharts2,
    VBcharts3
  },
  props: {
    isDone: {
      type: Boolean,
      default () {
        return false
      }
    },
    issup: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      loading: false,
      done: false,
      nameid: '',
      plan: [],
      getInfoKey: {},
      disabled: false,
      selectedKeys1: [],
      targetKeys1: [],
      selectedKeys2: [],
      targetKeys2: [],
      selectedKeys3: [],
      targetKeys3: [],
      selectedKeys4: [],
      targetKeys4: [],
      selectedKeys5: [],
      targetKeys5: [],
      selectedKeys6: [],
      targetKeys6: [],
      selectedKeys7: [],
      targetKeys7: [],
      selectedKeys8: [],
      targetKeys8: [],
      selectedKeys9: [],
      targetKeys9: [],
      selectedKeys10: [],
      targetKeys10: [],
      selectedKeys11: [],
      targetKeys11: [],
      selectedKeys12: [],
      targetKeys12: [],
      selectedKeys13: [],
      targetKeys13: [],
      selectedKeys14: [],
      targetKeys14: [],
      selectedKeys15: [],
      targetKeys15: [],
      selectedKeys16: [],
      targetKeys16: [],
      selectedKeys17: [],
      targetKeys17: [],
      VBdatatmp: {},
      IEPdatatmp: {},
      block1_stuinfo: '',
      block2_overview: '',
      block3_part1: '',
      block1_static: '',
      block3_part2: '',
      block4_part1: '',
      block4_part2: '',
      block5_part1: '',
      block5_part2: '',
      assessor: '',
      date_edit: '',
      MStable: [],
      ZAtable: [],
      ZXtable: [],
      MScolumns: [],
      ZAcolumns: [],
      ZXcolumns: [],
      // 0公共部分
      formRecord1: [],
      formRecord2: [],
      formRecord3: [],
      formNameBirth: [],

      // 1里程碑
      le1Data: [],
      le2Data: [],
      le3Data: [],

      // 2计分表
      rol1: [],
      rol2: [],
      rol3: [],
      rol4: [],

      // 3转衔
      zxrol1: [],
      zxrol2: [],
      zxrol3: []
    }
  },
  created () {
    this.done = this.isDone
    this.nameid = this.$route.params.nameid
    this.getInfoKey.name = this.$route.params.nameid
    this.getInfoKey.type = 'VB'
    this.getInfoKey.assessor = storage.get('INFO').name
    this.vBchartsData(this.getInfoKey)
  },
  mounted: function () {
    // 获取VBdata
    var values = { name: this.nameid, assessor: storage.get('INFO').name }
    this.getVBAssessment(values)
    this.getIEP(values)
    // 里程碑表头
    this.MScolumns = [
    {
      title: '技能领域',
      dataIndex: 'name',
      key: 'name',
      width: '20%'
    },
    {
      title: '完成里程碑',
      dataIndex: 'mile',
      key: 'mile',
      scopedSlots: { customRender: 'txt' },
      width: '20%'
    },
    {
      title: '评估结果',
      dataIndex: 'assRes',
      key: 'assRes',
      scopedSlots: { customRender: 'txt' },
      width: '60%'
    }]
    // 障碍表头
    this.ZAcolumns = [{
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      width: '10%'
    }, {
      title: '障碍项',
      dataIndex: 'name',
      key: 'name',
      width: '20%'
    }, {
      title: '得分',
      dataIndex: 'score',
      key: 'score',
      width: '10%'
    }, {
      title: '得分说明',
      dataIndex: 'score_detial',
      key: 'score_detial',
      width: '60%'
    }]
    // 转衔表头
    this.ZXcolumns = [{
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      width: '10%'
    }, {
      title: '转衔项目',
      dataIndex: 'name',
      key: 'name',
      width: '20%'
    }, {
      title: '得分',
      dataIndex: 'score',
      key: 'score',
      width: '10%'
    }, {
      title: '得分说明',
      dataIndex: 'score_detial',
      key: 'score_detial',
      width: '60%'
    }]
  },
  methods: {
    vBchartsData (values) {
      console.log(values)
      vBchartsData(values).then(res => {
        this.formNameBirth = res.student
        this.formRecord1 = res.MShistory
        this.le1Data = res.MSchart1
        this.le2Data = res.MSchart2
        this.le3Data = res.MSchart3
        this.formRecord2 = res.ZAhistory
        this.rol1 = res.ZAchart1
        this.rol2 = res.ZAchart2
        this.rol3 = res.ZAchart3
        this.rol4 = res.ZAchart4
        this.formRecord3 = res.ZXhistory
        this.zxrol1 = res.ZXchart1
        this.zxrol2 = res.ZXchart2
        this.zxrol3 = res.ZXchart3
        console.log(res)
      })
    },
    getIEP (values) {
      getIEP(values).then(res => {
        this.IEPdatatmp = res.IEP
        console.log(res)
        // 设定文本默认
        this.block1_stuinfo = this.IEPdatatmp.block1_stuinfo_default
        this.block1_static = this.IEPdatatmp.block1_static

        this.block2_overview = this.IEPdatatmp.block2_overview_default
        this.block3_part1 = this.IEPdatatmp.block3_part1_default
        this.block3_part2 = this.IEPdatatmp.block3_part2_default

        this.block4_part1 = this.IEPdatatmp.block4_part1_default
        this.block4_part2 = this.IEPdatatmp.block4_part2_default

        this.block5_part1 = this.IEPdatatmp.block5_part1_default
        this.block5_part2 = this.IEPdatatmp.block5_part2_default

        this.MStable = this.IEPdatatmp.tableP1
        this.ZAtable = this.IEPdatatmp.tableP2
        this.ZXtable = this.IEPdatatmp.tableP3

        this.assessor_edit = this.IEPdatatmp.assessmentor_edit
        this.date_edit = this.IEPdatatmp.date_edit
        this.plan = res.plan
        this.targetKeys1 = res.targetKey[0]
        this.targetKeys2 = res.targetKey[1]
        this.targetKeys3 = res.targetKey[2]
        this.targetKeys4 = res.targetKey[3]
        this.targetKeys5 = res.targetKey[4]
        this.targetKeys6 = res.targetKey[5]
        this.targetKeys7 = res.targetKey[6]
        this.targetKeys8 = res.targetKey[7]
        this.targetKeys9 = res.targetKey[8]
        this.targetKeys10 = res.targetKey[9]
        this.targetKeys11 = res.targetKey[10]
        this.targetKeys12 = res.targetKey[11]
        this.targetKeys13 = res.targetKey[12]
        this.targetKeys14 = res.targetKey[13]
        this.targetKeys15 = res.targetKey[14]
        this.targetKeys16 = res.targetKey[15]
        this.targetKeys17 = res.targetKey[16]
      })
    },
    getVBAssessment (values) {
      getVBAssessment(values).then(res => {
        this.VBdatatmp = res
      })
    },
    postIEP (values) {
      console.log(values)
      postIEP(values).then(res => {
        console.log(res)
      })
    },
    exit () {
      this.$emit('exit')
      console.log('该退出了')
    },
    submitVBAssessment () {
      // this.postIEP('')
      this.loading = true
      const values = {
        block1_stuinfo: this.block1_stuinfo,
        block1_static: this.block1_static,
        block3_part1: this.block3_part1,
        block3_part2: this.block3_part2,
        block4_part1: this.block4_part1,
        block4_part2: this.block4_part2,
        block5_part1: this.block5_part1,
        block5_part2: this.block5_part2,
        block2_overview: this.block2_overview,
        targetKeys1: this.targetKeys1,
        targetKeys2: this.targetKeys2,
        targetKeys3: this.targetKeys3,
        targetKeys4: this.targetKeys4,
        targetKeys5: this.targetKeys5,
        targetKeys6: this.targetKeys6,
        targetKeys7: this.targetKeys7,
        targetKeys8: this.targetKeys8,
        targetKeys9: this.targetKeys9,
        targetKeys10: this.targetKeys10,
        targetKeys11: this.targetKeys11,
        targetKeys12: this.targetKeys12,
        targetKeys13: this.targetKeys13,
        targetKeys14: this.targetKeys14,
        targetKeys15: this.targetKeys15,
        targetKeys16: this.targetKeys16,
        targetKeys17: this.targetKeys17,
        assessor_edit: this.assessor_edit,
        date_edit: this.date_edit,
        _id: this.IEPdatatmp._id,
        issup: this.issup
      }
      this.postIEP(values)
      setTimeout(() => {
        this.loading = false
        this.$emit('exit')
      }, 2000)
    },
    handleChange1 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys1 = nextTargetKeys
    },
    handleSelectChange1 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys1 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll1 (direction, e) {
    },
    handleDisable1 (disabled) {
      this.disabled = disabled
    },
    handleChange2 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys2 = nextTargetKeys
    },
    handleSelectChange2 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys2 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll2 (direction, e) {
    },
    handleDisable2 (disabled) {
      this.disabled = disabled
    },
    handleChange3 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys3 = nextTargetKeys
    },
    handleSelectChange3 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys3 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll3 (direction, e) {
    },
    handleDisable3 (disabled) {
      this.disabled = disabled
    },
    handleChange4 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys4 = nextTargetKeys
    },
    handleSelectChange4 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys4 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll4 (direction, e) {
    },
    handleDisable4 (disabled) {
      this.disabled = disabled
    },
    handleChange5 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys5 = nextTargetKeys
    },
    handleSelectChange5 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys5 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll5 (direction, e) {
    },
    handleDisable5 (disabled) {
      this.disabled = disabled
    },
    handleChange6 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys6 = nextTargetKeys
    },
    handleSelectChange6 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys6 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll6 (direction, e) {
    },
    handleDisable6 (disabled) {
      this.disabled = disabled
    },
    handleChange7 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys7 = nextTargetKeys
    },
    handleSelectChange7 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys7 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll7 (direction, e) {
    },
    handleDisable7 (disabled) {
      this.disabled = disabled
    },
    handleChange8 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys8 = nextTargetKeys
    },
    handleSelectChange8 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys8 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll8 (direction, e) {
    },
    handleDisable8 (disabled) {
      this.disabled = disabled
    },
    handleChange9 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys9 = nextTargetKeys
    },
    handleSelectChange9 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys9 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll9 (direction, e) {
    },
    handleDisable9 (disabled) {
      this.disabled = disabled
    },
    handleChange10 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys10 = nextTargetKeys
    },
    handleSelectChange10 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys10 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll10 (direction, e) {
    },
    handleDisable10 (disabled) {
      this.disabled = disabled
    },
    handleChange11 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys11 = nextTargetKeys
    },
    handleSelectChange11 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys11 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll11 (direction, e) {
    },
    handleDisable11 (disabled) {
      this.disabled = disabled
    },
    handleChange12 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys12 = nextTargetKeys
    },
    handleSelectChange12 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys12 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll12 (direction, e) {
    },
    handleDisable12 (disabled) {
      this.disabled = disabled
    },
    handleChange13 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys13 = nextTargetKeys
    },
    handleSelectChange13 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys13 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll13 (direction, e) {
    },
    handleDisable13 (disabled) {
      this.disabled = disabled
    },
    handleChange14 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys14 = nextTargetKeys
    },
    handleSelectChange14 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys14 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll14 (direction, e) {
    },
    handleDisable14 (disabled) {
      this.disabled = disabled
    },
    handleChange15 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys15 = nextTargetKeys
    },
    handleSelectChange15 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys15 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll15 (direction, e) {
    },
    handleDisable15 (disabled) {
      this.disabled = disabled
    },
    handleChange16 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys16 = nextTargetKeys
    },
    handleSelectChange16 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys16 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll16 (direction, e) {
    },
    handleDisable16 (disabled) {
      this.disabled = disabled
    },
    handleChange17 (nextTargetKeys, direction, moveKeys) {
      this.targetKeys17 = nextTargetKeys
    },
    handleSelectChange17 (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys17 = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll17 (direction, e) {
    },
    handleDisable17 (disabled) {
      this.disabled = disabled
    }
  }
}

</script>

<style scoped>
.infinite-list-wrapper{
  height: 600px;
  overflow:auto;
}
.button-content {
  text-align: center;
}
.mytextarea{
  font-size:15px;
  color:black;
  white-space: pre-wrap;
  line-height:250%
}

</style>
