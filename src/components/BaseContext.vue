<template>
    <div class="hello">
      {{context}}
    </div>
    <div>
        <ul>
            <li v-for="(item,index) in arr" :key="index">{{  item }}</li>
        </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseContext',
    props:{
        context:{
            type:String,
            default:''
        },
        arr:{
            type:Array,
            // 数组和函数必须通过函数方式返回(返回工厂模式)
            default:function(){
                return []
            }
        }
    },
    data() {
      return {
          make: 'xueix',
          rawHtml:"<a href='https://cn.vuejs.org/guide/essentials/application.html'>VUE官网</a>",
          dynamicId: 1001,
          num:10,
          message: '',
          message1: '',
          flag:true,
          name:['jeff','lihua', 'aima', 'max', 'maggie'],
          items:[
              {
              id: 12,
              title:'今日头条'
              },
              {
              id: 13,
              title:'今日头条14'
              },
              {
              id: 14,
              title:'今日头条1'
              } 
      ]
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
  #hello{
    color:white;
  }
  </style>
  