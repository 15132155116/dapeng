<template>
    <div class="right">
        <righttop class="righttop"></righttop>
        <div class="choice">
            <router-link to="/my/live">
                <div class="tag live">
                    <i class="el-icon-video-play"></i><span>直播课程</span><br><br>
                    <el-progress :percentage="percentageA" :color="customColorA"></el-progress>
                </div>
            </router-link>
            <router-link to="/my/basic">
                <div class="tag basic">
                    <i class="el-icon-s-unfold"></i><span>录播课程</span><br><br>
                    <el-progress :percentage="percentageB" :color="customColorB"></el-progress>
                </div>
            </router-link>
        </div> 
        <router-view></router-view>
    </div>
</template>
<script>
import righttop from './right/righttop.vue'
import Bus from "../Bus.js";
export default {
    components:{
        righttop: righttop
    },
    data() {
      return {
        percentageA: 0,
        percentageB: 0,
        customColorA: '#FCD4A3',
        customColorB: '#B0E6FF'
      };
    },
    mounted() {
        Bus.$on("getStatus",(progress)=>{
          console.log(111);
          this.percentageA = progress*100
        }),
        Bus.$on("getClick",(b)=>{
            console.log(222);
            if(this.percentageB<100) {
                this.percentageB += b*100
            }else {
                this.percentageB = 100
            }
        })
    }
}

</script>
<style>
.right {
    width: 950px;
    /* height: 195px; */
    padding: 30px 10px 0;
}
.righttop {
    width: 935px;
    height: 195px;
}
.choice {
    width: 935px;
    height: 180px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
a {
    text-decoration: none;
}
.tag {
    width: 463px;
    height: 180px;
    box-sizing: border-box;
    border-radius: 10px 10px 0 0;
    padding: 15px 10px 0;
}
.tag i {
    font-size: 30px;
    font-weight: 700;
    color: #fff;
}
.tag span {
    font-size: 24px;
    color: #fff;
}
.live {
    background-color: #F58912;
}
.basic {
    /* width: 458px;
    height: 170px;
    box-sizing: border-box; */
    background-color: #37C3FF;
}
</style>