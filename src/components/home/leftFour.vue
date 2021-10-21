<template>
    <div class="common-box">
        <div class="common-title">
            <span>新增税费风险纳税人情况</span>
            <span class="min-text">（查看）</span>
        </div>
        <div class="content-box">
            <div>
                新增：<span>1</span>户
            </div>
        </div>
        <div class="circle-box">
            <span>-10</span>
            <span class="circle-unit">分</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return{
           
        }
    }
});
</script>
<style lang="less" scoped>
.common-box {
    position: relative;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
}
.common-title{
    font-size: 24px;
    color: #01ffff;
    text-align: left;
    width: 200px;
    .min-text{
        font-size: 16px;
    }
}
.circle-box{
    position: absolute;
    right: 30px;
    top: 50px;
    height: 78px;
    width: 78px;
    overflow: hidden;
    background: url("../../assets/img/dafen2.png") center no-repeat;
    font-size: 30px;
    color: #ffff00;
    text-align: center;
    line-height: 78px;
    .circle-unit{
        font-size: 14px;
    }
}
.content-box{
    min-height: 100px;
    overflow: hidden;
    margin-top: 14px;
    text-align: left;
    color: #fff;
    font-size: 16px;
    &>div{
        overflow: hidden;
        margin-bottom: 3px;
        &>span{
            font-size: 24px;
            color: #ffff00;
            margin-right: 8px;
        }
    }
}
</style>
