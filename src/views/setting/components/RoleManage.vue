<template>
  <div>
    <el-button type="primary" size="mini">新增角色</el-button>
  </div>
</template>

<script>
import { getRoleList } from '@/api/setting'
export default {
  name: '',
  filters: {},
  components: {},
  props: {},
  data () {
    return {
      paramsObj: {
        page: 1, // 默认拿第一页数据
        pagesize: 4// 每页数量
      },
      rolesList: [],
      total: null
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getRoleList()
  },
  methods: {
    async getRoleList () {
      const res = await getRoleList(this.paramsObj)
      console.log(res)
      this.rolesList = res.rows
      this.total = res.total// 用于后期做分页
    }
  }
}
</script>

<style scoped>
</style>
