<template>
  <div class="head">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="8"
            v-for="(item,key) in list"
            :key="key"
          ><div class="grid-content bg-purple"><a
           v-bind:class="activeClass==key ? 'active':''"
           @click="changeColor(key)"
          >{{item.name}}</a></div></el-col>
          <!-- <el-col :span="8"><div class="grid-content bg-purple-light"><a>工作经历</a></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"><a>项目经验</a></div></el-col> -->
        </el-row>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'project_index',
  props: {
    msg: String
  },
  
  data: function () {
    return {
      activeClass: 0,
      list:[
        {"name" : "个人介绍","id":0},
        {"name" : "工作经历","id":1},
        {"name" : "项目经验","id":2}
      ]
    }
  },
  methods:{
    // 点击变色 默认个人介绍为黄色
    changeColor : function(key){
      this.activeClass = key;
      console.log(key);
    }
  }
  

  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  font-size: 1em;
  cursor: pointer;
  letter-spacing: 0.5rem;
  -webkit-text-stroke: 1px ;
}
a:hover{
  color: yellow;
}
</style>
<style>
  .head>.el-container>.el-header{
    background-color: #1f96d1;
    color: white;
    text-align: center;
    line-height: 60px;
    user-select:none;
    height: 20%;
  }
    .head>.el-container.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .head{
    width: 100%;
    height: 50%;
  }
  .active{
    color: yellow;
  }

</style>