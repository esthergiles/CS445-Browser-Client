<template>
    <div class="container">
        <form>
        <div class="form-group">
            <label for="name"><h3>Student Information:</h3></label>
            <input type="text" class="form-control" id="fname" placeholder="EX: First Name">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="lname" placeholder="EX: Last Name">
        </div>

        <div class="form-group">
            <label for="email"><h3>Email Address:</h3></label>
            <input type="text" class="form-control" id="email" placeholder="EX: Email">
        </div>
        <div class="form-group">
            <label for="email"><h3>Course:</h3></label>
            <input type="text" class="form-control" id="course" placeholder="EX: CS 155">
        </div>
        <div class="form-group">
            <label for="email"><h3>Time:</h3></label>
            <input type="text" class="form-control" id="time" placeholder="EX: 2:00 PM">
        </div>
            <Button text="Add Walk-In Appointment" color="white" backcolor="#2d0c49" />
        </form>
</div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
  name: 'AddWalkIn',
  components: {
    Button
  }
}
</script>


<style scoped>

/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} */
.container {
  max-width: 400px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px auto;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
</style>
