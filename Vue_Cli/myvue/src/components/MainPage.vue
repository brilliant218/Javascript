import commonheader from @'./commonheader.vue'

<template id='MainPage'>
  <div >
    <commonheader/>
  </div>
</template>

<script>

export default {
  name: 'MainPage',
  data () {
    return {
      title: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    commonheader
  }  
}
</script>