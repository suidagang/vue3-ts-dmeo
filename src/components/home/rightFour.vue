<template>
    <div class="common-box">
        <div class="common-title">
            <span>网格管理员</span>
        </div>
        <div class="list-box one-list">
            张三：
            <span>15112345678</span>
        </div>
        <div class="common-title">
            <span>联络员</span>
        </div>
        <div class="list-box">
            李四：
            <span>15312345678</span>
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
.list-box {
    overflow: hidden;
    text-align: left;
    color: #fff;
    font-size: 16px;
    margin-top: 10px;
    & > span {
        color: #ffff00;
        margin-right: 2px;
    }
}
.one-list {
    margin-bottom: 15px;
}
</style>
