<template>
<div class='content'>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select User
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <!-- TODO 
           1. call to DB to get users
           2. V loop to create dropdown
           3. pass value of user clicked to UpdateUserInfo Component -->
      <button class="dropdown-item" type="button" v-on:click=" select = 'yes'">User's Name</button>             
    </div>
  </div>
    <UpdateUserInfo v-if="select == 'yes'"/>

</div>
</template>

<script>
import UpdateUserInfo from '@/components/UpdateUserInfo.vue'


export default {
  name: 'SelectManageUser',
  components: {
    UpdateUserInfo,
  },
  data(){
    return{
      select: 'no'
    }
  },
    props: {
    user: String
  }
}
</script>