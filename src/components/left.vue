<template>
    <div class="left">
        <ul>
            <li class="list-title">我的学习</li>
            <li class="list-items">我的课程</li>
            <li class="list-items">我的荣誉</li>
            <li class="list-items">消息通知</li>
        </ul>
        <ul>
            <li class="list-title">我的订单</li>
            <li class="list-items">全部</li>
            <li class="list-items">已完成</li>
            <li class="list-items">未完成</li>
        </ul>
        <ul>
            <li class="list-title">账号设置</li>
            <li class="list-items">个人资料</li>
            <li class="list-items">账号安全</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
li {
    list-style: none;
}
.left {
    width: 190px;
    padding: 0 15px;
    box-sizing: border-box;
}
.list-title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    color: #999;
    padding: 10px 0;
}
.list-items {
    width: 100%;
    padding: 0 15px 10px;
    height: 30px;
    font-size: 14px;
    color: #444;
}
</style>