<template>
    <div class="hello">
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'KuaYu',
    data() {
      return {
          message: '',
      }
    },
    methods:{
      
    },
    mounted(){
        this.$axios.get('/api/FingerUnion/list.php').then(res=>{
            console.log(res.data)
        })

    }
  }
  </script>
  
  <style scoped>

  </style>
  