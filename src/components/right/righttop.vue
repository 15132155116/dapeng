<template>
    <div>
        <h2>Hi，欢迎回来~</h2>
        <div>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :id="item.id"
                    :value="item.name">
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
  import Bus from "../../Bus.js";
  let userid = document.cookie.substring(9,20);
  // let defaultcourse;
  export default {
    data() {
      return {
        options: [],
        value: ''
      }
    },
    mounted() {
      this.getCourses(userid);
    },
    methods: {
      getCourses(pnum) {
        this.$http.get("/getCourses",{
          params: {
            pnum:pnum
          }
        }).then((res)=>{
          let list = res.data;
          let arr = [];
          for(let i=0;i<list.length;i++){
            arr.push(list[i][0])
          }
          this.options = arr;
          console.log(this.options);
        })
      }
    },
    watch: {
      value:function(){
        console.log(this.value);
        Bus.$emit("getinset",this.value)
      }
    }
  }
</script>