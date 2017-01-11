<template>
  <div id="side-bar" >
    <p v-if="!Transaction && ListID.length==0">
      Click on one or several <br> transactions to see details
    </p>
    <p v-else-if='IsTransaction'>
      {{ Transaction.created_at.substring(0,10).split('-').reverse().join('-') }} <br>
      {{ Transaction.counterparty_name }} <br>
      {{ Transaction.operation_type }} <br>
      {{ Transaction.amount }} {{ Transaction.currency }}<br>
    </p>
    <p  v-else class='id-area'>
      <span v-for='id in ListID'>
        {{ id }} <br>
      </span>
    </p>
  </div>
</template>

<script>

import {eventHub} from '../main.js'

export default {
  name:'SideBar',
  data(){
    return{
      IsTransaction:true,
      Transaction:'',
      ListID:[]
    }
  },
  created(){
    eventHub.$on('ShowTransaction', (Transaction) => {
      this.IsTransaction = true
      this.Transaction=Transaction
      this.ListID = []
    }),
    eventHub.$on('ShowId', (TransactionID) => {
      if (!this.ListID.includes(TransactionID))
      {
        this.IsTransaction = false
        this.ListID.push(TransactionID)
      }
    })
  }
}
</script>

<style>
#side-bar {
    font-family: arial, sans-serif;
    height: 100%;
    width: 230px;
    position: fixed;
    bottom: 0;
    right:0;
    opacity: 0.9;
    background-color: white;
}

#side-bar p {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align:center;
  color:#a3a3a3;
}

.id-area{
  position: relative;
  text-align:center;
  color:#a3a3a3;
}
</style>
