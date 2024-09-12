<template>
    <!-- npm install --save querystring -->
    <div class="hello">
      <p>{{ chanping.title }}</p>
      <div>
        <img v-for="(item, index) in chanping.img" :key="index" :src="item">
      </div>
    </div>
  </template>
  
  <script>
//   import axios from 'axios';
import api from "../api/index"
  import qs from 'qs';
  export default {
    name: 'HelloWorld',
    data() {
      return {
          message: '',
          chanping:''
      }
    },
    methods:{
    
    },
    mounted(){
        // this.$axios({
        //    method: 'get',
        //    url:'http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php'
        // }).then(res=>{
        //     console.log(res.data.chengpinDetails)
        //     this.chanping = res.data.chengpinDetails[0]

        // }),
        // this.$axios.get('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php').then(res=>{
        //     console.log(res.data.chengpinDetails)
        // })
        // this.$axios({
        //    method: 'post',
        //    url:'http://iwenwiki.com/api/blueberrypai/login.php',
        //    data: qs.stringify({
        //     user_id:'iwen@qq.com',
        //     password:'iwen123',
        //     verification_code:'crfvw'
        //    })
        // }).then(res=>{
        //     console.log(res.data)
        // })
        // this.$axios.post('http://iwenwiki.com/api/blueberrypai/login.php', qs.stringify({
        //     user_id:'iwen@qq.com',
        //     password:'iwen123',
        //     verification_code:'crfvw'
        //    })).then(res=>{
        //     console.log(res.data)
        // }),
        api.getChanPing().then(res=>{
            console.log(res.data.chengpinDetails)
        })
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  