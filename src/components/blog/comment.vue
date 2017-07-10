<template>
  <section>
    <el-row>
      <el-col :span="24">
        <!--表单-->
        <el-form :inline="true" :model="params" class="demo-form-inline">
          <el-form-item label="姓名">
            <el-input v-model="params.userNickName" placeholder="姓名"></el-input>
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
          <el-button type="primary" @click="searchUser">查询</el-button>
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
            width="150">
          </el-table-column>
          <el-table-column
            prop="userName"
            label="账户名"
            width="150">
          </el-table-column>
          <el-table-column
            prop="userNickname"
            label="昵称"
            width="150">
          </el-table-column>
          <el-table-column
            prop="userTruename"
            label="真实姓名"
            width="150">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="150">
          </el-table-column>
          <el-table-column
            prop="city"
            label="城市"
            width="150">
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button type="primary" size="small" @click="userDetail(scope.$index, scope.row)">查看</el-button>
              <el-button type="danger" size="small" @click="deleteUser(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="sizeChange"
            @current-change="currentChange"
            :current-page="params.pageNum"
            :page-sizes="[2, 10, 30, 50, 100, 300, 500]"
            :page-size="params.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </el-col>
    </el-row>

    <el-dialog title="修改个人信息" v-model="dialogFormVisible" size="tiny">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.userNickName"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;" ></el-date-picker>
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
        userNickName: '',
        startDate: '',
        endDate: '',
        pageNum: 1,
        pageSize: 2
      },
      tableData: [],
      dialogFormVisible: false,
      editLoading: false,
      form: {
        userName: '',
        address: '',
        birthday: '',
      },
      total: 500,
      table_index: 999,
    };
  },
  created () {
    var p = JSON.parse(JSON.stringify(this.params));
    this.$http.post('/user/getAllUser.do', p).then((response) => {
      var pageUser = response.data;
      this.total = pageUser.total;
      this.params.pageNum = pageUser.pageNum;
      this.tableData = pageUser.list;
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
    searchUser () {
      var p = JSON.parse(JSON.stringify(this.params));
      this.$http.post('/user/getAllUser.do', p).then((response) => {
        var pageUser = response.data;
        this.total = pageUser.total;
        this.params.pageNum = pageUser.pageNum;
        this.tableData = pageUser.list;
      });
    },
    deleteUser (index, row) {
      this.tableData.splice(index, 1);
      this.$message({
        message: "操作成功！",
        type: 'success'
      });
    },
    userDetail (index, row) {
      this.dialogFormVisible = true;
      this.form = Object.assign({}, row);
      this.table_index = index;
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
    sizeChange(val) {
      this.params.pageSize = val;
      this.searchUser();
    },
    currentChange(val) {
      this.params.pageNum = val;
      this.searchUser();
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
