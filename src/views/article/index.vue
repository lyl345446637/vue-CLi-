这是首页右下部分内容区
/* template搭建div部分 */
<template>
    <div class="article-Component">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <!-- 面包屑路径导航 -->
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            </el-breadcrumb>
            <!-- 面包屑路径导航 -->
          </div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="状态">
            <el-radio-group v-model="form.resource">
              <el-radio label="全部"></el-radio>
              <el-radio label="草稿"></el-radio>
              <el-radio label="通过"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="频道">
            <el-select v-model="form.region" placeholder="请选择频道">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-date-picker
              v-model="form.date1"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00']">
            </el-date-picker>
          </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
      </el-card>
      <!-- 数据筛选表单 -->

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          根据筛选条件共查询到了 45333 条结果。
        </div>
        <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        </el-table>
        <!-- 数据列表 -->

        <!-- 列表分页 -->
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </el-card>
    </div>
</template>
/* script搭建js部分 */
<script>
export default {
  name: 'ArticleIndex',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style scoped lang="less">
.box-card:nth-of-type(2){
  margin-top: 20px;
}
</style>
