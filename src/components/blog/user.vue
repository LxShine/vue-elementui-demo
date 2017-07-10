<template>
  <section>
    <el-row>
      <el-col :span="24">
        <!--表单-->
        <el-form :inline="true" :model="params" class="demo-form-inline">
          <el-form-item label="姓名">
            <el-input v-model="params.userName" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="生日下限">
            <el-date-picker
              v-model="params.startDate"
              align="right"
              type="date"
              placeholder="生日下限">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="生日上限">
            <el-date-picker
              v-model="params.endDate"
              align="right"
              type="date"
              placeholder="生日上限">
            </el-date-picker>
          </el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <a href="javascript:;" id="download" style="float: right;color: #169bd5;font-size: 14px;padding-top: 7px" @click="download()" download="download.csv">导出数据</a>
        </el-form>
        
        <!--表格-->
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column type="selection">
          </el-table-column>
          <el-table-column
            prop="birthday"
            label="出生日期"
            sortable
            :formatter="dateFormat"
            width="180">
          </el-table-column>
          <el-table-column
            prop="userName"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 30, 50, 100, 300, 500]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </el-col>
    </el-row>

    <el-dialog title="修改个人信息" v-model="dialogFormVisible" size="tiny">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;" ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSave" :loading="editLoading">修改</el-button>
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data () {
    return {
      params: {
        userName: '',
        startDate: '',
        endDate: ''
      },
      tableData: [],
      dialogFormVisible: false,
      editLoading: false,
      form: {
        userName: '',
        address: '',
        birthday: '',
      },
      currentPage: 4,
      total: 500,
      pageSize: 10,
      table_index: 999,
    };
  },
  created () {
    this.$http.post('/user/getAllUser.do', {
      userId: 'nnnn',
      userName: 'name',
      birthday: '1995-04-15'
    }).then((response) => {
      this.tableData = response.data;
    });
  },
  methods: {
    dateFormat (row, column) {
      var date = row['birthday'];
      if (date === undefined) {
        return "";
      }
      return this.$dateFormat(date);
    },
    onSubmit () {
      this.$message('模拟数据，这个方法并不管用哦~');
    },
    handleDelete (index, row) {
      this.tableData.splice(index, 1);
      this.$message({
        message: "操作成功！",
        type: 'success'
      });
    },
    handleEdit (index, row) {
      this.dialogFormVisible = true;
      this.form = Object.assign({}, row);
      this.table_index = index;
    },
    handleSave () {
      this.$confirm('确认提交吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        cancelButtonClass: 'cancel'
      }).then(() => {
        this.editLoading = true;
        let date = this.form.date;
        if (typeof date === "object") {
          date = [date.getFullYear(), (date.getMonth() + 1), (date.getDate())].join('-');
          this.form.date = date
        }
//          this.tableData[this.table_index] = this.form;
        this.tableData.splice(this.table_index, 1, this.form);
        this.$message({
          message: "操作成功！",
          type: 'success'
        });
        this.editLoading = false;
        this.dialogFormVisible = false;
      }).catch(() => {

      });
    },
    download: function() {
      var obj = document.getElementById('download');
      var str = "姓名,出生日期,地址\n";
      for (var i = 0; i < this.tableData.length; i++) {
        var item = this.tableData[i];
        str += item.name + ',' + item.date + ',' + item.address;
        str += "\n";
      }
      str = encodeURIComponent(str);
      obj.href = "data:text/csv;charset=utf-8,\ufeff" + str;
      obj.download = "download.csv";
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style>
  .el-pagination {
    text-align: center;
    margin-top: 30px;
  }
  .el-message-box__btns .cancel {
    float: right;
    margin-left: 10px;
  }
</style>
