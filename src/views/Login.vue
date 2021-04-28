<template>
  <div class="login">
    <LoginForm/>
    <!-- <LoginForm /> -->

  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
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