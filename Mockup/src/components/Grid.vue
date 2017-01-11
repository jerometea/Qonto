<template>
  <table>
    <thead>
      <tr>
        <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">
        <!-- Show attachement's icon -->
        <span v-if="key==='attachements'">
          <i class="glyphicon glyphicon-paperclip"></i>
        </span>
        <!-- Show other attributes but not "attachements"  -->
        <span v-else>
          {{ key.replace('_', ' ') | capitalize }}
        </span>
        <!-- Show asc or desc arrow when sort by -->
        <span :class="sortOrders[key] > 0 ? 'asc' : 'dsc'" :style="sortKey == key ? 'color:#e8ac3a':'color:white'">
          <i  :class="sortOrders[key] > 0 ? 'glyphicon glyphicon-triangle-top':'glyphicon glyphicon-triangle-bottom'"></i>
        </span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="entry in filteredData" @click="DisplayTransaction(entry, $event)" :class="{ SelectedRow : listSelectedRows.includes(entry['id']) || oneSelectedRow.includes(entry['id']) }">
      <!-- Show number of attachements -->
      <td v-for="key in columns" v-if="key=='attachements'">
        <i class="glyphicon glyphicon-paperclip"></i>
        {{entry[key].length}}
      </td>
      <!-- Show a blue or red arrow when amount is - or + -->
      <td v-else-if="key==='amount'" class="amount">
      {{ entry[key] }} {{ entry['currency'] }}
        <i :style="entry[key] > 0 ? 'color:#8ec7d5':'color:red'"
           :class="entry[key] > 0 ? 'glyphicon glyphicon-triangle-top':'glyphicon glyphicon-triangle-bottom'"></i>
      </td>
      <!-- Change date format -->
      <td v-else-if="key==='created_at'">
      {{ entry[key].substring(0,10).split('-').reverse().join('-') }}
      </td>
      <td v-else> {{entry[key]}} </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import {eventHub} from '../main.js'

export default {
  name: 'Grid',
  props: {
    data: Array,
    columns: Array,
    filterKey: String,
  },
  data(){
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      oneSelectedRow:[],
      listSelectedRows:[],
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          if( sortKey === 'id' || sortKey === 'amount'|| sortKey === 'attachements')
          return (a === b ? 0 :  b-a) * order
          else
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    DisplayTransaction:function(Transaction, e){
      this.oneSelectedRow=[]
      // Show ids of selected transactions and bold the rows
      if(e.shiftKey){
        eventHub.$emit('ShowId', Transaction.id)
        this.listSelectedRows.push(Transaction.id)
      }
      // Show transaction's details and bold the row
      else{
        eventHub.$emit('ShowTransaction', Transaction);
        this.listSelectedRows=[]
        this.oneSelectedRow.push(Transaction.id)
      }
    }
  }
}
</script>

<style>

table {
    font-family: arial, sans-serif;
    margin: 0px auto;
    margin-top: 150px;
}

td, th {
    padding: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 55px;
    border-bottom: 1pt solid black;
    font-weight: normal;
}

tbody td {
    border-bottom: 1pt solid grey;
    position: relative;
}

tbody .glyphicon-triangle-top,
tbody .glyphicon-triangle-bottom {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
}

.active {
    text-shadow: 0px 0px 0.1px black;
}

.SelectedRow td {
    font-weight: bold;
}

.amount {
    width: 110px;
    font-weight: bold;
}

.glyphicon-triangle-top,
.glyphicon-triangle-bottom {
    font-size: 10px;
}
</style>
