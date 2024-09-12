<template>
  <div class="hello">
    <!-- 模版语法 -->
    <h3>学习语法</h3>
    <p>{{ rawHtml }}</p>
    <div v-html="rawHtml"></div>
    <div :id="dynamicId" class="name"></div>
    <p>{{ num+100 }}</p>
    <p>{{ flag ?  'sha': 'bi' }}</p>
    <!-- 条件渲染 -->
    <p v-if="flag"> 猴子爱上述 </p>
    <p v-else="flag"> 猴子爱上疯子 </p>
    <div v-if="flag">
        <p>1</p>
        <p>2</p>
        <P>3</P>
    </div>
    <p v-show="flag">你是真的孙耗子吗</p>
    <!-- 列表渲染 -->
    <ul>
        <li v-for="(item,index) in items" :key="item.id |index">{{ item.title }}</li>
    </ul>
    <!-- 事件处理 -->
    <div>
        <button v-on:click="num += 20"> 点击送美女 </button>
    </div>
    <div>
        <button @:click="num -= 20"> 点击送爽哥 </button>
    </div>
    <div>
        <button @:click="green"> 点击嘲笑自己 </button>
    </div>
    <div>
        <button @:click="say('hi')"> 传递参数 </button>
    </div>
    <div>
        <ul>
            <li v-for="(item, index) in name" :key="index" @click="say(item)">{{ item }}</li>
        </ul>
    </div>
    <!-- 表单输入绑定 -->
     <div>
        <input type="text" v-model.lazy="message" placeholder="edit me">
        <p>{{ message }}</p>
        <input type="text" v-model.trim="message1" placeholder="edit me">
        <p>{{ message1 }}</p>
     </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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

</style>
