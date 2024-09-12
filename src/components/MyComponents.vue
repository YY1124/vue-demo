<template>
    <div class="hello">
      {{context}}
    </div>
    <div>
       <button @click="sendClickHandle">点击触发自定义事件</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyComponents',
    props:{
        context:{
            type:String,
            default:''
        }
    },
    data() {
      return {
          message: '开始传参',
      }
    },
    methods:{
      sendClickHandle(){
        // 参数1：字符串，理论上是随便的，但是需要具有一些意义
        // 参数2：传递的参数
          this.$emit('onEvent',this.message)
      }
    }
  }
  </script>
  
  <style scoped>
  #hello{
    color:white;
  }
  </style>