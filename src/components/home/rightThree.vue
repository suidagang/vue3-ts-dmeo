<template>
    <div class="common-box">
        <div class="common-title">
            <span>重大事件统计</span>
        </div>
        <div class="content-box">
                <div>
                    新增稽查案件:
                    <span>5</span>
                    条
                </div>
                <div>
                    被举报违法且查实:
                    <span>6</span>
                    条
                </div>
                <div>
                    严重不良影响:
                    <span>1</span>
                    条
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
.top-box {
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
.content-box {
    min-height: 100px;
    overflow: hidden;
    margin-top: 15px;
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
