<template>
  <div>
    <top-bar></top-bar>
    <side-menu></side-menu>
  </div>
</template>

<script>

import TopBar from './TopBar.vue'
import SideMenu from './SideMenu.vue'

export default {
  name:'Home',
  components:{
      'top-bar' : TopBar,
      'side-menu' : SideMenu
  }
}
</script>
