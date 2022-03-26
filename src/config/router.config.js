// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '主页' },
    redirect: '/personalsettings',
    children: [
      // administration
      {
        path: '/administration/studentmanage',
        name: 'administrationstudentmanage',
        redirect: '/administration/studentmanage/studentinfo',
        component: RouteView,
        meta: { title: 'menu.administration.studentmanage', icon: bxAnaalyse, keepAlive: true, permission: ['administration'] },
        children: [
          {
            path: '/administration/studentmanage/studentinfo',
            name: 'studentmanagestudentinfo',
            redirect: '/administration/studentmanage/studentinfo/enrolled',
            component: RouteView,
            meta: { title: 'menu.administration.studentmanage.studentinfo', keepAlive: true, permission: ['administration'] },
            children: [
              {
                path: '/administration/studentmanage/studentinfo/enrolled',
                name: 'studentinfo_enrolled',
                component: () => import('@/views/administration/StudentInfo/StudentInfoEnrolled'),
                meta: { title: 'menu.administration.studentmanage.studentinfo.enrolled', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/studentmanage/studentinfo/enrolled/edit/:nameid',
                name: 'studentinfoenrollededit',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StudentInfo/StudentInfoEnrolledEdit'),
                meta: { title: 'menu.administration.studentmanage.studentinfo.enrolled', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/studentmanage/studentinfo/enrolled/add',
                name: 'studentinfoenrolledadd',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StudentInfo/StudentInfoEnrolledAdd'),
                meta: { title: 'menu.administration.studentmanage.studentinfo.enrolled', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/studentmanage/studentinfo/admitted',
                name: 'studentinfo_admitted',
                component: () => import('@/views/administration/StudentInfo/StudentInfoAdmitted'),
                meta: { title: 'menu.administration.studentmanage.studentinfo.admitted', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/studentmanage/studentinfo/admitted/edit/:nameid',
                name: 'studentinfoadmittededit',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StudentInfo/StudentInfoAdmittedEdit'),
                meta: { title: 'menu.administration.studentmanage.studentinfo.admitted', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/studentmanage/studentinfo/admitted/add',
                name: 'studentinfoadmittedadd',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StudentInfo/StudentInfoAdmittedAdd'),
                meta: { title: 'menu.administration.studentmanage.studentinfo.admitted', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/studentmanage/studentinfo/business',
                name: 'studentinfo_business',
                component: () => import('@/views/administration/StudentInfo/BusinessEvaluation'),
                meta: { title: 'menu.administration.studentmanage.studentinfo.business', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/studentmanage/studentinfo/business/add',
                name: 'studentinfo_business_add',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StudentInfo/BusinessEvaluationAdd'),
                meta: { title: 'menu.administration.studentmanage.studentinfo.business', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/studentmanage/studentinfo/business/edit/:nameid',
                name: 'studentinfo_business_edit',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StudentInfo/BusinessEvaluationEdit'),
                meta: { title: 'menu.administration.studentmanage.studentinfo.business', keepAlive: true, permission: ['administration'] }
              }
            ]
          },
          {
            path: '/administration/studentmanage/dailymanage',
            name: 'studentmanagedailymanage',
            component: () => import('@/views/administration/StudentManage/StudentManage'),
            meta: { title: 'menu.administration.studentmanage.dailymanage', keepAlive: true, permission: ['administration'] }
          }
        ]
      },
      {
        path: '/administration/stuffmanage',
        name: 'stuffmanage',
        redirect: '/administration/stuffmanage/dailyManage',
        component: RouteView,
        meta: { title: 'menu.administration.stuffmanage', icon: 'crown', keepAlive: true, permission: ['administration'] },
        children: [
          {
            path: '/administration/stuffmanage/dailyManage',
            name: 'stuffmanagedailyManage',
            redirect: '/administration/stuffmanage/dailyManage/director',
            component: RouteView,
            meta: { title: 'menu.administration.stuffmanage.dailymanage', keepAlive: true, permission: ['administration'] },
            children: [
              {
                path: '/administration/stuffmanage/dailyManage/director',
                name: 'stuffmanage_dailyManage_director',
                component: () => import('@/views/administration/StaffManage/StaffManageDirector'),
                meta: { title: 'menu.administration.stuffmanage.dailymanage.director', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/dailyManage/supervision',
                name: 'stuffmanage_dailyManage_supervision',
                component: () => import('@/views/administration/StaffManage/StaffManageSupervision'),
                meta: { title: 'menu.administration.stuffmanage.dailymanage.supervision', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/dailyManage/therapists',
                name: 'stuffmanage_dailyManage_therapists',
                component: () => import('@/views/administration/StaffManage/StaffManageTherapists'),
                meta: { title: 'menu.administration.stuffmanage.dailymanage.therapists', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/dailyManage/assessor',
                name: 'stuffmanage_dailyManage_assessor',
                component: () => import('@/views/administration/StaffManage/StaffManageAssessor'),
                meta: { title: 'menu.administration.stuffmanage.dailymanage.assessor', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/dailyManage/logistics',
                name: 'stuffmanage_dailyManage_logistics',
                component: () => import('@/views/administration/StaffManage/StaffManageLogistics'),
                meta: { title: 'menu.administration.stuffmanage.dailymanage.logistics', keepAlive: true, permission: ['administration'] }
              }
            ]
          },
          {
            path: '/administration/stuffmanage/stuffinfo',
            name: 'stuffmanage_stuffinfo',
            redirect: '/administration/stuffmanage/stuffinfo/director',
            component: RouteView,
            meta: { title: 'menu.administration.stuffmanage.stuffinfo', keepAlive: true, permission: ['administration'] },
            children: [
              {
                path: '/administration/stuffmanage/stuffinfo/director',
                name: 'stuffmanage_stuffinfo_director',
                component: () => import('@/views/administration/StaffInfo/StaffInfoDirector/StaffInfoDirector'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.director', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/director/add',
                name: 'stuffmanage_stuffinfo_director_add',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StaffInfo/StaffInfoDirector/StaffInfoDirectorAdd'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.director', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/director/edit/:nameid',
                name: 'stuffmanage_stuffinfo_director_edit',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StaffInfo/StaffInfoDirector/StaffInfoDirectorEdit'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.director', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/supervision',
                name: 'stuffmanage_stuffinfo_supervision',
                component: () => import('@/views/administration/StaffInfo/StaffInfoSupervision/StaffInfoSupervision'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.supervision', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/supervision/add',
                name: 'stuffmanage_stuffinfo_supervision_add',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StaffInfo/StaffInfoSupervision/StaffInfoSupervisionAdd'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.supervision', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/supervision/edit/:nameid',
                name: 'stuffmanage_stuffinfo_supervision_edit',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StaffInfo/StaffInfoSupervision/StaffInfoSupervisionEdit'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.supervision', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/therapists',
                name: 'stuffmanage_stuffinfo_therapists',
                component: () => import('@/views/administration/StaffInfo/StaffInfoTherapists/StaffInfoTherapists'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.therapists', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/therapists/add',
                name: 'stuffmanage_stuffinfotherapistsadd',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StaffInfo/StaffInfoTherapists/StaffInfoTherapistsAdd'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.therapists', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/therapists/edit/:nameid',
                name: 'stuffmanage_stuffinfotherapistsedit',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StaffInfo/StaffInfoTherapists/StaffInfoTherapistsEdit'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.therapists', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/assessor',
                name: 'stuffmanage_stuffinfo_assessor',
                component: () => import('@/views/administration/StaffInfo/StaffInfoAssessor/StaffInfoAssessor'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.assessor', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/assessor/add',
                name: 'stuffmanage_stuffinfoassessoradd',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StaffInfo/StaffInfoAssessor/StaffInfoAssessorAdd'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.assessor', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/assessor/edit/:nameid',
                name: 'stuffmanage_stuffinfoassessoredit',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StaffInfo/StaffInfoAssessor/StaffInfoAssessorEdit'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.assessor', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/logistics',
                name: 'stuffmanage_stuffinfo_logistics',
                component: () => import('@/views/administration/StaffInfo/StaffInfoLogistics/StaffInfoLogistics'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.logistics', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/logistics/add',
                name: 'stuffmanage_stuffinfologisticsadd',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StaffInfo/StaffInfoLogistics/StaffInfoLogisticsAdd'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.logistics', keepAlive: true, permission: ['administration'] }
              },
              {
                path: '/administration/stuffmanage/stuffinfo/logistics/edit/:nameid',
                name: 'stuffmanage_stuffinfologisticsedit',
                hidden: true, // 控制路由是否显示在 sidebar
                component: () => import('@/views/administration/StaffInfo/StaffInfoLogistics/StaffInfoLogisticsEdit'),
                meta: { title: 'menu.administration.stuffmanage.stuffinfo.logistics', keepAlive: true, permission: ['administration'] }
              }
            ]
          }
        ]
      },
      {
        path: '/administration/notice',
        name: 'notice',
        component: () => import('@/views/administration/Notice/Notice'),
        meta: { title: 'menu.administration.notice', icon: 'form', keepAlive: true, permission: ['administration'] }
      },
      {
        path: '/administration/notice/add',
        name: 'noticeadd',
        hidden: true, // 控制路由是否显示在 sidebar
        component: () => import('@/views/administration/Notice/NoticeAdd'),
        meta: { title: 'menu.administration.notice', keepAlive: true, permission: ['administration'] }
      },
      // director
      {
        path: '/director/studentinfo',
        name: 'directorstudentinfo',
        component: () => import('@/views/director/studentInfo/StudentInfo'),
        meta: { title: 'menu.director.studentinfo', icon: 'solution', keepAlive: true, permission: ['director'] }
      },
      {
        path: '/director/studentinfo/detail/:nameid',
        name: 'studentinfodetail',
        hidden: true, // 控制路由是否显示在 sidebar
        component: () => import('@/views/director/studentInfo/StudentInfoDetail'),
        meta: { title: 'menu.director.studentinfo', keepAlive: true, permission: ['director'] }
      },
      {
        path: '/director/freshmenmanage',
        name: 'freshmenmanage',
        redirect: '/director/freshmenmanage/assigned',
        component: RouteView,
        meta: { title: 'menu.director.freshmenmanage', icon: 'star', keepAlive: false, permission: ['director'] },
        children: [
          {
            path: '/director/freshmenmanage/assigned',
            name: 'freshmenmanage_assigned',
            component: () => import('@/views/director/freshmentManage/FreshmenManageAssigned'),
            meta: { title: 'menu.director.freshmenmanage.assigned', keepAlive: false, permission: ['director'] }
          },
          {
            path: '/director/freshmenmanage/assigned/distribution/:nameid',
            name: 'assignedstudentdetail',
            hidden: true, // 控制路由是否显示在 sidebar
            component: () => import('@/views/director/freshmentManage/NewManageStepForm/NewManageStepForm'),
            meta: { title: 'menu.director.freshmenmanage.assigned', keepAlive: true, permission: ['director'] }
          },
          {
            path: '/director/freshmenmanage/admitted',
            name: 'freshmenmanage_admitted',
            component: () => import('@/views/director/freshmentManage/FreshmenManageAdmitted'),
            meta: { title: 'menu.director.freshmenmanage.admitted', keepAlive: false, permission: ['director'] }
          },
          {
            path: '/director/freshmenmanage/business',
            name: 'freshmenmanage_business',
            component: () => import('@/views/director/freshmentManage/BusinessEvaluation/BusinessEvaluation'),
            meta: { title: 'menu.administration.studentmanage.studentinfo.business', keepAlive: false, permission: ['director'] }
          },
          {
            path: '/director/freshmenmanage/business/detail/:nameid',
            name: 'freshmenmanage_business_detail',
            hidden: true, // 控制路由是否显示在 sidebar
            component: () => import('@/views/director/freshmentManage/BusinessEvaluation/BusinessEvaluationDetail'),
            meta: { title: 'menu.administration.studentmanage.studentinfo.business', keepAlive: false, permission: ['director'] }
          }
        ]
      },
      {
        path: '/director/supervisioninfo',
        name: 'supervisioninfo',
        component: () => import('@/views/director/supervisionInfo/SupervisionInfo'),
        meta: { title: 'menu.director.supervisioninfo', icon: 'container', keepAlive: false, permission: ['director'] }
      },
      {
        path: '/director/therapistsinfo',
        name: 'therapistsinfo',
        component: () => import('@/views/director/therapistsInfo/TherapistsInfo'),
        meta: { title: 'menu.director.therapistsinfo', icon: 'file-text', keepAlive: false, permission: ['director'] }
      },
      {
        path: '/director/institutionaldata',
        name: 'institutionaldata',
        component: () => import('@/views/director/institutionalData/InstitutionalData'),
        meta: { title: 'menu.director.institutionaldata', icon: 'bar-chart', keepAlive: false, permission: ['director'] }
      },
      // supervision
      {
        path: '/supervision/rehabilitationplan',
        name: 'supervisionRehabilitationPlan',
        component: () => import('@/views/supervision/SupervisionRehabilitationPlan/SupervisionRehabilitationPlanSelect'),
        meta: { title: 'menu.supervision.rehabilitationplan', icon: 'radar-chart', keepAlive: true, permission: ['supervision'] }
      },
      {
        path: '/supervision/rehabilitationplan/detail/:nameid',
        name: 'supervisionRehabilitationPlandetail',
        hidden: true, // 控制路由是否显示在 sidebar
        component: () => import('@/views/supervision/SupervisionRehabilitationPlan/SupervisionRehabilitationPlan'),
        meta: { title: 'menu.supervision.rehabilitationplan', keepAlive: true, permission: ['supervision'] }
      },
      {
        path: '/supervision/studentinfo',
        name: 'supervisiontudentinfo',
        component: () => import('@/views/supervision/SupervisionStudentInfo/SupervisionStudentInfo'),
        meta: { title: 'menu.supervision.studentinfo', icon: 'solution', keepAlive: true, permission: ['supervision'] }
      },
      {
        path: '/supervision/studentinfo/detail/:nameid',
        name: 'supervisionstudentinfodetail',
        hidden: true, // 控制路由是否显示在 sidebar
        component: () => import('@/views/supervision/SupervisionStudentInfo/SupervisionStudentInfoDetail'),
        meta: { title: 'menu.supervision.studentinfo', keepAlive: true, permission: ['supervision'] }
      },
      {
        path: '/supervision/therapistsInfo',
        name: 'supervisiontherapistsInfo',
        component: () => import('@/views/supervision/SupervisionTherapistsInfo/SupervisionTherapistsInfo'),
        meta: { title: 'menu.supervision.therapistsinfo', icon: 'file-text', keepAlive: true, permission: ['supervision'] }
      },
      // therapists
      {
        path: '/therapists/teachingplan',
        name: 'therapiststeachingplan',
        redirect: '/therapists/teachingplan/todaycourse',
        component: RouteView,
        meta: { title: 'menu.therapists.teachingplan', icon: 'check-square', keepAlive: true, permission: ['therapists'] },
        children:
        [
          {
            path: '/therapists/teachingplan/todaycourse',
            name: 'therapiststeachingplantodaycourse',
            component: () => import('@/views/therapists/TeachingPlan/TodayCourse/TodayCourse'),
            meta: { title: 'menu.therapists.teachingplan.todaycourse', keepAlive: true, permission: ['therapists'] }
          },
          {
            path: '/therapists/teachingplan/maintainmission',
            name: 'therapiststeachingplanmaintainmission',
            component: () => import('@/views/therapists/TeachingPlan/MaintainMisson/MaintainMisson'),
            meta: { title: 'menu.therapists.teachingplan.maintainmission', keepAlive: true, permission: ['therapists'] }
          },
          {
            path: '/therapists/teachingplan/todaycourse/scoreentry/detail',
            name: 'therapiststeachingplantodaycoursescoreentry',
            hidden: true, // 控制路由是否显示在 sidebar
            component: () => import('@/views/therapists/TeachingPlan/TodayCourseScoreEntry/TodayCourseScoreEntry'),
            meta: { title: 'menu.therapists.teachingplan.scoreentry', keepAlive: false, permission: ['therapists'] }
          },
          {
            path: '/therapists/teachingplan/maintainmission/scoreentry/detail',
            name: 'therapiststeachingplanmaintainmissionscoreentry',
            hidden: true, // 控制路由是否显示在 sidebar
            component: () => import('@/views/therapists/TeachingPlan/MaintainMissonScoreEntry/MaintainMissonScoreEntry'),
            meta: { title: 'menu.therapists.teachingplan.scoreentry', keepAlive: false, permission: ['therapists'] }
          }
        ]
      },
      {
        path: '/therapists/studentinfo',
        name: 'therapistsstudentinfo',
        component: () => import('@/views/therapists/TherapistsStudentInfo/TherapistsStudentInfo'),
        meta: { title: 'menu.therapists.studentinfo', icon: 'solution', keepAlive: true, permission: ['therapists'] }
      },
      {
        path: '/therapists/studentinfo/detail/:nameid',
        name: 'therapistsstudentinfodetail',
        hidden: true, // 控制路由是否显示在 sidebar
        component: () => import('@/views/therapists/TherapistsStudentInfo/TherapistsStudentInfoDetail'),
        meta: { title: 'menu.therapists.studentinfo', keepAlive: true, permission: ['therapists'] }
      },

      // assessor
      {
        path: '/assessor/studentinfo',
        name: 'assessorstudentinfo',
        component: () => import('@/views/assessor/AssessorStudentInfo'),
        meta: { title: 'menu.assessor.studentinfo', icon: 'solution', keepAlive: true, permission: ['assessor'] }
      },
      {
        path: '/assessor/studentinfo/detail/:nameid',
        name: 'assessorstudentinfodetail',
        hidden: true, // 控制路由是否显示在 sidebar
        component: () => import('@/views/assessor/AssessorStudentInfoDetail'),
        meta: { title: 'menu.assessor.studentinfo', keepAlive: true, permission: ['assessor'] }
      },
      {
        path: '/assessor/business',
        name: 'assessorbusiness',
        component: () => import('@/views/assessor/BusinessEvaluation/BusinessEvaluation'),
        meta: { title: 'menu.administration.studentmanage.studentinfo.business', icon: 'security-scan', keepAlive: true, permission: ['assessor'] }
      },
      {
        path: '/assessor/business/detail/:nameid',
        name: 'assessorbusinessdetail',
        hidden: true, // 控制路由是否显示在 sidebar
        component: () => import('@/views/assessor/BusinessEvaluation/BusinessEvaluationDetail'),
        meta: { title: 'menu.administration.studentmanage.studentinfo.business', keepAlive: true, permission: ['assessor'] }
      },

      // parent
      {
        path: '/parent/studentinfo',
        name: 'parentstudentinfo',
        component: () => import('@/views/parent/ParentStudentInfo'),
        meta: { title: 'menu.parent.studentinfo', icon: 'solution', keepAlive: true, permission: ['parent'] }
      },
      {
        path: '/parent/communicate',
        name: 'parentcommunicate',
        component: () => import('@/views/parent/ParentCommunicate'),
        meta: { title: 'menu.parent.communicate', icon: 'heart', keepAlive: true, permission: ['parent'] }
      },
      {
        path: '/parent/studentinfo/detail/:nameid',
        name: 'parentstudentinfodetail',
        hidden: true, // 控制路由是否显示在 sidebar
        component: () => import('@/views/parent/ParentStudentInfoDetail'),
        meta: { title: 'menu.parent.studentinfo', keepAlive: true, permission: ['parent'] }
      },

      // personalsettings
      {
        path: '/personalsettings',
        component: () => import('@/views/personalSettings/PersonalSettings'),
        name: 'personalsettings',
        hidden: true, // 控制路由是否显示在 sidebar
        meta: { title: 'menu.account', icon: 'user', keepAlive: true, permission: ['administration', 'director', 'supervision', 'therapists', 'assessor', 'parent'] }
      }
      // // dashboard
      // {
      //   path: '/dashboard',
      //   name: 'dashboard',
      //   redirect: '/dashboard/workplace',
      //   component: RouteView,
      //   meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] },
      //   children: [
      //     {
      //       path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
      //       name: 'Analysis',
      //       component: () => import('@/views/dashboard/Analysis'),
      //       meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: ['dashboard'] }
      //     },
      //     {
      //       path: '/dashboard/workplace',
      //       name: 'Workplace',
      //       component: () => import('@/views/dashboard/Workplace'),
      //       meta: { title: 'menu.dashboard.workplace', keepAlive: true, permission: ['dashboard'] }
      //     }
      //   ]
      // },
      // // forms
      // {
      //   path: '/form',
      //   redirect: '/form/base-form',
      //   component: RouteView,
      //   meta: { title: 'menu.form', icon: 'form', permission: ['form'] },
      //   children: [
      //     {
      //       path: '/form/base-form',
      //       name: 'BaseForm',
      //       component: () => import('@/views/form/basicForm'),
      //       meta: { title: 'menu.form.basic-form', keepAlive: true, permission: ['form'] }
      //     },
      //     {
      //       path: '/form/step-form',
      //       name: 'StepForm',
      //       component: () => import('@/views/form/stepForm/StepForm'),
      //       meta: { title: 'menu.form.step-form', keepAlive: true, permission: ['form'] }
      //     },
      //     {
      //       path: '/form/advanced-form',
      //       name: 'AdvanceForm',
      //       component: () => import('@/views/form/advancedForm/AdvancedForm'),
      //       meta: { title: 'menu.form.advanced-form', keepAlive: true, permission: ['form'] }
      //     }
      //   ]
      // },
      // // list
      // {
      //   path: '/list',
      //   name: 'list',
      //   component: RouteView,
      //   redirect: '/list/table-list',
      //   meta: { title: 'menu.list', icon: 'table', permission: ['table'] },
      //   children: [
      //     {
      //       path: '/list/table-list/:pageNo([1-9]\\d*)?',
      //       name: 'TableListWrapper',
      //       hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
      //       component: () => import('@/views/list/TableList'),
      //       meta: { title: 'menu.list.table-list', keepAlive: true, permission: ['table'] }
      //     },
      //     {
      //       path: '/list/basic-list',
      //       name: 'BasicList',
      //       component: () => import('@/views/list/BasicList'),
      //       meta: { title: 'menu.list.basic-list', keepAlive: true, permission: ['table'] }
      //     },
      //     {
      //       path: '/list/card',
      //       name: 'CardList',
      //       component: () => import('@/views/list/CardList'),
      //       meta: { title: 'menu.list.card-list', keepAlive: true, permission: ['table'] }
      //     },
      //     {
      //       path: '/list/search',
      //       name: 'SearchList',
      //       component: () => import('@/views/list/search/SearchLayout'),
      //       redirect: '/list/search/article',
      //       meta: { title: 'menu.list.search-list', keepAlive: true, permission: ['table'] },
      //       children: [
      //         {
      //           path: '/list/search/article',
      //           name: 'SearchArticles',
      //           component: () => import('../views/list/search/Article'),
      //           meta: { title: 'menu.list.search-list.articles', permission: ['table'] }
      //         },
      //         {
      //           path: '/list/search/project',
      //           name: 'SearchProjects',
      //           component: () => import('../views/list/search/Projects'),
      //           meta: { title: 'menu.list.search-list.projects', permission: ['table'] }
      //         },
      //         {
      //           path: '/list/search/application',
      //           name: 'SearchApplications',
      //           component: () => import('../views/list/search/Applications'),
      //           meta: { title: 'menu.list.search-list.applications', permission: ['table'] }
      //         }
      //       ]
      //     }
      //   ]
      // },

      // // profile
      // {
      //   path: '/profile',
      //   name: 'profile',
      //   component: RouteView,
      //   redirect: '/profile/basic',
      //   meta: { title: 'menu.profile', icon: 'profile', permission: ['profile'] },
      //   children: [
      //     {
      //       path: '/profile/basic',
      //       name: 'ProfileBasic',
      //       component: () => import('@/views/profile/basic'),
      //       meta: { title: 'menu.profile.basic', permission: ['profile'] }
      //     },
      //     {
      //       path: '/profile/advanced',
      //       name: 'ProfileAdvanced',
      //       component: () => import('@/views/profile/advanced/Advanced'),
      //       meta: { title: 'menu.profile.advanced', permission: ['profile'] }
      //     }
      //   ]
      // },

      // // result
      // {
      //   path: '/result',
      //   name: 'result',
      //   component: RouteView,
      //   redirect: '/result/success',
      //   meta: { title: 'menu.result', icon: 'check-circle-o', permission: ['result'] },
      //   children: [
      //     {
      //       path: '/result/success',
      //       name: 'ResultSuccess',
      //       component: () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
      //       meta: { title: 'menu.result.success', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      //     },
      //     {
      //       path: '/result/fail',
      //       name: 'ResultFail',
      //       component: () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),
      //       meta: { title: 'menu.result.fail', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      //     }
      //   ]
      // },

      // // Exception
      // {
      //   path: '/exception',
      //   name: 'exception',
      //   component: RouteView,
      //   redirect: '/exception/403',
      //   meta: { title: 'menu.exception', icon: 'warning', permission: ['exception'] },
      //   children: [
      //     {
      //       path: '/exception/403',
      //       name: 'Exception403',
      //       component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
      //       meta: { title: 'menu.exception.not-permission', permission: ['exception'] }
      //     },
      //     {
      //       path: '/exception/404',
      //       name: 'Exception404',
      //       component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
      //       meta: { title: 'menu.exception.not-find', permission: ['exception'] }
      //     },
      //     {
      //       path: '/exception/500',
      //       name: 'Exception500',
      //       component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
      //       meta: { title: 'menu.exception.server-error', permission: ['exception'] }
      //     }
      //   ]
      // },

      // // account
      // {
      //   path: '/account',
      //   component: RouteView,
      //   redirect: '/account/center',
      //   name: 'account',
      //   hidden: true, // 控制路由是否显示在 sidebar
      //   meta: { title: 'menu.account', icon: 'user', keepAlive: true, permission: ['user'] },
      //   children: [
      //     {
      //       path: '/account/center',
      //       name: 'center',
      //       component: () => import('@/views/account/center'),
      //       meta: { title: 'menu.account.center', keepAlive: true, permission: ['user'] }
      //     },
      //     {
      //       path: '/account/settings',
      //       name: 'settings',
      //       component: () => import('@/views/account/settings/Index'),
      //       meta: { title: 'menu.account.settings', hideHeader: true, permission: ['user'] },
      //       redirect: '/account/settings/basic',
      //       hideChildrenInMenu: true,
      //       children: [
      //         {
      //           path: '/account/settings/basic',
      //           name: 'BasicSettings',
      //           component: () => import('@/views/account/settings/BasicSetting'),
      //           meta: { title: 'account.settings.menuMap.basic', hidden: true, permission: ['user'] }
      //         },
      //         {
      //           path: '/account/settings/security',
      //           name: 'SecuritySettings',
      //           component: () => import('@/views/account/settings/Security'),
      //           meta: {
      //             title: 'account.settings.menuMap.security',
      //             hidden: true,
      //             keepAlive: true,
      //             permission: ['user']
      //           }
      //         },
      //         {
      //           path: '/account/settings/custom',
      //           name: 'CustomSettings',
      //           component: () => import('@/views/account/settings/Custom'),
      //           meta: { title: 'account.settings.menuMap.custom', hidden: true, keepAlive: true, permission: ['user'] }
      //         },
      //         {
      //           path: '/account/settings/binding',
      //           name: 'BindingSettings',
      //           component: () => import('@/views/account/settings/Binding'),
      //           meta: { title: 'account.settings.menuMap.binding', hidden: true, keepAlive: true, permission: ['user'] }
      //         },
      //         {
      //           path: '/account/settings/notification',
      //           name: 'NotificationSettings',
      //           component: () => import('@/views/account/settings/Notification'),
      //           meta: {
      //             title: 'account.settings.menuMap.notification',
      //             hidden: true,
      //             keepAlive: true,
      //             permission: ['user']
      //           }
      //         }
      //       ]
      //     }
      //   ]
      // }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
