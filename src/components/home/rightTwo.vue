<template>
    <div class="common-box">
        <div class="top-box">
            <div class="common-title">
                <span>连续12个月增值税申报情况</span>
                <span class="min-text">（查看）</span>
            </div>
            <div class="content-box">
                <div>
                    增值税申报应纳税额为零占比率：
                    <span>95</span>
                    %
                </div>
                <div>
                    已申报：
                    <span>1500</span>
                    户
                </div>
                <div>
                    应纳为零申报：
                    <span>1500</span>
                    户
                </div>
            </div>
            <div class="circle-box">
            <span>19</span>
            <span class="circle-unit">分</span>
        </div>
        </div>
        <div class="bottom-box">
            <div class="common-title">
                <span>连续6个月增值税申报情况</span>
                <span class="min-text">（查看）</span>
            </div>
            <div class="content-box">
                <div>
                    增值税申报应补退税额为零占比率：
                    <span>70</span>
                    %
                </div>
                <div>
                    已申报：
                    <span>1500</span>
                    户
                </div>
                <div>
                    应补退为零申报：
                    <span>1500</span>
                    户
                </div>
            </div>
            <div class="circle-box">
            <span>19</span>
            <span class="circle-unit">分</span>
        </div>
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
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
}
.top-box,
.bottom-box {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.top-box{
    margin-bottom: 30px;
}
.common-title {
    font-size: 24px;
    color: #01ffff;
    text-align: left;
    .min-text {
        font-size: 16px;
    }
}
.circle-box {
    position: absolute;
    right: 13px;
    top: 50px;
    height: 78px;
    width: 78px;
    overflow: hidden;
    background: url('../../assets/img/dafen1.png') center no-repeat;
    font-size: 36px;
    color: #ffff00;
    text-align: center;
    line-height: 78px;
    .circle-unit {
        font-size: 14px;
    }
}
.content-box {
    min-height: 100px;
    overflow: hidden;
    margin-top: 5px;
    text-align: left;
    color: #fff;
    font-size: 16px;
    & > div {
        overflow: hidden;
        & > span {
            font-size: 24px;
            color: #ffff00;
            margin-right: 2px;
        }
    }
}
</style>
