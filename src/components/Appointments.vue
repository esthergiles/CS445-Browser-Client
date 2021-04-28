<!--=================================Notes: =======================
1. Schedule Get Request is not working as of 4/28. 
See Console Error Message. 
=================================================================-->
<!--*****************************Improvements*************************
*********************************************************************-->

<template>
  <div class="schedule">
    <LoginForm />
    <Appointment />
    <Appointment />
    <Appointment />

    <!-- <h1> Appointments Component </h1> -->
    <button class="btn btn-primary btn-block" v-on:click="getAllScheduleData">
      get data
    </button>
  </div>

  <div v-for="appointment in appointments" v-bind:key="appointment">
    <Appointment :appointment="appointment" />
  </div>
  <div>
    {{ info }}
  </div>
</template>

<script>
import Appointment from "./Appointment";
import axios from "axios";

export default {
  name: "Appointments",
  props: {
    appointments: Array,
  },
  components: {
    Appointment,
  },
  data: function () {
    return {
      id: "",
      tutor_id: "",
      date: "",
      from_time: "",
      end_time: "",
    };
  },
  methods: {
    getAllScheduleData: () => {
      var allScheduleData = {
        id: this._id,
        tutor_id: this.tutor_id,
        date: this.date,
        from_time: this.from_time,
        end_time: this.end_time,
      };
      // Axios Get Request for grabbing everything
      axios
        .get("http://quanthu.life:8000/schedule", allScheduleData)
        .then((data) => {
          console.log(data);

          if (data.data.errorCode == 200) {
            alert(data.data.message);
          } else alert(data.data.message);
        });
    },
  },
};
</script>
