<template>
  <div id="top-bar">
    <router-link to="/" class="btn btn-default">Home</router-link>
    <router-link to="/transactions" class="btn btn-default">Transactions</router-link>
  </div>
</template>

<script>
export default {
  name:'Top-bar'
}
</script>

<style>
#top-bar {
    position: absolute;
    top:0px;
    left:0px;
    width : 100%;
    height : 100px;
    background-color: #ebaf3d;
    text-align: center;
}
.btn{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
