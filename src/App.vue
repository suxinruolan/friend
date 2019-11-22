<!--
 * @Github: 我没有
 * @Author: 李鹏帅
 * @如果有bug，那肯定不是我的锅，嘤嘤嘤
 * @since: 2019-11-21 09:50:23
 * @lastTime: 2019-11-21 19:43:22
 * @LastAuthor: Do not edit
 * @message: main
 -->
<template>
  <div id="app">
        <div class="nav">
            <!-- <p @click="gohome()">学生寝室管理系统</p>
            <div class="nav-main">
                <el-button size="mini" @click="gostu()">学生信息</el-button>
                <el-button size="mini" @click="goflat()">楼房信息</el-button>
                <el-button size="mini" @click="goroom()">寝室信息</el-button>
            </div> -->
        </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // params:"",
    }
  },
  // computed:{
  //   flag(){
  //     return this.$store.state.flag;
  //   }
  // },
  name: 'App',
  methods:{
   
    gohome(){
      this.$router.push('/')
    },
    goflat(){
      this.$router.push('/flat')
    },
    goroom(){
      this.$router.push('/room')
    },
    gostu(){
      this.$router.push('/student');
    }
  } 
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
*{
  padding:0;
  margin:0;
}

</style>
