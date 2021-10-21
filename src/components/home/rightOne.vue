<template>
    <div class="common-box">
        <div class="left-box">
            <div class="common-title">
                <span>社保登记情况</span>
                <span class="min-text">（查看）</span>
            </div>
            <div class="content-box">
                <div>
                    登记率:
                    <span>95</span>
                    %
                </div>
                <div>
                    已登记:
                    <span>1500</span>
                    户
                </div>
                <div>
                    未登记:
                    <span>1500</span>
                    户
                </div>
            </div>
            <div class="circle-box">
            <span>19</span>
            <span class="circle-unit">分</span>
        </div>
        </div>
        <div class="right-box">
            <div class="common-title">
                <span>社保零申报情况</span>
                <span class="min-text">（查看）</span>
            </div>
            <div class="content-box">
                <div>
                    零申报率:
                    <span>70</span>
                    %
                </div>
                <div>
                    已申报:
                    <span>1500</span>
                    户
                </div>
                <div>
                    未申报:
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
.left-box,
.right-box {
    position: relative;
    float: left;
    width: 50%;
    height: 100%;
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
    margin-top: 14px;
    text-align: left;
    color: #fff;
    font-size: 16px;
    & > div {
        overflow: hidden;
        margin-bottom: 3px;
        & > span {
            font-size: 24px;
            color: #ffff00;
            margin-right: 2px;
        }
    }
}
</style>
