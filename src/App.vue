<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <BaseContext :context="context" :arr='arr'/> -->
  <!-- <MyComponents :context="context" @onEvent="getDataHandle"/> -->
  <!-- <p>{{ text }}</p> -->
  <!-- <lifeSpan/> -->
  <!-- <swipperContxet /> -->
  <!-- <AxiosRequest/> -->
  <VuexSetting/>
  <!-- <KuaYu/> -->
  <!-- 路由的显示路口 -->
   <tab>
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/about">关于</RouterLink>
    <RouterLink to="/news">新闻</RouterLink>
   </tab>
  <router-view></router-view>
  <p>{{ count }}</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BaseContext from './components/BaseContext.vue'
import MyComponents from './components/MyComponents.vue'
import lifeSpan from './components/lifeSpan.vue'
import swipperContxet from './components/swipperContxet.vue'
import AxiosRequest from './components/AxiosRequest.vue'
import KuaYu from './components/KuaYu.vue'
import VuexSetting from './components/VuexSetting.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BaseContext,
    MyComponents,
    lifeSpan,
    swipperContxet,
    AxiosRequest,
    KuaYu,
    VuexSetting
  },
  data() {
    return{
        context:'我是一个酒精过敏的帅哥！！！！',
        arr:['limei','haobaobao','zhangjie'],
        text: '',
    }
  },
  methods:{
    getDataHandle(data){
        alert(data) 
        this.text = data
    }
  },
  computed:{
    ...mapState(['count'])

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
