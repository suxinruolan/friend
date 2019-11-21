<template>
<div class="container">
  <p class="title">公寓详情</p>
  <table class="atable">
      <thead>
        <tr>
          <th>flatnum</th>
          <th>floorsum</th>
          <th>roomsum</th>
          <th>starttime</th>
        </tr>
      </thead>
      <tbody>
           <tr v-for="(item, index) in params" :key="index">
            <td>{{item.flatnum}}</td>
            <td>{{item.floorsum}}</td>
            <td>{{item.roomsum}}</td>
            <td>{{item.starttime}}</td>
          </tr>
      </tbody>
    </table>
    <el-button size="mini" class="btn" @click.native="goback()">go back</el-button>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      params: []
    }
  },
  mounted () {
    this.getFlatDetail()
  },
  methods: {
    // 获取动漫信息
    getFlatDetail () {
      const flatnum = this.$route.params.id;
      // alert(flatnum);
      axios.get('/api/findFlatById', {
        params: {
          flatnum: flatnum
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.params = res.data.result
        }
      })
    },
    goback(){
      this.$router.push("/flat");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn{
  margin-top:30px;
}
.title{
  margin-bottom:20px;
}
.atable{
  width: 80%;
  margin:0 auto;
  background:#E4E7ED;
  padding:20px;
}
</style>
