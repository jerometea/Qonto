<template>
  <div>
    <top-bar></top-bar>
    <side-menu></side-menu>
    <grid-transactions :columns="this.columns" :data="this.data"></grid-transactions>
    <side-bar></side-bar>
  </div>
</template>

<script>

import Grid from './Grid.vue'
import TopBar from './TopBar.vue'
import SideMenu from './SideMenu.vue'
import SideBar from './SideBar.vue'

export default {
  name:'Transactions',
  components: {
    'grid-transactions': Grid,
    'top-bar' : TopBar,
    'side-menu' : SideMenu,
    'side-bar' : SideBar
  },
  data() {
    return {
      searchQuery: '',
      columns: ['id', 'created_at', 'counterparty_name','operation_type','amount','attachements'],
      data: []
    }
  },
    methods:{
    fetchTransactions(){
      this.$http.get('http://private-5d708-interviewfront.apiary-mock.com/transactions')
      .then(function(response){
        this.data = response.body.transactions;
      });
    }
  },
  created: function(){
    this.fetchTransactions();
  }
}
</script>
