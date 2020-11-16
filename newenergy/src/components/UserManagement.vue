<template>
  <div id="usermanagement">
    <div class="containerBox">
      <div style="padding: 38px 0 30px 20px;" class="ba">
        <div class="searchInputBox">
          <div class="inputItem pr">
            <p class="searchName">用户名</p>
            <el-input size="small" :value="searchData.UserName" class="basicInput" clearable></el-input>
          </div>
          <div class="inputItem pr">
            <p class="searchName">真实姓名</p>
            <el-input size="small" :value="searchData.RealName" class="basicInput" clearable></el-input>
          </div>
          <div class="inputItem pr">
            <p class="searchName">手机号</p>
            <el-input size="small" :value="searchData.Telephone" class="basicInput" clearable></el-input>
          </div>
          <div class="inputItem pr">
            <p class="searchName">公司</p>
            <el-select placeholder="请选择" v-model="searchData.Company" size="small">
              <el-option value="all" label="全部"></el-option>
              <el-option value="1" label="公司1"></el-option>
              <el-option value="2" label="公司2"></el-option>
              <el-option value="3" label="公司3"></el-option>
            </el-select>
          </div>
          <div class="inputItem pr">
            <p class="searchName">状态</p>
            <el-select placeholder="请选择" v-model="searchData.State" size="small">
              <el-option value="all" label="全部"></el-option>
              <el-option value="true" label="启用"></el-option>
              <el-option value="false" label="禁用"></el-option>
            </el-select>
          </div>
          <div class="inputItem pr">
            <p class="searchName">部门</p>
            <el-select placeholder="请选择" v-model="searchData.Dept" size="small">
              <el-option value="all" label="全部"></el-option>
              <el-option value="1" label="部门1"></el-option>
              <el-option value="2" label="部门2"></el-option>
              <el-option value="3" label="部门3"></el-option>
            </el-select>
          </div>
          <div class="inputItem buttonItem">
            <p class="searchName">&nbsp;</p>
            <el-button type="primary" class="basicBtn basicBlueBtn">查询</el-button>
          </div>
        </div>
<!--        <div>用户名：{{searchData.UserName}}真实姓名：{{searchData.RealName}}电话：{{searchData.Telephone}}公司：{{searchData.Company}}状态：{{ searchData.State}}部门：{{searchData.Dept}}</div>-->
      </div>
      <div class="vehicleInfo">
        <el-button size="small">新增用户</el-button>
        <!-- 弹窗 -->
      </div>
      <div class="ba" style="margin-top:50px">
        <div class="tabItem">
          <div class="tabItemConent" id="tabItemConent">

            <el-table id="tableBox" :data="tableData" :header-cell-style="{background:'#0d2458',border:'none' }"
                      :row-style="{background:'#193777'}" :cell-style="{border:'none'}">
              <el-table-column class="eltable" prop="index" label="序号"></el-table-column>
              <el-table-column class="eltable" prop="UserName" label="用户名"></el-table-column>
              <el-table-column class="eltable" prop="RealName" label="真实姓名"></el-table-column>
              <el-table-column class="eltable" prop="Telephone" label="手机"></el-table-column>
              <el-table-column class="eltable" prop="Dept" label="部门"></el-table-column>
              <el-table-column class="eltable" prop="Company" label="公司"></el-table-column>
              <el-table-column class="eltable" prop="CarEnterprises" label="车企"></el-table-column>
              <el-table-column class="eltable" prop="Status" label="状态"></el-table-column>
              <el-table-column class="eltable" prop="CreateTime" label="创建时间"></el-table-column>
              <el-table-column class="eltable" label="操作">
                <template slot-scope="scope">
                  <span size="mini">编辑</span>
                  <span size="mini" type="danger">删除</span>
                </template>
              </el-table-column>
            </el-table>

          </div>
          <!-- 分页 -->
          <div class="block">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/style/table.css"

export default {
  name: "UserManagement",
  data() {
    return {
      searchData: {               //查询数据
        UserName: "testusername",           //用户姓名
        RealName: "测试姓名",                //真实姓名
        Telephone: "138XXXXXXXX",           //电话
        Company: "all",                       // 公司名称
        State: "all",                      //状态
        Dept: "all"                           //部门
      },
      tableData: []
    };
  },
  mounted(){
    this.axios('../../static/json/userlist.json').then(res => {
      this.tableData = res.data.userlist;
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
  }
}
</script>

<style scoped>
#usermanagement {
  color: aliceblue;
  margin-left: 40px;
  text-align: center;
}

.title {
  text-align: left;
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 16px;
}

.el-form-item {
  width: 100%;
  margin-left: 10%;
}

#Dialog .el-input, #Dialog .el-select {
  width: 60%;
}

.inputItem {
  margin-right: 10px;
  width: 20%;
}

.basicBlueBtn {
  margin-top: 33px;
}
</style>
