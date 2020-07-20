<template>
  <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>dota2信息查询</span>
          <router-link to="dota2">
            <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
          </router-link>
        </div>
        api基于opendota，免费接口，查询次数有限qaq
      </el-card>
    </div>
</template>
<script>
export default {
  name: "ArticleList",
  data() {
    return {
      blogList:[]
    };
  },
  mounted(){
  },
  methods: {

  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  margin-bottom: 50px;
}
</style>
