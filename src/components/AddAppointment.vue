<template>
<!-- <div class="addAppointment">
    <LoginForm msg="Oh yis"/>
</div> -->
<div class="container">

    <label for="inputCourse" ><h1>Course</h1></label>
    <input type="text" style="text-align:center" class="form-control" id="inputCourse" placeholder="EX: CS 155">
<br/>
    <div class="date">
    <label for="inputDate" ><h2>Date</h2></label>
    <input type="text" style="text-align:center" class="form-control" id="inputDate" placeholder="EX: April 27, 2021">
    </div>
<br/>
        <Button text="Find Appointments" color="white" backcolor="#2d0c49"/>
    <!-- <button type="button" class="btn btn-info  btn-lg">Find Appointments</button> -->

<br/>
<br/>
    <div class="available">
    <label for="inputAvailable"><h3>Available Appointments</h3></label>
    </div>


    <!-- <input type="text" style="text-align:center" class="info" id="info1" placeholder="CS 155 &#10;Tutor Name &#10;April 27, 2021 &#10;2:00 PM"> -->
    <div> 
        <p> CS 155 &#10;Tutor Name &#10;April 27, 2021 &#10;2:00 PM </p>
    </div>


<br/>
        <Button text="Submit" color="white" backcolor="#2d0c49" />
        <div class="divider"/>

</div>

</template>

<script>

import Button from '../components/Button.vue'

export default {
  name: 'AddAppointment',
  components: {
    Button
  }
}

</script>


<style scoped>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
</style>



