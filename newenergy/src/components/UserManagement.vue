<template>
  <div id="usermanagement">
    <div class="containerBox">
      <div style="padding: 38px 0 30px 20px;" class="ba">
        <div class="searchInputBox">
          <div class="inputItem pr">
            <p class="searchName">用户名</p>
            <el-input size="small" v-model="searchData.UserName" class="basicInput" clearable></el-input>
          </div>
          <div class="inputItem pr">
            <p class="searchName">真实姓名</p>
            <el-input size="small" v-model="searchData.RealName" class="basicInput" clearable></el-input>
          </div>
          <div class="inputItem pr">
            <p class="searchName">手机号</p>
            <el-input size="small" v-model="searchData.Telephone" class="basicInput" clearable></el-input>
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
        <el-button size="small" @click="dialogFormVisible=true">新增用户</el-button>
        <!-- 弹窗 -->
        <el-dialog id="Dialog" title="新增用户" width="45%" :visible.sync="dialogFormVisible">
          <el-form class="Form" :model="form"  label-width="20%" ref="form" :rules="rules">
            <el-form-item label="用户名"  prop="UserName">
              <el-input placeholder="请输入用户名" v-model="form.UserName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="Password">
              <el-input placeholder="请输入密码" v-model="form.Password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="RePassword">
              <el-input placeholder="请确认密码" v-model="form.RePassword"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="Telephone">
              <el-input v-model="form.Telephone" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名" prop="RealName">
              <el-input v-model="form.RealName" placeholder="请输入真实姓名"></el-input>
            </el-form-item>
            <el-form-item label="关联公司" prop="Company">
              <el-select v-model="form.Company" placeholder="请选择关联公司">
                <el-option label="公司1" value="Company1"></el-option>
                <el-option label="公司2" value="Company2"></el-option>
                <el-option label="公司3" value="Company3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="关联部门" prop="Dept" >
              <el-select v-model="form.Dept" placeholder="请选择关联部门">
                <el-option label="部门1" value="Dept1"></el-option>
                <el-option label="部门2" value="Dept2"></el-option>
                <el-option label="部门3" value="Dept3"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible=false;resetForm('form')">取 消</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
            <el-button type="primary" @click="submitForm('form')">确 定</el-button>
          </div>
        </el-dialog>
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
      pagename: "当前位置：用户管理",        //页面标题
      searchData: {               //查询数据
        UserName: "testusername",           //用户姓名
        RealName: "测试姓名",                //真实姓名
        Telephone: "138XXXXXXXX",           //电话
        Company: "all",                       // 公司名称
        State: "all",                      //状态
        Dept: "all"                           //部门
      },
      tableData: [],
      dialogFormVisible: false,
      form:{
        UserName: "",           //用户姓名
        Password: "",           //用户密码
        RePassword: "",         //确认密码
        Telephone: "",          //电话
        RealName: "",           //真实姓名
        Company: "",            // 公司名称
        Dept: ""                //部门
      },
      rules:{
        UserName:[
          { required: true, message: "请输入用户名", trigger: "blur"},
          { pattern: /^[a-zA-Z0-9]{6,16}$/, message:'用户名格式错误', trigger: "blur"}
        ],
        Password:[
          { required: true, message: "请输入密码",trigger: "blur"},
          { pattern: /[a-zA-Z\d+]{6,16}/, message:'密码格式错误',trigger:'blur'}
        ],
        RePassword:[
          { required: true, message: "请输入确认密码", trigger: "blur"},

        ],
        Telephone:[
          { required: true, message: "请输入电话号码", trigger: "blur"},
          { pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: "电话号码格式错误", trigger: "blur"}
        ],
        RealName:[
          { required: true, message: "请输入真实姓名", trigger: "blur"},
          { pattern: /^[A-Za-z0-9\u4e00-\u9fa5]{1,16}$/, message: "真实姓名格式错误", trigger: "blur"}
        ],
        Company:[
          { required: true, message: '请选择关联运营公司', trigger: 'change' },
        ],
        Dept:[
          { required: true, message: '请选择关联部门', trigger: 'change' },
        ],
      }
    };
  },
  methods: {
    // 表单提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('信息提交成功！');
        } else {
          console.log('表单提交失败！');
          return false;
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
