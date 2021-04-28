<template>
    <div class="container">
        <form>
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" value="John Smith">
        </div>
        <div class="form-group">
            <label for="email">Email Address:</label>
            <input type="text" class="form-control" id="email" value="jsmith@una.edu">
        </div>
            <Button text="Submit" color="white" backcolor="#2d0c49" />
        </form>
</div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
  name: 'UpdateUserInfo',
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
  max-width: 400px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px auto;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
</style>
