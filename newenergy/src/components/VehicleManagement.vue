<template>
  <div id="vehiclemanagement">
    <div class="containerBox">
      <div style="padding: 38px 0 30px 20px;" class="ba">
        <div class="searchInputBox">
          <div class="inputItem pr">
            <p class="searchName">车载终端编号</p>
            <el-input size="small" class="basicInput" clearable></el-input>
          </div>
          <div class="inputItem pr">
            <p class="searchName">车牌号</p>
            <el-input size="small" class="basicInput" clearable></el-input>
          </div>

          <div class="inputItem pr">
            <p class="searchName">车辆状态</p>
            <el-select placeholder="请选择" size="small" value="all">
              <el-option value="all" label="全部"></el-option>
              <el-option value="true" label="启用"></el-option>
              <el-option value="false" label="禁用"></el-option>
            </el-select>
          </div>

          <div class="inputItem buttonItem">
            <p class="searchName">&nbsp;</p>
            <el-button type="primary" class="basicBtn basicBlueBtn">查询</el-button>
          </div>
        </div>
      </div>
      <div class="vehicleInfo">
        <el-button size="small">新增车辆</el-button>
        <!-- 弹窗 -->
      </div>
      <div class="ba" style="margin-top:50px">
        <div class="tabItem">
          <div class="tabItemConent" id="tabItemConent">
            <el-table id="tableBox" :data="tableData" :header-cell-style="{background:'#0d2458',border:'none' }"
                      :row-style="{background:'#193777'}" :cell-style="{border:'none'}">
              <el-table-column class="eltable" prop="index" label="序号"></el-table-column>
              <el-table-column class="eltable" prop="CarVIN" label="车辆终端编号"></el-table-column>
              <el-table-column class="eltable" prop="CarNumber" label="车牌号"></el-table-column>
              <el-table-column class="eltable" prop="Company" label="运营公司"></el-table-column>
              <el-table-column class="eltable" prop="Carline" label="车队"></el-table-column>
              <el-table-column class="eltable" prop="OutComDate" label="出厂日期"></el-table-column>
              <el-table-column class="eltable" prop="RegDate" label="注册日期"></el-table-column>
              <el-table-column class="eltable" prop="CurrKm" label="当前里程数"></el-table-column>
              <el-table-column class="eltable" prop="BadCount" label="故障次数"></el-table-column>
              <el-table-column class="eltable" prop="Status" label="状态"></el-table-column>

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
export default {
  name: "VehicleManagement",
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.axios('../../static/json/carlist.json').then(res=>{
      this.tableData=res.data.carlist;
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    });
  }
}
</script>

<style scoped>
#vehiclemanagement {
  color: white;
  margin-left: 50px;
}
</style>
