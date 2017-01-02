<template>
  <div id="side-menu"> <span>FINPAL</span>
      <ul style="border-top:none; padding-top:60px">
        <li >Overview</li>
        <li>Transactions (3)</li>
      </ul>
      <ul>
        <li>Transfers (2)</li>
        <li>Invoices (1)</li>
      </ul>
      <ul>
        <li>Manage cards</li>
        <li>Manage accounts</li>
      </ul>
      <ul>
        <li>Team</li>
        <li>Integrations</li>
        <li>Settings</li>
      </ul>
      <button id="upgrade-button">UPGRADE ACCOUNT</button>
   </div>
</template>

<script>
export default {
  name:'SideMenu'
}
</script>

<style>
#side-menu {
    font-family: arial, sans-serif;
    height: 100%;
    width: 230px;
    position: fixed;
    bottom: 0;
    left:0;
    opacity: 0.9;
    background-color: #3e4750;
    padding-top:30px;
    font-weight: bold;
}

#side-menu ul {
    border-top: 1px solid #4a525d;
    padding-top:25px;
    padding-bottom:25px;
    color:#676f7a;
}

#side-menu ul li {
    list-style-type:none;
    padding-top:5px;
    padding-bottom:5px;
}

#side-menu span {
    font-size:30px;
    margin-left: 40px;
    color:white;
}

#upgrade-button{
    color: #91c4d0;
    border: 1px solid;
	  margin-left:20px;
    padding-left:20px;
    padding-right:20px;
    background-color : #3e4750;
    padding-top:5px;
    padding-bottom:5px;
    border-radius:7px;
    font-weight: bold;
}

</style>
