<template>
    <div>
        <div v-for="i in 10" :key="i">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>dota2对战信息查询</span>
                    <router-link to="dota2">
                        <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
                    </router-link>
                </div>
                api基于opendota，免费接口，查询次数有限qaq,第{{i}}次重复！
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
  name: "ArticleList",
  data() {
    return {};
  },
  methods: {}
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
