<template>
  <div id="e_page">
    <h2>Pagination 分页</h2>
    <p class="demo-p">当数据量过多时，使用分页分解数据。</p>
    <el-row :gutter="20">
      <el-col :span="15">
      <h3 class="demo-h3">附加功能</h3>
      <p class="demo-p">根据场景需要，可以添加其他功能模块。</p>
      <div class="demo-block">
        <div class="block">
          <span class="demonstration">显示总数</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">调整每页显示条数</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="sizes, prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">直接前往</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>

        <div class="block">
          <span class="demonstration">完整功能</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>
<style>
#e_page .demo-block {
  border: 1px solid #eaeefb;
  border-radius: 4px;
  transition: .2s;
  padding: 0px;
  margin-bottom: 24px;
}
.block {
  padding: 30px 24px;
  border-bottom: 1px solid #eff2f6;
}
.block .demonstration {
  font-size: 14px;
  color: #8492a6;
  line-height: 44px;
}
.demonstration+.el-pagination {
  float: right;
  width: 70%;
  margin: 5px 20px 0 0;
}
</style>
