<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="课程名称" width="240"></el-table-column>
    <el-table-column prop="source" label="素材" width="240">
        <template slot-scope="source">
          <a :href="source.row.source" target="_blank" class="TestCSS"><i class="el-icon-download btn"></i></a>
        </template>
    </el-table-column>
    <el-table-column prop="address" label="地址">
      <template slot-scope="address">
        <a :href="address.row.address" target="_blank" @click.once="watchVideo"><i class="el-icon-video-play btn"></i></a>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import Bus from "../../Bus.js";
  export default {
    data() {
      return {
        tableData: [],
        source: [],
        address: []
      }
    },
    mounted() {
      Bus.$on("getinset",(coursename)=>{
        console.log(coursename);
        this.$http.get("/getinsetbasic",{
          params:{
            coursename:coursename
          }
        }).then((res)=>{
          console.log(res.data);
          this.tableData = res.data;
          for(let i=0; i<this.tableData.length; i++){
            let a = this.tableData[i].source
            let aa = {a};
            this.source.push(aa);
            let b = this.tableData[i].address
            let bb = {b};
            this.address.push(bb);
          }
        })
      })
    },
    methods: {
      watchVideo() {
        let a = 1/this.tableData.length
        Bus.$emit("getClick",a)
      }
    }
  }
</script>

<style>
.el-table__header .cell {
    color: #9a9a9a;
    font-size: 15px;
    font-weight: bold;
}
.has-gutter .is-leaf {
    background-color: #E6F7FF;
}
a {
  text-decoration: none;
}
.btn {
  color: #ccc;
  font-weight: bold;
  font-size: 20px;
}
</style>
