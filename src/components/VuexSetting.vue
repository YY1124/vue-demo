<template>
    <div class="hello">
      <p>count = {{ $store.state.count }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'routerSetting',
    data() {
      return {
          num:10,
      }
    },
    methods:{
      green(event){
          alert('嘲笑自己的一百种方式！！！！！')
          this.num = 2036
          alert(event)
          event.target.innerHTML = '点击之后'
      },
      say(data){
          alert(data)
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  