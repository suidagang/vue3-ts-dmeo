<template>
    <div class="menu-box" v-show="showSecondMenu" @click.stop="stopOut">
        <div class="menu-title">未申报情况(50户)</div>
        <div class="memu-list" @click="goMap" v-for="(item, index) in listData" :key="index">{{ index + 1 }}.{{ item }}</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return{
           showSecondMenu:false,
            listData: [
                'XXXXXXXXXXXXXXXXX纳税人',
                'XXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXXXXXXXX纳税人',
                'XXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXXXXXXXX纳税人',
                'XXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXXXXXXXX纳税人',
                'XXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXXXXXXXX纳税人',
                'XXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXXXXXXXX纳税人',
                'XXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXXXXXXXX纳税人',
                'XXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXXXXXXXX纳税人',
                'XXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXXXXXXXX纳税人',
                'XXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXXXXXXXX纳税人',
                'XXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXXXXXXXX纳税人',
                'XXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXXXXXXXX纳税人',
                'XXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXXXXXXXX纳税人',
                'XXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人',
                'XXXXXXXXXXX纳税人'
            ]
        }
    },
    methods: {
        // 阻止冒泡的作用
        stopOut(){

        },
        open(){
            this.showSecondMenu = true;
        },
        close(){
            this.showSecondMenu = false;
        },
        goMap(){
            this.$router.push("/map")
        }
    }
});
</script>
<style lang="less" scoped>
.menu-box {
    width: 100%;
    overflow-y: auto;
    color: #fff;
    padding: 25px 20px;
    box-sizing: border-box;
    text-align: left;
}
.menu-title {
    font-size: 20px;
    margin-bottom: 18px;
    overflow: hidden;
}
.memu-list {
    text-decoration: underline;
    font-size: 16px;
    margin-bottom: 15px;
    overflow: hidden;
    cursor: pointer;
}
.menu-box::-webkit-scrollbar {
    width: 0 !important;
}
</style>
