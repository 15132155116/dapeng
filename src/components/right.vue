<template>
    <div class="right">
        <righttop class="righttop"></righttop>
        <div class="choice">
            <router-link to="/live">
                <div class="tag live">
                    <i class="el-icon-video-play"></i><span>直播课程</span><br><br>
                    <el-progress :percentage="percentage" :color="customColors"></el-progress>
                </div>
            </router-link>
            <router-link to="/basic">
                <div class="tag basic">
                    <i class="el-icon-s-unfold"></i><span>录播课程</span><br><br>
                    <el-progress :percentage="percentage" :color="customColor"></el-progress>
                </div>
            </router-link>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import righttop from './right/righttop.vue'
export default {
    components:{
        righttop: righttop
    },
        data() {
      return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
}

</script>
<style>
.right {
    width: 950px;
    height: 195px;
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
    width: 468px;
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
    background-color: #37C3FF;
}
</style>