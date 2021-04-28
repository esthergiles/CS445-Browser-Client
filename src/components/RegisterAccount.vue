<!--=================================Notes: ======================= -->
<!--*****************************Improvements*************************
1. Currently there is no method to verify whether the user already exists in the database.
    --Should this be verified client or server side?
    --If client side, we would have to get all users & cycle through them to check if
      the user exists. Then we would return an error message if the user does exist, 
      else >> post new user data.
    --If done serverside we would get an error code that would correspond to a message?
*********************************************************************-->


<template>
    <!-- ===================== Start Register New User form ===================== -->
  <form @submit.prevent="registerAccount" class="form-horizontal" action='' method="POST" >
    <fieldset>
      <div id="legend">
        <legend class="">Register</legend>
      </div>
      <div class="control-group">
        <!-- Username -->
        <label class="control-label"  for="username">Username</label>
        <div class="controls">
          <input type="text" id="username" name="username" placeholder="" class="input-xlarge" v-model="username">
          <p style="font-size:11px" class="help-block">can contain any letters or numbers, without spaces</p>
        </div>
      </div>
  
      <div class="control-group">
        <!-- E-mail -->
        <label class="control-label" for="email">E-mail</label>
        <div class="controls">
          <input type="text" id="email" name="email" placeholder="" class="input-xlarge" v-model="email">
          <p class="help-block"></p>
        </div>
      </div>
  
      <div class="control-group">
        <!-- Password-->
        <label class="control-label" for="password">Password</label>
        <div class="controls">
          <input type="password" id="password" name="password" placeholder="" class="input-xlarge" v-model="password">
          <p style="font-size:11px" class="help-block">Must include:<br>- 8 characters<br>- uppercase and lowercase letters<br>- at least one digit or speical character.
          </p>
        </div>
      </div>
  
      <div class="control-group">
        <!-- Password Confirm-->
        <label class="control-label"  for="password_confirm">Password (Confirm)</label>
        <div class="controls">
          <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="input-xlarge" v-model="passwordConfirm">
          <p class="help-block"></p>
        </div>
      </div>
  
      <div class="control-group">
        <!-- Register Button -->
        <div class="controls">
          <button class="btn btn-primary btn-success" v-on:click="registerAccount">Register</button>
        </div>
      </div>
    </fieldset>
  </form>
<!-- ===================== End Register New User form ===================== -->

</template>


<script>
import axios from 'axios';
import router from '../router/index';

export default {
  name: "RegisterAccount",
  props: {
    msg: String,
  },
  data: function() {
      return {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirm: "",
          username: "",
          role:"STUDENT",
          isActive: true
      }
  },
  methods: {
        registerAccount: function() {
            var newUserData = {
                username: this.username,
                password: this.password,
                email: this.email,
                role: this.role,
                isActive: this.isActive,
            }

            if (this.password == this.passwordConfirm) { //Verifies whether passwords entered match
            axios.post("http://quanthu.life:8000/users", newUserData)
            .then(data => {
                console.log(data);
                router.push('/login'); //sends user back to login page
              });
            } else {
                alert("Passwords Do Not Match");
              }
        }
    }
};

</script>


<style scoped>
.btn-primary {
    color: #212529;
    background-color: #db9f11;
    border-color: #db9f11;
}

.btn-primary:hover {
    color: #212529;
    background-color:#db9f11;
    border-color: #db9f11;
}

.btn-primary:focus,
.btn-primary.focus {
    box-shadow: 0 0 0 .2rem rgba(91, 194, 194, 0.5)
}
</style>