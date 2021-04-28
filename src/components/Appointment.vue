<template>
<div class="appointment">
  <p> Appt </p>
      <!-- <h3>{{appointment.email}}</h3> -->
   <!--<h3>{{appointment.date}} {{appointment.tutor}} {{appointment.student}} @ {{appointment.time}}</h3> -->
</div>
</template>

<script>

export default{
    name: 'Appointment',
    props: {
        appointment: Object
    }
}
</script>


<style scope>
.fas {
  color: red;
}
.appointment {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.appointment.selected {
  border-left: 5px solid green;
}
.appointment h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>