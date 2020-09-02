<template>
    <div>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="name" label="课程名称" width="260"></el-table-column>
            <el-table-column prop="time" label="直播时间" width="220"></el-table-column>
            <el-table-column prop="source" label="素材">
              <template>
                <a :href="source" target="_blank" class="TestCSS"><i class="el-icon-download btn"></i></a>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
        </el-table>
    </div>
</template>

<script>
  import Bus from "../../Bus.js";
  export default {
    data() {
      return {
        tableData: [],
        source: ""
      }
    },
    mounted() {
      Bus.$on("getinset",(coursename)=>{
        console.log(coursename);
        this.$http.get("/getinset",{
          params:{
            coursename:coursename
          }
        }).then((res)=>{
          console.log(res.data);
          this.tableData = res.data;
          this.source = this.tableData[0].source
          let arr = [];
          for(let i=0; i < res.data.length; i++){
            if(res.data[i].status == '已完成'){
              arr.push(i);
            }
          }
          console.log(arr.length);
          Bus.$emit("getStatus",arr.length/res.data.length)
        })
      })
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
    background-color: #FFF1E0;
}

</style>
