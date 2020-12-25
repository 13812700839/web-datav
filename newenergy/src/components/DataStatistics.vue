<template>
  <div id="datastatistics">
    <div id="app-content">
      <div class="containerBox">
        <div style="padding: 28px 0 28px 20px;" class="ba">
          <div class="searchInputBox">
            <div class="inputItem pr">
              <p style="float:left;margin:0;line-height:35px;padding-right:4px" class="searchName">时间</p>
              <!--
            <el-date-picker v-model="value" type="datetimerange" :picker-options="pickerOptions" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right">
            </el-date-picker>
            -->
            </div>
            <div class="inputItem buttonItem">
              <el-button type="primary" class="basicBtn basicBlueBtn">查询</el-button>
            </div>
          </div>
        </div>
        <div>
          <div style="float:left;" class="ba aa">
            <div class="tabItem">
              <p class="tabItemTitle">新增故障比例</p>
              <div class="tabItemConent">
                <div id="failureRatio" style="width: 500px;height: 350px;"></div>
              </div>
            </div>
          </div>
          <div style="float:right;" class="ba aa">
            <div class="tabItem">
              <p class="tabItemTitle">新增故障数量</p>
              <div class="tabItemConent">
                <div id="failureNum" style="width: 400px;height: 350px;"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style="float:left;" class="ba aa">
            <div class="tabItem">
              <p class="tabItemTitle">能耗统计数据</p>
              <div class="tabItemConent">
                <div id="energy" style="position: relative; top: 50px; left: 20px; width: 520px;height: 350px;"></div>
              </div>
            </div>
          </div>
          <div style="float:right;" class="ba aa">
            <div class="tabItem">
              <p class="tabItemTitle">蓄电池平均电流电压</p>
              <div class="tabItemConent">
                <div id="AvgVC"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="float:left;width: 100%;height:500px;" class="ba">
            <div class="tabItem">
              <p class="tabItemTitle">车辆城市分布Top10</p>
              <div class="tabItemConent" style="height:450px;">
                <div id='CityTop' style="position:relative;top:50px;width: 1200px;height: 400px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DataStatistics",
  data() {
    return {
      mychart: null,
      mychart1: null,
      mychart2: null,
      mychart3: null,
      mychart4: null
    }
  },
  mounted() {

    this.drawFailureRatio();
    this.drawFailureNum();
    this.drawEnergy();
    this.drawBatteryPack();
    this.drawCityTop();

  },
  methods: {

    // 定义绘制圆环图的方法
    async drawFailureRatio() {

      // 初始化echarts实例
      this.mychart = this.$echarts.init(document.getElementById('failureRatio'))

      // TODO 请求JSON文件中的数据
      var sourcedata= [];
      var legenddata= [];
      await this.axios('static/json/failureRatio.json').then(res=> {
        var data = res.data.data2;
        sourcedata = data;
        for(var i=0;i<data.length;i++){
          legenddata.push(sourcedata[i].name)
        }
        console.log(sourcedata);
        console.log(legenddata);
      }).catch(err=> {
        console.log(err)
      })

      // 准备option
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: legenddata,
          y: "bottom",
          textStyle: {
            color: "rgba(255, 255, 255, 0.7)"
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: true
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        calculable: true,
        series: [
          {
            name: "新增故障比例",
            type: "pie",
            radius: ["50%", "70%"],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              },
              emphasis: {
                label: {
                  show: true,
                  position: "center",
                  textStyle: {
                    fontSize: "30",
                    fontWeight: "bold"
                  }
                }
              }
            },
            data: sourcedata
          }
        ],
        backgroundColor: "rgba(0,0,0,0)"
      };

      // 为实例设置option
      this.mychart.setOption(option);

    },
    async drawFailureNum() {
      this.mychart1 = this.$echarts.init(document.getElementById('failureNum'))

      // TODO 请求JSON文件中的数据
      var sourcedata= [];
      var legenddata= [];
      await this.axios('static/json/failureRatio.json').then(res=> {
        var data = res.data.data2;
        sourcedata = data;
        for(var i=0;i<data.length;i++){
          legenddata.push(sourcedata[i].name)
        }
        console.log(sourcedata);
        console.log(legenddata);
      }).catch(err=> {
        console.log(err)
      })

      let option={
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: "center",
          y: "bottom",
          data: legenddata,
          textStyle: {
            color: "rgb(255, 255, 255)"
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: true
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        calculable: true,
        series: [
          {
            name: "新增故障数量",
            type: "pie",
            radius: ["20%", "70%"],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              },
              emphasis: {
                label: {
                  show: true
                },
                labelLine: {
                  show: true
                }
              }
            },
            data: sourcedata
          }
        ],
        backgroundColor: "rgba(0,0,0,0)"
      }

      this.mychart1.setOption(option);
    },
    async drawEnergy() {

      this.mychart2 = this.$echarts.init(document.getElementById('energy'))

      // TODO 请求JSON文件中的数据
      var xdata= [];
      var ydata= [];
      await this.axios('static/json/energy.json').then(res=> {
        var data_x = res.data.xdata;
        var data_y = res.data.ydata;
        xdata = data_x;
        ydata = data_y;
      }).catch(err=> {
        console.log(err)
      })

      let option = {
        color: ['#3398DE'],
        grid: {
          left: '10%',
          right: '10%',
          bottom: '15%'
        },
        xAxis: {
          type: 'category',
          data: xdata,
          boundaryGap: true,
          nameGap: 30,
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: '#0c3b71'
            }
          },
          axisLabel: {
            show: true,
            color: 'rgb(170, 170, 170)',
            fontsize: 16
          }
        },
        yAxis: {
          type: 'value',
          name: '能耗统计数据',
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            alignWithLabel: false
          },
          axisLine: {
            lineStyle: {
              color: '#0c3b71'
            }
          },
          axisLabel: {
            show: true,
            color: 'rgb(170, 170, 170)',
            formatter: '{value}'
          }
        },
        series: [
          {
            name: 'boxplot',
            type: 'boxplot',
            itemStyle: {
              normal: {
                color:{
                  type: 'linear',
                  x:0,
                  y:0,
                  x2:0,
                  y2:1,
                  colorStops: [{
                    offset: 0,
                    color: '#0286ff'
                  },{
                    offset: 0.5,
                    color: '#027eff'
                  },{
                    offset: 1,
                    color: '#00feff'
                  }]
                },
              }
            },
            data: ydata,
          }
        ]
      }

      this.mychart2.setOption(option);

    },
    async drawBatteryPack(){

      this.mychart3=this.$echarts.init(document.getElementById("AvgVC"));
      var data=[]
      var hours = ['1a', '2a', '3a', '4a', '5a', '6a','7a', '8a', '9a','10a','11a','12p'];
      var batterys = ["电池1","电池2","电池3","电池4","电池5","电池6","电池7"];
      // TODO 请求JSON文件中的数据
      await this.axios('static/json/batteryPack.json').then(res=> {
        data = res.data.data;
      }).catch(err=> {
        console.log(err)
      })
      let option = {
        visualMap: {
          max:20,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          }
        },
        xAxis3D: {
          type:'category',
          data:hours
        },
        yAxis3D: {
          type:'category',
          data:batterys
        },
        zAxis3D: {
          type:'value'
        },
        grid3D: {
          boxWidth:200,
          boxDepth:80,
          light: {
            main: {intensity:1.2},
            ambient: {intensity:0.3}
          },
          axisLine: {lineStyle: { color:'#fff' }},
          axisPointer: {lineStyle: { color:'#fff' }}
        },
        series: [{
          type:'bar3D',
          data:data.map(function (item) {
            return {
              value: [item[1], item[0], item[2]]
            }
          }),
          shading:'color',
          label: {show:false,textStyle: {fontSize:16,borderWidth:1}},
          itemStyle: {opacity:0.8},
          emphasis: {
            label: {textStyle: {fontSize:20,color:'#900'}},
            itemStyle: {color:'#900'}
          }
        }]
      }
      this.mychart3.setOption(option)
    },
    async drawCityTop(){

      this.mychart4 = this.$echarts.init(document.getElementById('CityTop'))

      // TODO 请求JSON文件中的数据
      var xdata= [];
      var ydata= [];
      await this.axios('static/json/cityTop.json').then(res=> {
        var data_x = res.data.x;
        var data_y = res.data.y;
        xdata = data_x;
        ydata = data_y;
        for(var i=0;i<data.length;i++){
          legenddata.push(sourcedata[i].name)
        }
        console.log(sourcedata);
        console.log(legenddata);
      }).catch(err=> {
        console.log(err)
      })

      let option = {
        color: ['#3398DE'],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: 'line',
            lineStyle: {opacity:0}
          }
        },
        grid: {
          left: '4%',
          right: '2%',
          top: '7%',
          bottom: '7%'
        },
        xAxis: [
          {
            type: "category",
            data: xdata,
            splitLine: {
              show: false
            },
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: '#0c3b71'
              }
            },
            axisLabel: {
              show: true,
              color: 'rgb(170, 170, 170)',
              fontsize: 16
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            gridIndex: 0,
            splitLine: {
              show: false
            },
            axisTick: {
              alignWithLabel: false
            },
            axisLine: {
              lineStyle: {
                color: '#0c3b71'
              }
            },
            axisLabel: {
              show: true,
              color: 'rgb(170, 170, 170)',
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: "蒸发量",
            type: "bar",
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color:new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0286ff'
                  },{
                    offset: 0.5,
                    color: '#027eff'
                  },{
                    offset: 1,
                    color: '#00feff'
                  }]
                )
              }
            },
            data: ydata,
            zlevel: 11
          }
        ]
      }

      this.mychart4.setOption(option);

    }
  }
}
</script>

<style scoped>
#datastatistics {
  color: white;
  margin-left: 50px;
}

#app-content {
  position: fixed;
  width: 96%;
  margin-left: 3%;
  min-width: 1000px;
  padding-bottom: 60px;
  overflow: hidden;
}

#app-content > div {
  /* 子容器比父容器的宽度多 17 px, 经测正好是滚动条的默认宽度 */
  width: calc(100% + 30px);
  line-height: 30px;
  overflow-y: scroll;
}

.containerBox {
  padding: 20 px20px20px20px;
  width: calc(100% - 20px);
  height: 100%;
}

#failureRatio, #failureNum, #AvgVC, #energy, #CityTop {
  height: calc(100% - 20px);
  border-radius: 3px;
}

.aa {
  width: 49%;
  height: 400px;
  margin: 15 px015px0px;
}
</style>
