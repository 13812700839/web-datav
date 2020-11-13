<template>
  <div id="wrapper">
    <div style="width: 100%">

      <el-tabs id="tabs">
        <el-tab-pane label="研发与维修" name="first">
          <div class="title">
            <img src="./assets/images/logo.png" class="img"/>
            <p class="leftline">
              <img src="./assets/images/rightLine.png" alt/>
            </p>
            <p class="rightline">
              <img src="./assets/images/rightLine.png" alt/>
            </p>
          </div>
          <ul class="menu" ref="singleDom">
            <li v-for="(item,index) in yanfa" :key="index" @click="goto(index, item)"
                :class="{'list':true, 'active':item.show}">
              <router-link :to="item.url">{{ item.name }}</router-link>
            </li>
          </ul>
          <router-view></router-view>
        </el-tab-pane>
        <el-tab-pane label="车辆销售" name="second">
          <div class="title">
            <p
              style="
                text-align: center;
                font-size: 24px;
                color: #fff;
                margin: 0px;
              "
            >
              车辆销售
            </p>
            <p class="leftline">
              <img src="./assets/images/leftLine.png" alt/>
            </p>
            <p class="rightline">
              <img src="./assets/images/rightLine.png" alt/>
            </p>
          </div>
          <ul class="menu" ref="singleDom">
            <li class="list active"><a href="#">销售管理</a></li>
            <li class="list"><a href="#">车辆管理</a></li>
          </ul>

        </el-tab-pane>
        <el-tab-pane label="车队管理" name="third">
          <div class="title">
            <p
              style="
                text-align: center;
                font-size: 24px;
                color: #fff;
                margin: 0px;
              "
            >
              车队管理
            </p>
            <p class="leftline">
              <img src="./assets/images/leftLine.png" alt=""/>
            </p>
            <p class="rightline">
              <img src="./assets/images/rightLine.png" alt=""/>
            </p>
          </div>
          <ul class="menu" ref="singleDom">
            <li class="list active"><a href="#">车辆管理</a></li>
            <li class="list"><a href="#">销售管理</a></li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import './assets/style/table.css' // 本页面所使用Css样式引入

export default {
  name: 'App',
  data() {
    return {
      activeName: 'first',
      yanfa: [
        {
          name: '数据大屏',
          url: 'dataScreen',
          show: true
        },
        {
          name: '统计分析',
          url: 'dataStatistics',
          show: false
        },
        {
          name: '单车监控',
          url: 'realTimeMonitoring',
          show: false
        },
        {
          name: '车辆管理',
          url: 'vehicleManagement',
          show: false
        },
        {
          name: '用户管理',
          url: 'userManagement',
          show: false
        }
      ]
    }
  },
  methods: {
    goto(i, item) {
      // item.show = !item.show;
      item.show = true;
      for (var j = 0; j < this.yanfa.length; j++) {
        if (j !== i) {
          this.yanfa[j].show = false;
        }
      }
    }
  }
}
</script>

<style scoped>

html, body {
  line-height: inherit;
}

html, body, #wrapper {
  background-image: url('assets/true.png');
  width: 100%;
  height: 100%;
  position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  overflow-y: auto;
}

.title {
  width: 100%;
  height: 55px;
  background: url("./assets/images/headerBox.png") no-repeat;
  background-size: 100%;
  text-align: center;
  position: relative;
}

.img {
  width: 24%;
}

.leftline {
  position: absolute;
  top: 10px;
  width: 24%;
  left: calc(50% - 600px);
}

.rightline {
  position: absolute;
  top: 10px;
  width: 24%;
  right: calc(50% - 600px);
  z-index: 103;
}

ul.menu {
  padding: 0;
  list-style: none;
  width: 1.7%;
  position: fixed;
  height: 2%;
  top: 16%;
  font-family: 'Century Gothic';
  box-shadow: 0px 0px 25px #00000070;
  clear: both;
  display: table;
}

ul.menu .list {
  display: table-cell;
  width: 2em;
  height: 7em;
  text-align: center;
  vertical-align: middle;
  float: left;
  background: #1c48a5;
  clear: both;
  margin-top: 2px;
  border-bottom: 1px solid #1c48a5;
}

ul.menu .list a {
  text-decoration: none;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  font-size: 1em;
  height: 7em;
  color: #fff;
  line-height: 1.2em;
  word-spacing: 1.5em;
  letter-spacing: 0.3em;
  word-break: break-all;
  cursor: pointer
}

ul.menu .active {
  background-color: #0d78cc;
  color: #09fbd2;
}

.icon {
  width: 1%;
  height: 8%;
  position: fixed;
  top: 46%;
  left: 1.6%;
  background-color: #0d78cc;
}
</style>
