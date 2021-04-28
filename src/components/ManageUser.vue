<template>
    <div class="container">
        <div>
        <p>Name: John Smith</p>
        <p> Email Address: jsmith@una.edu </p>
        <p> Date of Last Activity: 00/00/0000</p>
        </div>
    </div>
        <div>
        <Button text="Delete Account" color="white" backcolor="#2d0c49" />
        <div class="divider"/>
        <Button text="Update User Info" color="white" backcolor="#2d0c49" />
        </div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
  name: 'ManageUser',
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
