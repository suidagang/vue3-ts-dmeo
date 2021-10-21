<template>
    <div class="com-head">
        <div class="head-l">
            <img src="../assets/img/logo.png" alt="" />
            <span>{{swjmc}}</span>
        </div>
        <span class="head-m">{{headName}}</span>
        <div class="head-r">
            <span>{{ nowDay }}</span>
        </div>
    </div>
</template>
<script lang="ts">
import { onMounted, ref ,Ref,defineComponent} from 'vue';
export default defineComponent({
    setup() {
        let headName: Ref<string> = ref("");
        headName.value = "金华金东区税务五色网格系统";
        let swjmc = ref("");
        swjmc.value = "国家税务总局xxx税务局";
        const nowDay = ref('');
        /**
         * 获取当前时间
         */
        let getNowDate = (): string => {
            let oDate = new Date(),
                nowYear = oDate.getFullYear(),
                nowMonth = oDate.getMonth() + 1,
                nowDay = oDate.getDate(),
                oHour = oDate.getHours(),
                oMin = oDate.getMinutes(),
                oSen = oDate.getSeconds(),
                pm = '上午';
            if (oHour > 12) {
                pm = '下午';
            };
            let resultDate = nowYear + '年' + addZero(nowMonth) + '月' + addZero(nowDay) + '日' + ' ' + pm + addZero(oHour) + ':' + addZero(oMin) + ':' + addZero(oSen); //最后拼接时间
            return resultDate;
        };
        /**
         * 时间加零操作
         */
        let addZero = (num: number | string): string => {
            let newNum: string = num.toString();
            if (parseInt(newNum) < 10) {
                newNum = '0' + newNum;
            };
            return newNum;
        };
        onMounted(() => {
            nowDay.value = getNowDate();
            setInterval(() => {
                nowDay.value = getNowDate();
            }, 1000);
        });
        return {
            nowDay,
            headName,
            swjmc
        };
    }
});
</script>
<style lang="less" scoped>
.com-head {
    width: 100%;
    height: 115px;
    background: url('../assets/img/head_bg.png') center no-repeat;
    .head-m {
        display: inline-block;
        font-size: 48px;
        margin-top: 28px;
        color: #01ffff;
    }
    .head-l {
        position: absolute;
        left: 30px;
        top: 22px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        img {
            margin-right: 15px;
            height: 45px;
        }
    }
    .head-r {
        position: absolute;
        right: 30px;
        top: 22px;
        font-size: 24px;
        height: 45px;
        line-height: 45px;
        color: #fff;
    }
}
</style>
