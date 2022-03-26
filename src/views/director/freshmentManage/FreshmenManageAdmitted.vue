<template>
  <page-header-wrapper :title="false">
    <div class="main-content">
      <br />
      <a-table :data-source="data" :columns="columns" class="stu-table" bordered>
        <span slot="name" class="title-style">名字</span>
        <span slot="sex" class="title-style">性别</span>
        <span slot="age" class="title-style">年龄</span>
        <span slot="guardianName" class="title-style">监护人</span>
        <span slot="guardianPhone" class="title-style">监护人电话</span>
        <span slot="address" class="title-style">地址</span>
        <span slot="inputTime" class="title-style">录入时间</span>
        <div
          slot="filterDropdown"
          slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
          style="padding: 8px"
        >
          <a-input
            v-ant-ref="c => (searchInput = c)"
            :placeholder="`搜索名字`"
            :value="selectedKeys[0]"
            style="width: 188px; margin-bottom: 8px; display: block;"
            @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
            @pressEnter="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
          />
          <a-button
            type="primary"
            icon="search"
            size="small"
            style="width: 90px; margin-right: 8px"
            @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
          >
            搜索
          </a-button>
          <a-button size="small" style="width: 90px" @click="() => handleReset(clearFilters)">
            重置
          </a-button>
        </div>
        <a-icon
          slot="filterIcon"
          slot-scope="filtered"
          type="search"
          :style="{ color: filtered ? '#108ee9' : undefined }"
        />
        <template slot="customRender" slot-scope="text, record, index, column">
          <span v-if="searchText && searchedColumn === column.dataIndex">
            <template
              v-for="(fragment, i) in text
                .toString()
                .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
            >
              <mark
                v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                :key="i"
                class="highlight">{{ fragment }}</mark>
              <template v-else>{{ fragment }}</template>
            </template>
          </span>
          <template v-else>
            {{ text }}
          </template>
        </template>
      </a-table>
    </div>
  </page-header-wrapper>
</template>

<script>
import { getDirectorAdmittedStudentData } from 'network/getStudentData'
export default {
  data () {
    return {
      data: [],
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      columns: [
        {
          dataIndex: 'name',
          key: 'name',
          align: 'center',
          width: '18%',
          slots: { title: 'name' },
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender'
          },
          onFilter: (value, record) =>
            record.name
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus()
              }, 0)
            }
          }
        },
        {
          dataIndex: 'sex',
          key: 'sex',
          align: 'center',
          width: '10%',
          slots: { title: 'sex' }
        },
        {
          dataIndex: 'age',
          key: 'age',
          align: 'center',
          width: '10%',
          slots: { title: 'age' }
        },
        {
          dataIndex: 'guardianName',
          key: 'guardianName',
          align: 'center',
          width: '10%',
          slots: { title: 'guardianName' }
        },
        {
          dataIndex: 'guardianPhone',
          key: 'guardianPhone',
          align: 'center',
          width: '14%',
          slots: { title: 'guardianPhone' }
        },
        {
          dataIndex: 'address',
          key: 'address',
          align: 'center',
          width: '24%',
          slots: { title: 'address' }
        }
      ]
    }
  },
  created () {
    this.getDirectorAdmittedStudentData()
  },
  methods: {
    getDirectorAdmittedStudentData () {
      getDirectorAdmittedStudentData().then(res => {
        this.data = res
        console.log(res)
      })
    },
    handleSearch (selectedKeys, confirm, dataIndex) {
      confirm()
      this.searchText = selectedKeys[0]
      this.searchedColumn = dataIndex
    },

    handleReset (clearFilters) {
      clearFilters()
      this.searchText = ''
    }
  }
}
</script>
<style scoped>
.main-content {
  min-height: 600px;
  background-color: white;
}
.stu-table {
  margin-left: 16px;
  margin-right: 16px;
}
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
.title-style {
    font-size: 14px;
    font-weight: bold;
}
</style>
