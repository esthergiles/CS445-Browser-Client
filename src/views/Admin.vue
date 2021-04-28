<template>
  <div class="admin">
    <LoginForm />

  </div>

   <div class="sidebar">
     <div class="row">
     <button class="btn" v-on:click="component  = 'Appointments'"><img src="../assets/feather32px/calendar.svg"></button>
     </div>
     <div class="row">
     <button class="btn" v-on:click="component  = 'SelectManageUser'"><img src="../assets/feather32px/user.svg"></button>
     </div>
     <div class="row">
     <button class="btn" v-on:click="component  = 'GenerateReport'"><img src="../assets/feather32px/pie-chart.svg"></button>
     </div>
      <div class="row">
     <button class ="btn" v-on:click="component  = 'Settings'"><img src="../assets/feather32px/settings.svg"></button>
    </div>
    </div>

  <div class="content">
  <h1> Admin View</h1>
  <!-- Dynamically Display Component based on button click above -->
  <component v-bind:is="component" />

</div>

</template>

<script>
// @ is an alias to /src
import GenerateReport from '../components/GenerateReport.vue'
import Settings from '../components/Settings.vue'
import Button from '../components/Button.vue'
import SelectManageUser from '@/components/SelectManageUser.vue'
import Appointments from '@/components/Appointments.vue'


export default {
  name: 'Admin',
  components: {
    GenerateReport,
    Settings,
    Button,
    SelectManageUser,
    Appointments,
  },
  data(){
    return{
      component: 'Appointments'
    }
  }
}
</script>





<style scoped>
/******** Starting Side Nav style **********/

/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 10px;
  width: 50px;
  background-color: #46266b;
  position: fixed;
  height: 100%;
  overflow: auto;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #ab7d21;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
/******** Ending Side Nav style **********/
</style>