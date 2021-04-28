<template>
<!-- Bootstrap code from http://bootstrapessentials.com/fulldocs/css/containers/containers-login/ -->
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div>
                <h1 class="logo-name">Welcome</h1>
            </div>
            <h3>University Tutoring</h3>
            <div class="m-t" >
                <div class="form-group">
                    <input type="username" class="form-control" placeholder="Username" required="" v-model="username">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" required="" v-model="password">
                </div>

                <button class="btn btn-primary btn-block" v-on:click="loginPerform">Login</button>
                
                <router-link style="font-size:11px" to="/forgot">Forgot Password</router-link>
                
                <p class="text-muted text-center"><small>Do not have an account?<br>
                
                <router-link to="/register">Register Account</router-link></small></p>
                
            </div>
            <p class="mt-xs-1"> <small>By accessing this system, you are agreeing to all policies governing the 
                University of North Alabama's (UNA's) systems.  Current policies can be viewed 
                <a href='https://www.una.edu/its/una-it-policy.html' target=_blank>here</a>.  
                Unauthorized users should disconnect immediately.  <br /><br />When finished, please 
                log out of all systems <b>AND</b> close all browsers to help ensure a complete disconnect and 
                that no other users may access your accounts.</small></p>                     
            </div>
<!-- End Bootstrap Log In code -->

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import router from '../router/index';

export default {
  name: "LoginForm",
  props: {
    msg: String,
  },
  data: function() {
      return {
          username: "",
          password: ""
      }
  },
  methods: {
        loginPerform: function() {
            var loginData = {
                username: this.username,
                password: this.password
            }
            // console.log(loginData);

            // var self = this;

            axios.post("https://quanthu.life/tutorapp/users/login", loginData)
            .then(data => {
                console.log(data);
                
                // self.$cookies.set('username', data.data.data.username);
                // self.$cookies.set('role', data.data.data.role);

                if (data.data.errorCode == 200) {
                    let userRole = data.data.data.role
                    if (userRole == "ADMIN TUTOR" || userRole == "admin")
                        router.push("/admin");
                    if (userRole == "STUDENT" || userRole == "student")
                        router.push("/student");
                    if (userRole == "FACULTY" || userRole == "faculty")
                        router.push("/faculty");
                    if (
                        userRole == "TUTOR" ||
                        userRole == "tutor" ||
                        userRole == "TUTOR ADMIN"
                    )
                        router.push("/tutor");
                } else alert(data.data.message)
            });
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