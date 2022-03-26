const studentData = [
    {
      key: '0',
      name: '王小明',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      light: true,
      assessmentstatus: true,
      IEPstatus: true,
      treatmentplan: true,
      enterscore: true,
      absent: true
    },
    {
      key: '1',
      name: '张小红',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      light: true,
      assessmentstatus: false,
      IEPstatus: false,
      treatmentplan: false,
      enterscore: false,
      absent: false
    },
    {
      key: '2',
      name: '王小二',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      light: true,
      assessmentstatus: true,
      IEPstatus: true,
      treatmentplan: true,
      enterscore: true,
      absent: true
    },
    {
      key: '3',
      name: '李文文',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      light: true,
      assessmentstatus: true,
      IEPstatus: true,
      treatmentplan: true,
      enterscore: true,
      absent: true
    }
  ]
const showAvatars = [{ light: 'green', avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', name: '王小明' },
  { light: 'green', avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', name: '张小红' },
  { light: 'green', avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', name: '王小二' },
  { light: 'green', avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', name: '李文文' }]

const therapistsStudentdata = [
    {
      key: '0',
      name: '王小明',
      enterscore: 'green',
      absent: 'green'
    },
    {
      key: '1',
      name: '李文文',
      enterscore: 'green',
      absent: 'green'
    }
  ]
const therapistsShowAvatars = [{ light: 'green', avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', name: '王小明' },
  { light: 'green', avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', name: '李文文' }]
const assessorStudentdata = [
    {
      key: '0',
      name: '王小明',
      assessmentreport: 'red',
      IEPplan: 'green'
    },
    {
      key: '1',
      name: '王小二',
      assessmentreport: 'red',
      IEPplan: 'red'
    },
    {
      key: '2',
      name: '李文文',
      assessmentreport: 'red',
      IEPplan: 'green'
    }
  ]
const assessorShowAvatars = [{ light: 'red', avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', name: '王小明' },
  { light: 'red', avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', name: '王小二' },
  { light: 'red', avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', name: '李文文' }]

const parentStudentdata = [
    {
      key: '0',
      name: '王小明',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }
  ]

const supervisiondata = [{ key: '0', name: '张珊', studentnum: 4, students: ['王小明', '张小红', '王小二', '李文文'] },
                         { key: '1', name: '王武', studentnum: 5, students: ['王路飞', '凯文', '山治', '乌索普', '陈娜美'] },
                         { key: '2', name: '李思', studentnum: 4, students: ['小明', '小红', '小兰', '乐乐'] },
                         { key: '3', name: '程逸', studentnum: 5, students: ['赵泽', '陈山', '李海', '孙成', '周玲'] }]
const allsupervision = ['赵保徽', '刘佳婷', '李阳', '巨杰']
const therapistsdata = [{ key: '0', name: '葛群', studentnum: 4, students: ['王小明', '张小红', '王小二', '李文文'] },
                        { key: '1', name: '张猛', studentnum: 5, students: ['小明', '小红', '小兰', '乐乐'] },
                        { key: '2', name: '王玲', studentnum: 4, students: ['王路飞', '张凯文', '李山治', '刘索普', '陈娜美'] },
                        { key: '3', name: '刘雪琴', studentnum: 5, students: ['赵泽', '陈山', '李海', '孙成', '周玲'] }]
const alltherapists = ['刘世东', '巨鹏', '高良']
const studentdetail = { sex: '男', age: '16', guardianName: '王建国', guardianPhone: '18888888888', address: '花园小区，8幢，206', householdRegister: '山东省，青岛市', class: '密集个训', supervision: '张珊' }
const historyData = [ '君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。',
                      '人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。' ]
const externalAssessmentData = [
              {
                key: '0',
                pdfName: '北京三院报告',
                pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'
              },
              {
                key: '1',
                pdfName: '爱尚学校报告',
                pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'
              },
              {
                key: '2',
                pdfName: '123',
                pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'
              }
            ]
const AssessmentTableData = [{
                key: '0',
                assessmentName: 'VB评估',
                assessor: '王萍',
                assessmentTime: '2021年3月19日'
              },
              {
                key: '1',
                assessmentName: 'ESDM评估',
                assessor: '刘飞',
                assessmentTime: '2021年1月29日'
              },
              {
                key: '2',
                assessmentName: '感统评估',
                assessor: '李梅',
                assessmentTime: '2020年11月15日'
              }
            ]
const AssessmentIEPTableData = [{
              key: '0',
              IEPName: 'VB-IEP',
              IEPTime: '2021年3月19日'
            },
            {
              key: '1',
              IEPName: 'ESDM-IEP',
              IEPTime: '2021年1月29日'
            },
            {
              key: '2',
              IEPName: '感统-IEP',
              IEPTime: '2020年11月15日'
            }
          ]
const AssessorAssessmentData = [
              {
                key: '0',
                name: '王萍',
                gooddomain: [ 'VB', 'ESDM' ],
                state: 6
              },
              {
                key: '1',
                name: '刘飞',
                gooddomain: [ 'VB', '感统' ],
                state: 8
              },
              {
                key: '2',
                name: '李梅',
                gooddomain: ['VB', 'ESDM', '感统'],
                state: 10
              },
              {
                key: '3',
                name: '张志',
                gooddomain: ['ESDM', '感统'],
                state: 10
              }
            ]
const StudentCourseData = [
  {
    value: '个训',
    label: '个训',
    children: [
      {
        value: '听者反应',
        label: '听者反应',
        children: [
          {
            value: '拍手',
            label: '拍手'
          },
          {
            value: '找小狗',
            label: '找小狗'
          }
        ]
      },
      {
        value: '视觉感知',
        label: '视觉感知',
        children: [
          {
            value: '6选1',
            label: '6选1'
          }
        ]
      }
    ]
  },
  {
    value: '集体',
    label: '集体',
    children: [
      {
        value: 'XXX',
        label: 'XXX',
        children: [
          {
            value: 'YYY',
            label: 'YYY'
          }
        ]
      }
    ]
  },
  {
    value: '语言',
    label: '语言',
    children: [
      {
        value: 'XXX',
        label: 'XXX',
        children: [
          {
            value: 'YYY',
            label: 'YYY'
          }
        ]
      }
    ]
  },
  {
    value: '感统',
    label: '感统',
    children: [
      {
        value: 'XXX',
        label: 'XXX',
        children: [
          {
            value: 'YYY',
            label: 'YYY'
          }
        ]
      }
    ]
  },
  {
    value: '精细',
    label: '精细',
    children: [
      {
        value: 'XXX',
        label: 'XXX',
        children: [
          {
            value: 'YYY',
            label: 'YYY'
          }
        ]
      }
    ]
  }
]
const StudentCourseChartDataX = ['2021-3-1', '2021-3-2', '2021-3-3', '2021-3-4', '2021-3-5', '2021-3-6', '2021-3-7']
const StudentCourseChartDataY = [{ name: '拍手', data: [40, 70, 80, 30, 60, 50, 90] },
                                 { name: '找小狗', data: [70, 40, 50, 80, 30, 90, 50] }]
const GxDailyPlanData = [
                                  {
                                    key: '0',
                                    field: '听者反应',
                                    task: '生活中指令',
                                    taskObjectives: '拿出来',
                                    startTime: '08:00',
                                    therapist: '葛群'
                                  },
                                  {
                                    key: '1',
                                    field: '视觉感知',
                                    task: '配对',
                                    taskObjectives: '6选1',
                                    startTime: '08:00',
                                    therapist: '葛群'
                                  },
                                  {
                                    key: '2',
                                    field: '命名',
                                    task: '食物类',
                                    taskObjectives: '棒棒糖',
                                    startTime: '08:00',
                                    therapist: '葛群'
                                  }
                                ]
const GxMonthlyPlanData = [
                                  {
                                    key: '0',
                                    field: '听者反应',
                                    task: '生活中指令',
                                    taskObjectives: '拿出来',
                                    duration: ['2020-09-01', '2021-09-05'],
                                    dateProps: '工作日',
                                    startTime: '08:00',
                                    therapist: '葛群',
                                    courseProps: '日计划'
                                  },
                                  {
                                    key: '1',
                                    field: '命名',
                                    task: '食物类',
                                    taskObjectives: '棒棒糖',
                                    duration: ['2020-09-01', '2021-09-05'],
                                    dateProps: '工作日',
                                    startTime: '08:00',
                                    therapist: '葛群',
                                    courseProps: '日维持'
                                  },
                                  {
                                    key: '2',
                                    field: '视觉感知',
                                    task: '配对',
                                    taskObjectives: '6选1',
                                    duration: ['2020-09-01', '2021-09-05'],
                                    dateProps: '周六',
                                    startTime: '08:00',
                                    therapist: '葛群',
                                    courseProps: '日计划'
                                  },
                                ]
const GxMaintainData = [
                                  {
                                    key: '0',
                                    field: '听者反应',
                                    task: '生活中指令',
                                    taskObjectives: '拍手',
                                    planCategory: '日维持',
                                    startTime: '08:00',
                                    therapist: '葛群'
                                  },
                                  {
                                    key: '1',
                                    field: '视觉感知',
                                    task: '配对',
                                    taskObjectives: '6选1',
                                    planCategory: '周维持',
                                    startTime: '08:00',
                                    therapist: '葛群'
                                  },
                                  {
                                    key: '2',
                                    field: '命名',
                                    task: '食物类',
                                    taskObjectives: '棒棒糖',
                                    planCategory: '双周维持',
                                    startTime: '08:00',
                                    therapist: '葛群'
                                  }
                                ]
const JxDailyPlanData = [
                          {
                            key: '0',
                            field: '基本操作能力',
                            task: '敲击物件',
                            taskObjectives: '拍打音乐鼓',
                            startTime: '09:00',
                            therapist: '张猛'
                          },
                          {
                            key: '1',
                            field: '基本操作能力',
                            task: '拿取物件',
                            // taskObjectives: '',
                            startTime: '09:00',
                            therapist: '张猛'
                          }
                        ]
const JxMonthlyPlanData = [
                            {
                              key: '0',
                              field: '基本操作能力',
                              task: '敲击物件',
                              taskObjectives: '拍打音乐鼓',
                              duration: ['2020-09-01', '2021-09-05'],
                              dateProps: '工作日',
                              startTime: '09:00',
                              therapist: '张猛',
                              courseProps: '日计划'
                            },
                            {
                              key: '1',
                              field: '基本操作能力',
                              task: '拿取物件',
                              // taskObjectives: '',
                              duration: ['2020-09-01', '2021-09-05'],
                              dateProps: '周六',
                              startTime: '09:00',
                              therapist: '张猛',
                              courseProps: '周维持'
                            }
                          ]
const JxMaintainData = [
                        {
                          key: '0',
                          field: '基本操作能力',
                          task: '拿取物件',
                          // taskObjectives: '',
                          planCategory: '日维持',
                          startTime: '09:00',
                          therapist: '张猛'
                        }
                      ]
const YyDailyPlanData = [
                          {
                            key: '0',
                            field: '手势',
                            task: '手势',
                            taskObjectives: '能够用手指来获得成人的关注，例如：拍拍表示获取注意',
                            startTime: '08:00',
                            therapist: '葛群'
                          },
                          {
                            key: '1',
                            field: '情绪',
                            task: '情绪',
                            taskObjectives: '能够识别，命名基本的情绪：开心，难过，生气，害怕等',
                            startTime: '08:00',
                            therapist: '葛群'
                          },
                          {
                            key: '2',
                            field: '语言理解',
                            task: '句子',
                            taskObjectives: '能够理解常见的简单疑问句',
                            startTime: '08:00',
                            therapist: '葛群'
                          }
                        ]
const YyMonthlyPlanData = [
                            {
                              key: '0',
                              field: '手势',
                              task: '手势',
                              taskObjectives: '能够用手指来获得成人的关注，例如：拍拍表示获取注意',
                              duration: ['2020-09-01', '2021-09-05'],
                              dateProps: '工作日',
                              startTime: '10:00',
                              therapist: '王玲'
                            },
                            {
                              key: '1',
                              field: '情绪',
                              task: '情绪',
                              taskObjectives: '能够识别，命名基本的情绪：开心，难过，生气，害怕等',
                              duration: ['2020-09-01', '2021-09-05'],
                              dateProps: '工作日',
                              startTime: '10:00',
                              therapist: '王玲'
                            },
                            {
                              key: '2',
                              field: '语言理解',
                              task: '句子',
                              taskObjectives: '能够理解常见的简单疑问句',
                              duration: ['2020-09-01', '2021-09-05'],
                              dateProps: '工作日',
                              startTime: '10:00',
                              therapist: '王玲'
                            }
                          ]
const SjDailyPlanData = [
                          {
                            key: '0',
                            field: '课堂常规',
                            task: '安坐5min',
                            startTime: '14:00',
                            therapist: '刘雪琴'
                          },
                          {
                            key: '1',
                            field: '共同关注',
                            task: '时长30s左右',
                            startTime: '14:00',
                            therapist: '刘雪琴'
                          },
                          {
                            key: '2',
                            field: '指令',
                            task: '集体中个人指令的接受（一步）',
                            startTime: '14:00',
                            therapist: '刘雪琴'
                          }
                        ]
const SjMonthlyPlanData = [
                            {
                              key: '0',
                              field: '课堂常规',
                              task: '安坐5min',
                              duration: ['2020-09-01', '2021-09-05'],
                              dateProps: '工作日',
                              startTime: '14:00',
                              therapist: '刘雪琴'
                            },
                            {
                              key: '1',
                              field: '共同关注',
                              task: '时长30s左右',
                              duration: ['2020-09-01', '2021-09-05'],
                              dateProps: '工作日',
                              startTime: '14:00',
                              therapist: '刘雪琴'
                            },
                            {
                              key: '2',
                              field: '指令',
                              task: '集体中个人指令的接受（一步）',
                              duration: ['2020-09-01', '2021-09-05'],
                              dateProps: '工作日',
                              startTime: '14:00',
                              therapist: '刘雪琴'
                            }
                          ]
const JtDailyPlanData = [
                          {
                            key: '0',
                            field: '数学',
                            task: '数字游戏 ',
                            startTime: '15:00',
                            therapist: '刘世东'
                          },
                          {
                            key: '1',
                            field: '语文',
                            task: '拼读p-o/i',
                            startTime: '15:00',
                            therapist: '刘世东'
                          },
                          {
                            key: '2',
                            field: '校园技能',
                            task: '回答问题结束时，可以坐下',
                            startTime: '15:00',
                            therapist: '刘世东'
                          }
                        ]
  const JtMonthlyPlanData = [
                              {
                                key: '0',
                                field: '数学',
                                task: '数字游戏',
                                duration: ['2020-09-01', '2021-09-05'],
                                dateProps: '工作日',
                                startTime: '15:00',
                                therapist: '刘世东'
                              },
                              {
                                key: '1',
                                field: '语文',
                                task: '拼读p-o/i',
                                duration: ['2020-09-01', '2021-09-05'],
                                dateProps: '工作日',
                                startTime: '15:00',
                                therapist: '刘世东'
                              },
                              {
                                key: '2',
                                field: '校园技能',
                                task: '回答问题结束时，可以坐下',
                                duration: ['2020-09-01', '2021-09-05'],
                                dateProps: '工作日',
                                startTime: '15:00',
                                therapist: '刘世东'
                              }
                            ]
const newStudentdata = [
                      {
                        key: '0',
                        name: '崔晓婷',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        supervisionDistribution: false,
                        classDistribution: false,
                        assessmentDistribution: false,
                        courseArrangement: false
                      },
                        {
                        key: '1',
                        name: '李小志',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        supervisionDistribution: true,
                        classDistribution: false,
                        assessmentDistribution: false,
                        courseArrangement: false
                      },
                      {
                        key: '2',
                        name: '薛小风',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        supervisionDistribution: true,
                        classDistribution: false,
                        assessmentDistribution: true,
                        courseArrangement: false
                      }
                    ]
// const newShowAvatars = [{ name: '崔晓婷', image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
//                       { name: '李小志', image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
//                       { name: '薛小风', image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' }]
const courseData = [{ key: '0', startTime: '08:00', courseType: '个训', therapist: '葛群', courseDetail: [{ taskName: '视觉感知-配对-6选1', taskPros: '日计划' }, { taskName: '听者反应-拍手', taskPros: '日计划' }, { taskName: '命名-棒棒糖	', taskPros: '日计划' }, { taskName: '命名-汽车	', taskPros: '日维持' }] },
                    { key: '1', startTime: '09:00', courseType: '集体', therapist: '张猛', assistantTeacher: '王玲' },
                    { key: '2', startTime: '14:00', courseType: '感统', therapist: '王玲' },
                    { key: '3', startTime: '15:00', courseType: '精细', therapist: '刘雪琴' }]
 const studentManageData = [
                      {
                        key: '0',
                        name: '王小明',
                        sex: '男',
                        age: 12,
                        guardianName: '王明',
                        guardianPhone: '18810888888',
                        className: '密集个训',
                        supervision: '张珊',
                        paymentState: '2021-8-31',
                        attendanceState: true
                      },
                      {
                        key: '1',
                        name: '张小红',
                        sex: '女',
                        age: 15,
                        guardianName: '张红',
                        guardianPhone: '16610666666',
                        className: '融合预备班',
                        supervision: '张珊',
                        paymentState: '2022-1-31',
                        attendanceState: false
                      },
                      {
                        key: '2',
                        name: '王小二',
                        sex: '男',
                        age: 7,
                        guardianName: '王二',
                        guardianPhone: '18810896666',
                        className: '幼小衔接班',
                        supervision: '张珊',
                        paymentState: '2022-1-31',
                        attendanceState: true
                      },
                      {
                        key: '3',
                        name: '李文文',
                        sex: '女',
                        age: 17,
                        guardianName: '李文',
                        guardianPhone: '18810335678',
                        className: '社交班',
                        supervision: '张珊',
                        paymentState: '未缴费',
                        attendanceState: true
                      }
                    ]
const supervisionManageData = [
                      {
                        key: '0',
                        name: '张珊',
                        sex: '女',
                        age: 42,
                        phoneNumber: '18810888899',
                        attendanceState: true
                      },
                      {
                        key: '1',
                        name: '王武',
                        sex: '男',
                        age: 35,
                        phoneNumber: '16610666656',
                        attendanceState: false
                      },
                      {
                        key: '2',
                        name: '李思',
                        sex: '女',
                        age: 27,
                        phoneNumber: '18810896623',
                        attendanceState: true
                      },
                      {
                        key: '3',
                        name: '程逸',
                        sex: '男',
                        age: 31,
                        phoneNumber: '18810665678',
                        attendanceState: true
                      }
                    ]
const therapistsManageData = [
                      {
                        key: '0',
                        name: '葛群',
                        sex: '女',
                        age: 32,
                        phoneNumber: '18810223163',
                        attendanceState: true
                      },
                      {
                        key: '1',
                        name: '张猛',
                        sex: '男',
                        age: 33,
                        phoneNumber: '16673963561',
                        attendanceState: true
                      },
                      {
                        key: '2',
                        name: '王玲',
                        sex: '女',
                        age: 32,
                        phoneNumber: '18810234762',
                        attendanceState: false
                      },
                      {
                        key: '3',
                        name: '刘雪琴',
                        sex: '女',
                        age: 47,
                        phoneNumber: '18890909090',
                        attendanceState: false
                      }
                    ]
const assessorManageData = [
                      {
                        key: '0',
                        name: '王萍',
                        sex: '女',
                        age: 30,
                        phoneNumber: '11738138132',
                        attendanceState: true
                      },
                      {
                        key: '1',
                        name: '刘飞',
                        sex: '男',
                        age: 52,
                        phoneNumber: '16609876543',
                        attendanceState: true
                      },
                      {
                        key: '2',
                        name: '李梅',
                        sex: '女',
                        age: 26,
                        phoneNumber: '18812345678',
                        attendanceState: true
                      },
                      {
                        key: '3',
                        name: '张志',
                        sex: '女',
                        age: 49,
                        phoneNumber: '18654327890',
                        attendanceState: true
                      }
                    ]
const otherDepartmentManageData = [
                      {
                        key: '0',
                        name: '王洋',
                        sex: '男',
                        age: 36,
                        department: '后勤部',
                        phoneNumber: '19753170316',
                        attendanceState: true
                      },
                      {
                        key: '1',
                        name: '马天',
                        sex: '男',
                        age: 32,
                        department: '宣传部',
                        phoneNumber: '17230318713',
                        attendanceState: true
                      }
                    ]
const administrationStudentInfoEnrolled = [
                                            {
                                              key: '0',
                                              name: '王小明',
                                              sex: '男',
                                              age: '12',
                                              guardianName: '王明',
                                              guardianPhone: '18810888888',
                                              address: '青岛市，花园路花园小区',
                                              infoDetail: '',
                                              serviceAgreement: [
                                                { pdfName: '测试', pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf' },
                                                { pdfName: '运动', pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf' }
                                              ],
                                              informedConsent: [],
                                              paymentState: '2021-06-31'
                                            },
                                            {
                                              key: '1',
                                              name: '张小红',
                                              sex: '女',
                                              age: '15',
                                              guardianName: '张红',
                                              guardianPhone: '16610666666',
                                              address: '青岛市，凤凰路凤凰小区',
                                              infoDetail: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
                                              serviceAgreement: [],
                                              informedConsent: [
                                                { pdfName: '测试', pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf' },
                                                { pdfName: '运动', pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf' }
                                              ],
                                              paymentState: '2021-06-31'
                                            },
                                            {
                                              key: '2',
                                              name: '王小二',
                                              sex: '男',
                                              age: '7',
                                              guardianName: '王小二',
                                              guardianPhone: '18810896666',
                                              address: '青岛市，泽平路泽平小区',
                                              infoDetail: '',
                                              serviceAgreement: [],
                                              informedConsent: [],
                                              paymentState: '2021-06-31'
                                            },
                                            {
                                              key: '3',
                                              name: '李文文',
                                              sex: '女',
                                              age: '17',
                                              guardianName: '李文',
                                              guardianPhone: '18810335678',
                                              address: '青岛市，东平路天逸华府',
                                              infoDetail: '',
                                              serviceAgreement: [],
                                              informedConsent: [],
                                              paymentState: '未缴费'
                                            }
                                          ]
const administrationStudentInfoAdmitted = [
                                            {
                                              key: '0',
                                              name: '王小波	',
                                              sex: '男',
                                              age: '14',
                                              guardianName: '王波',
                                              guardianPhone: '18810880001	',
                                              address: '青岛市，花园路花园小区'
                                            },
                                            {
                                              key: '1',
                                              name: '赵小博',
                                              sex: '男',
                                              age: '9',
                                              guardianName: '赵博',
                                              guardianPhone: '18810660002',
                                              address: '青岛市，凤凰路凤凰小区'
                                            },
                                            {
                                              key: '2',
                                              name: '张小顺',
                                              sex: '男',
                                              age: '12',
                                              guardianName: '张顺',
                                              guardianPhone: '18810220003',
                                              address: '青岛市，泽平路泽平小区'
                                            },
                                            {
                                              key: '3',
                                              name: '李小斐',
                                              sex: '女',
                                              age: '7',
                                              guardianName: '李斐',
                                              guardianPhone: '18810250004',
                                              address: '青岛市，凤凰路凤凰小区'
                                            },
                                            {
                                              key: '4',
                                              name: '薛晓娜',
                                              sex: '女',
                                              age: '14',
                                              guardianName: '薛娜',
                                              guardianPhone: '18850250005',
                                              address: '青岛市，东平路天逸华府'
                                            }
                                          ]
const supervisionInfoData = [
                                {
                                  key: '0',
                                  name: '张珊',
                                  sex: '女',
                                  age: 42,
                                  phoneNumber: '18810888899',
                                  address: '青岛市凤凰路凤凰小区',
                                  infoDetail: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
                                  employeeProperty: '正式员工',
                                  employeeContractStart: '2020-06-06',
                                  employeeContractEnd: '2021-07-01',
                                  employeeContract: [
                                    { pdfName: 'A合同', pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf' },
                                    { pdfName: 'B合同', pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf' }
                                  ]
                                },
                                {
                                  key: '1',
                                  name: '王武',
                                  sex: '男',
                                  age: 35,
                                  phoneNumber: '16610666656',
                                  address: '青岛市凤凰路凤凰小区',
                                  infoDetail: '',
                                  employeeProperty: '正式员工',
                                  employeeContractStart: '2020-06-06',
                                  employeeContractEnd: '2021-07-01',
                                  employeeContract: []
                                },
                                {
                                  key: '2',
                                  name: '李思',
                                  sex: '女',
                                  age: 27,
                                  phoneNumber: '18810896623',
                                  address: '青岛市凤凰路凤凰小区',
                                  infoDetail: '',
                                  employeeProperty: '正式员工',
                                  employeeContractStart: '2020-06-06',
                                  employeeContractEnd: '2021-07-01',
                                  employeeContract: []
                                },
                                {
                                  key: '3',
                                  name: '程逸',
                                  sex: '男',
                                  age: 31,
                                  phoneNumber: '18810665678',
                                  address: '青岛市凤凰路凤凰小区',
                                  infoDetail: '',
                                  employeeProperty: '正式员工',
                                  employeeContractStart: '2020-06-06',
                                  employeeContractEnd: '2021-07-01',
                                  employeeContract: []
                                }
                              ]
const therapistsInfoData = [
                            {
                              key: '0',
                              name: '葛群',
                              sex: '女',
                              age: 32,
                              phoneNumber: '18810223163',
                              goodDomain: ['个训', '集体', '语言'],
                              levelStar: 3,
                              address: '杭州市西湖区古荡湾',
                              infoDetail: '',
                              employeeProperty: '正式员工',
                              employeeContractStart: '2020-06-06',
                              employeeContractEnd: '2021-07-01',
                              employeeContract: []
                            },
                            {
                              key: '1',
                              name: '张猛',
                              sex: '男',
                              age: 33,
                              phoneNumber: '16673963561',
                              goodDomain: ['语言', '感统'],
                              levelStar: 5,
                              address: '杭州市西湖区古荡湾',
                              infoDetail: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
                              employeeProperty: '正式员工',
                              employeeContractStart: '2020-06-06',
                              employeeContractEnd: '2021-07-01',
                              employeeContract: [
                                { pdfName: 'A合同', pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf' },
                                { pdfName: 'B合同', pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf' }
                              ]
                            },
                            {
                              key: '2',
                              name: '王玲',
                              sex: '女',
                              age: 32,
                              phoneNumber: '18810234762',
                              goodDomain: ['个训', '感统', '精细'],
                              levelStar: 4,
                              address: '杭州市西湖区古荡湾',
                              infoDetail: '',
                              employeeProperty: '正式员工',
                              employeeContractStart: '2020-06-06',
                              employeeContractEnd: '2021-07-01',
                              employeeContract: []
                            },
                            {
                              key: '3',
                              name: '刘雪琴',
                              sex: '女',
                              age: 47,
                              phoneNumber: '18890909090',
                              goodDomain: ['集体', '语言', '精细'],
                              levelStar: 2,
                              address: '杭州市西湖区古荡湾',
                              infoDetail: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
                              employeeProperty: '正式员工',
                              employeeContractStart: '2020-06-06',
                              employeeContractEnd: '2021-07-01',
                              employeeContract: []
                            }
                           ]
const assessorInfoData = [
                          {
                            key: '0',
                            name: '王萍',
                            sex: '女',
                            age: 30,
                            phoneNumber: '11738138132',
                            goodDomain: ['ESDM', '语言'],
                            levelStar: 3,
                            address: '青岛市天长路天逸华府',
                            infoDetail: '',
                            employeeProperty: '正式员工',
                            employeeContractStart: '2020-06-06',
                            employeeContractEnd: '2021-07-01',
                            employeeContract: []
                          },
                          {
                            key: '1',
                            name: '刘飞',
                            sex: '男',
                            age: 52,
                            phoneNumber: '16609876543',
                            goodDomain: ['ESDM', '语言', '感统'],
                            levelStar: 4,
                            address: '青岛市天长路天逸华府',
                            infoDetail: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
                            employeeProperty: '正式员工',
                            employeeContractStart: '2020-06-06',
                            employeeContractEnd: '2021-07-01',
                            employeeContract: []
                          },
                          {
                            key: '2',
                            name: '李梅',
                            sex: '女',
                            age: 26,
                            phoneNumber: '18812345678',
                            goodDomain: [ 'VB', '感统' ],
                            levelStar: 3,
                            address: '青岛市天长路天逸华府',
                            infoDetail: '',
                            employeeProperty: '正式员工',
                            employeeContractStart: '2020-06-06',
                            employeeContractEnd: '2021-07-01',
                            employeeContract: [
                              { pdfName: 'A合同', pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf' },
                              { pdfName: 'B合同', pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf' }
                            ]
                          },
                          {
                            key: '3',
                            name: '张志',
                            sex: '男',
                            age: 49,
                            phoneNumber: '18654327890',
                            goodDomain: ['VB', 'ESDM', '语言', '感统'],
                            levelStar: 5,
                            address: '青岛市天长路天逸华府',
                            infoDetail: '',
                            employeeProperty: '正式员工',
                            employeeContractStart: '2020-06-06',
                            employeeContractEnd: '2021-07-01',
                            employeeContract: []
                          }
                          ]
const otherDepartmentInfoData = [
                            {
                              key: '0',
                              name: '王洋',
                              sex: '男',
                              age: 36,
                              phoneNumber: '19753170316',
                              department: '后勤部',
                              address: '青岛市花园路花园小区',
                              infoDetail: '',
                              employeeProperty: '正式员工',
                              employeeContractStart: '2020-06-06',
                              employeeContractEnd: '2021-07-01',
                              employeeContract: [
                                { pdfName: 'A合同', pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf' },
                                { pdfName: 'B合同', pdfRef: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf' }
                              ]
                            },
                            {
                              key: '1',
                              name: '马天',
                              sex: '男',
                              age: 32,
                              department: '宣传部',
                              phoneNumber: '17230318713',
                              address: '青岛市花园路花园小区',
                              infoDetail: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
                              employeeProperty: '正式员工',
                              employeeContractStart: '2020-06-06',
                              employeeContractEnd: '2021-07-01',
                              employeeContract: []
                            }
                          ]
const noticeInfoData = [
                        {
                          key: '0',
                          noticeTitle: '暑假',
                          noticeContent: '暑假从7月1日到8月31日，祝大家开心',
                          noticeDate: '2021-07-01'
                        },
                        {
                          key: '1',
                          noticeTitle: '端午放假',
                          noticeContent: '端午节从6月14日到6月16日，祝大家开心',
                          noticeDate: '2021-06-13'
                        },
                        {
                          key: '2',
                          noticeTitle: '五一放假',
                          noticeContent: '劳动节节从5月1日到5月5日，祝大家开心',
                          noticeDate: '2020-04-30'
                        },
                        {
                          key: '3',
                          noticeTitle: '学费',
                          noticeContent: '请尽快缴纳学费',
                          noticeDate: '2020-03-01'
                        }
                      ]
const StudentResultData = [
                            {
                              key: '0',
                              field: '听者反应',
                              task: '',
                              taskObjectives: '拍手',
                              startTime: '08:00',
                              totalTimes: 14,
                              noAssistanceTimes: 5,
                              noAssistanceCorrectTimes: 5,
                              correctRate: 100
                            },
                            {
                              key: '1',
                              field: '视觉感知',
                              task: '配对',
                              taskObjectives: '6选1',
                              startTime: '08:00',
                              totalTimes: 18,
                              noAssistanceTimes: 8,
                              noAssistanceCorrectTimes: 7,
                              correctRate: 87
                            },
                            {
                              key: '2',
                              field: '命名',
                              task: '',
                              taskObjectives: '棒棒糖',
                              startTime: '08:00',
                              totalTimes: 3,
                              noAssistanceTimes: 3,
                              noAssistanceCorrectTimes: 3,
                              correctRate: 100
                            },
                            {
                              key: '3',
                              field: '听者反应',
                              task: '从6张图中',
                              taskObjectives: '找小狗',
                              startTime: '08:00',
                              totalTimes: 20,
                              noAssistanceTimes: 5,
                              noAssistanceCorrectTimes: 3,
                              correctRate: 60
                            },
                            {
                              key: '4',
                              field: '模仿',
                              task: '大动作',
                              taskObjectives: '举手',
                              startTime: '08:00',
                              totalTimes: 3,
                              noAssistanceTimes: 3,
                              noAssistanceCorrectTimes: 3,
                              correctRate: 100
                            }
                          ]
const StudentScoreEntryData = [
                            // {
                            //   key: '0',
                            //   field: '听者反应',
                            //   task: '生活中指令',
                            //   taskObjectives: '拿出来',
                            //   startTime: '08:00',
                            //   totalTimes: 12,
                            //   totalAssistanceTimes: 4,
                            //   halfAssistanceTimes: 4,
                            //   noAssistanceTimes: 4,
                            //   noAssistanceCorrectTimes: 3,
                            //   correctRate: 75.00
                            // },
                            {
                              key: '1',
                              field: '视觉感知',
                              task: '配对',
                              taskObjectives: '6选1',
                              startTime: '08:00',
                              exploratoryData: null,
                              completeData: null,
                              passOrNot: null,
                              totalTimes: null,
                              totalAssistanceTimes: null,
                              halfAssistanceTimes: null,
                              noAssistanceTimes: null,
                              noAssistanceCorrectTimes: null,
                              correctRate: null
                            },
                            {
                              key: '2',
                              field: '命名',
                              task: '食物类',
                              taskObjectives: '棒棒糖',
                              startTime: '08:00',
                              exploratoryData: null,
                              completeData: null,
                              passOrNot: null,
                              totalTimes: null,
                              totalAssistanceTimes: null,
                              halfAssistanceTimes: null,
                              noAssistanceTimes: null,
                              noAssistanceCorrectTimes: null,
                              correctRate: null
                            }
                          ]
const SelectNotificationObjectData = [
                            {
                              key: '0',
                              name: '朱怀邦',
                              sex: '男',
                              age: 42,
                              role: '教导主任',
                              phone: '18810335678',
                              address: '杭州市西湖区古荡湾'
                            },
                            {
                              key: '1',
                              name: '张珊',
                              sex: '女',
                              age: 42,
                              role: '督导',
                              phone: '18810888899',
                              address: '青岛市凤凰路凤凰小区'
                            },
                            {
                              key: '2',
                              name: '王武',
                              sex: '男',
                              age: 35,
                              role: '督导',
                              phone: '16610666656',
                              address: '青岛市凤凰路凤凰小区'
                            },
                            {
                              key: '3',
                              name: '葛群',
                              sex: '女',
                              age: 32,
                              role: '康复师',
                              phone: '18810223163',
                              address: '杭州市西湖区古荡湾'
                            },
                            {
                              key: '4',
                              name: '张猛',
                              sex: '男',
                              age: 33,
                              role: '康复师',
                              phone: '16673963561',
                              address: '杭州市西湖区古荡湾'
                            },
                            {
                              key: '5',
                              name: '王萍',
                              sex: '女',
                              age: 30,
                              role: '评估师',
                              phone: '11738138132',
                              address: '青岛市天长路天逸华府'
                            },
                            {
                              key: '6',
                              name: '刘飞',
                              sex: '男',
                              age: 52,
                              role: '评估师',
                              phone: '16609876543',
                              address: '青岛市天长路天逸华府'
                            },
                            {
                              key: '7',
                              name: '王洋',
                              sex: '男',
                              age: 36,
                              role: '其他人员',
                              phone: '19753170316',
                              address: '青岛市花园路花园小区'
                            },
                            {
                              key: '8',
                              name: '马天',
                              sex: '男',
                              age: 32,
                              role: '其他人员',
                              phone: '17230318713',
                              address: '青岛市花园路花园小区'
                            }
                          ]
const BusinessEvaluationData = [
                            {
                              key: '0',
                              name: '张晓蓝',
                              sex: '女',
                              age: '14',
                              guardianName: '张蓝',
                              guardianPhone: '18810880001	',
                              address: '青岛市，花园路花园小区'
                            },
                            {
                              key: '1',
                              name: '王小博',
                              sex: '男',
                              age: '9',
                              guardianName: '王博',
                              guardianPhone: '18810660002',
                              address: '青岛市，凤凰路凤凰小区'
                            },
                            {
                              key: '2',
                              name: '张小倩',
                              sex: '男',
                              age: '12',
                              guardianName: '张倩',
                              guardianPhone: '18810220003',
                              address: '青岛市，泽平路泽平小区'
                            }
                          ]
// --------------qss--------------
const AllMessages = [
  {
    Sendid: '张珊',
    Recid: '葛群',
    Stuid: '王小明',
    createTime: '2021/6/17 10:25',
    content: 'That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.'
  },
  {
    Sendid: '张珊',
    Recid: '葛群',
    Stuid: '王小明',
    createTime: '2021/6/17 10:25',
    content: 'That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.That now our dreams may finally come true.'
  },
  {
    Sendid: '张珊',
    Recid: '葛群',
    Stuid: '王小明',
    createTime: '2021/6/18 10:25',
    content: 'That now our dreams may finally come true.'
  },
  {
    Sendid: '张珊',
    Recid: '葛群',
    Stuid: '王小明',
    createTime: '2021/6/19 10:25',
    content: 'That now our dreams may finally come true.'
  },
  {
    Sendid: '葛群',
    Recid: '张珊',
    Stuid: '王小明',
    createTime: '2021/6/20 10:25',
    content: 'That now our dreams may finally come true.'
  },
  {
    Sendid: '张珊',
    Recid: '张猛',
    Stuid: '王小明',
    createTime: '2021/6/18 14:35',
    content: 'That now our dreams may finally come true.'
  },
  {
    Sendid: '张珊',
    Recid: '王玲',
    Stuid: '王小明',
    createTime: '2021/6/20 14:03',
    content: 'That now our dreams may finally come true.'
  },
  {
    Sendid: '张珊',
    Recid: '刘雪琴',
    Stuid: '李文文',
    createTime: '2021/6/23 08:46',
    content: 'That now our dreams may finally come true.'
  }
]
// --------------qss--------------
export {
    studentData,
    showAvatars,
    allsupervision,
    supervisiondata,
    therapistsdata,
    alltherapists,
    studentdetail,
    historyData,
    externalAssessmentData,
    AssessmentTableData,
    AssessmentIEPTableData,
    AssessorAssessmentData,
    StudentCourseData,
    StudentCourseChartDataX,
    StudentCourseChartDataY,
    GxDailyPlanData,
    GxMonthlyPlanData,
    GxMaintainData,
    JxDailyPlanData,
    JxMonthlyPlanData,
    JxMaintainData,
    YyDailyPlanData,
    YyMonthlyPlanData,
    SjDailyPlanData,
    SjMonthlyPlanData,
    JtDailyPlanData,
    JtMonthlyPlanData,
    newStudentdata,
    // newShowAvatars,
    courseData,
    studentManageData,
    supervisionManageData,
    therapistsManageData,
    assessorManageData,
    otherDepartmentManageData,
    administrationStudentInfoEnrolled,
    administrationStudentInfoAdmitted,
    supervisionInfoData,
    therapistsInfoData,
    assessorInfoData,
    otherDepartmentInfoData,
    noticeInfoData,
    therapistsStudentdata,
    therapistsShowAvatars,
    StudentResultData,
    StudentScoreEntryData,
    assessorStudentdata,
    assessorShowAvatars,
    parentStudentdata,
    SelectNotificationObjectData,
    BusinessEvaluationData,
    AllMessages
}
