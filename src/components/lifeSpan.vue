<template>
    <div>
       <button @click="sendClickHandle">点击触发自定义事件</button>
    </div>
  </template>
  
  <script>
  export default {
    // 创建时：beforeCreate, created
    // 渲染时：beforeMount, mounted
    // 更新时：beforeUpdate, updated
    // 卸载时：beforeUnmount, unmounted
    name: 'lifeSpan',
    data() {
      return {
          message: '生命周期函数',
      }
    },
    methods:{
      sendClickHandle(){
        // 参数1：字符串，理论上是随便的，但是需要具有一些意义
        // 参数2：传递的参数
          this.$emit('onEvent',this.message)
      }
    },
    beforeCreate(){
        alert('创建前：beforeCreate')
    },
    created(){
        alert('创建后：created')
    },
    beforeMount(){
        alert('渲染前：beforeMount')
    },
    mounted(){
        alert('渲染后：mounted')
        // 加载数据
    },
    beforeUpdate(){
        alert('更新前：beforeUpdate')
    },
    updated(){
        alert('更新后：updated')
    },
    beforeUnmount(){
        alert('创建前：beforeUnmount')
    },
    unmounted(){
        alert('卸载后：unmounted')
    },
  }
  </script>
  
  <style scoped>
  
  </style>