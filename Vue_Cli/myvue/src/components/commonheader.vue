<template id='commonheader'>
    <div class="content-view">
        <h2 class="color-red su-title pt-3 pb-2">{{title}}</h2>
        <div id="su-start" class="su-box show">
          <div class="su-contain">
            <p>Last update was on 11/11/2018 at 10:00 AM</p>
            <p class="m-0">Next update scan is scheduled for 11/10/2018</p>
          </div>
          <div class="su-buttons">
            <button id="check-for-updates" class="btn-normal bg-blue text-white">Check for updates</button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'commonheader',
  data () {
    return {
      title: 'Welcome to Your Vue.js App'
    }
  }
}
</script>





