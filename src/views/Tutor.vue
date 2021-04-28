<template>
<!--Clarififaction Needed: Are these next 3 lines of code necessary?
    They don't seem to be doing anything since the component is not included in export default? -->
  <div class="schedule">
    <LoginForm />
  </div>
<!-- End Clarification-Esther--> 

   <div class="sidebar">
     <div class="row">
     <button class="btn" v-on:click="component  = 'Appointments'"><img src="../assets/feather32px/calendar.svg"></button>
     </div>
      <div class="row">
     <button class ="btn" v-on:click="component  = 'Settings'"><img src="../assets/feather32px/settings.svg"></button>
    </div>
    </div>


<div class="content">
  <h1> Tutor View</h1>
  <div>
      <Button v-if="component == 'Appointments'" text="Complete" backcolor="#db9f11" />
      <div class="divider"/>
      <Button v-if="component == 'Appointments'" text="Add Walk-In Appointment" v-on:click="component  = 'AddWalkIn'" backcolor="#db9f11" />

    <br/>
  <!-- Dynamically Display Component based on button click above -->
  <component v-bind:is="component" />
  
  </div>
</div>
      
</template>

<script>
// @ is an alias to /src
//import viewSchedule from '@/components/viewSchedule.vue'
import Button from '../components/Button.vue'
import Appointments from '../components/Appointments.vue'
import AddWalkIn from '../components/AddWalkIn.vue'
import Settings from '../components/Settings.vue'


export default {
  name: 'Tutor',
  components: {
    //viewSchedule
    Button,
    Appointments,
    AddWalkIn,
    Settings,
  },
  data(){
    return{
      component: 'Appointments'
    }
  }
}

  //fetching all appointments
  // methods: {
  //   fetchAppointments: function() {
  //   const res = fetch('http://quanthu.life:8000/users')
  //     .then(res => {
  //       return res.json();
  //     }).then(data => {
  //       e.log(data);
  //     });
    
  //   // const data = await res.json()
  //   return res;
  // }
  

//fetching a single appointment by id
  //   async fetchAppointment(id){
  //   const res = await fetch(`http://quanthu.life:800${id}`)//needs to be changed to server team's https

  //   const data = await res.json()

  //   return data 
  // },
 // mounted() {
   //  this.fetchAppointments();
     //replacing hardcoded with server data
    //   [ {
    //     id: 1,
    //     date: '12/12/2021',
    //     tutor: "John Smith",
    //     student: "April Showers",
    //     class: "CS 155",
    //     time: "2:00 pm",
    //   },
    //   {
    //     id: 2,
    //     date: '12/12/2021',
    //     tutor: "John Doe",
    //     student: "Fred Showers",
    //     class: "CS 255",
    //     time: "3:00 pm",
    //   },
    // ]
    
</script>


<style scoped>
/******** Starting Side Nav style **********/

/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 10px;
  width: 80px auto;
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