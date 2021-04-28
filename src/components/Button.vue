<template>
  <button @click="onClick()" :style="{ background: backcolor, color: color }" class="btn btn-lg active" >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
    backcolor: String,
  },
  
  methods: {
    onClick() {
      //this.$emit('btn-click')
      console.log('click')
    },
  },
}
</script>

<style>
.divider{
    width:10px;
    height:auto;
    display:inline-block;
}

</style>