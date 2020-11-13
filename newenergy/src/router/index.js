import Vue from 'vue'
import Router from 'vue-router'
import DataScreen from "@/components/DataScreen"
import DataStatistics from "@/components/DataStatistics"
import RealTimeMonitoring from "@/components/RealTimeMonitoring"
import VehicleManagement from "@/components/VehicleManagement"
import UserManagement from "@/components/UserManagement"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DataScreen',
      component: DataScreen
    },
    {
      path: '/dataScreen',
      name: 'DataScreen',
      component: DataScreen
    },
    {
      path: '/dataStatistics',
      name: 'DataStatistics',
      component: DataStatistics
    },
    {
      path: '/realTimeMonitoring',
      name: 'RealTimeMonitoring',
      component: RealTimeMonitoring
    },
    {
      path: '/vehicleManagement',
      name: 'VehicleManagement',
      component: VehicleManagement
    },
    {
      path: '/userManagement',
      name: 'UserManagement',
      component: UserManagement
    }
  ]
})
