<template>
    <div class="common-box">
        <div class="top-box">
            <div class="top-content-box">
                <div class="time-box">
                    <span>2020-07</span>
                    <img src="../../assets/img/rili.png" />
                </div>
                <div class="center-content">
                    <div class="center-title">唐雅镇网格</div>
                    <div class="center-list">分数同比：+10.00%</div>
                    <div class="center-list">分数环比：+5.12%</div>
                </div>
                <div class="circle-box">
                    <span>19</span>
                    <span class="circle-unit">分</span>
                </div>
            </div>
        </div>
        <div class="blue-line" :class="lineStyle"></div>
        <div class="map-box">
            <homeMap echartsId="center-map" @clickMap="clickMap" />
        </div>
        <div class="da-fen-box" @click="showRule">打分规则?</div>
        <el-dialog v-model="dialogVisible" width="1066px" :show-close="false">
            <div class="close-img" @click="closeModal"></div>
            <div class="model-list-box">
                <div class="model-list-title">申报率打分规则</div>
                <div class="model-list-text">针对网格内纳税人申报情况进行考核，满分20分，申报率100%得满分，申报率每下降一个百分点扣5分，申报率低于96%为0分。</div>
            </div>
            <div class="model-list-box">
                <div class="model-list-title">社保登记率</div>
                <div class="model-list-text">针对网格内社保登记率进行考核，满分10分。登记率100%及以上得满分，每下降一个百分点扣两分，登记率95%或以下为零分。</div>
            </div>
            <div class="model-list-box">
                <div class="model-list-title">欠税压缩率</div>
                <div class="model-list-text">
                    针对网格内纳税人欠税情况进行考核，满分20分，以市局征管科决定的月份欠税金额为基底，计算欠税压缩率，欠税压缩率达5%以上满分，压缩率每下降一个百分点扣4分，压缩率0%及以下为零分。
                </div>
            </div>
            <div class="model-list-box">
                <div class="model-list-title">社保零申报率</div>
                <div class="model-list-text">针对网格内社保零申报率进行考核，满分10分。零申报率低于或等于10%得满分，零申报率每提高一个百分点扣两分，15%或以上得零分。</div>
            </div>
            <div class="model-list-box">
                <div class="model-list-title">违法发生率</div>
                <div class="model-list-text">针对网格内纳税人违法处罚行为进行考核，满分10分，违法发生率0%得满分，每增加一个百分点扣2.5分，违法发生率4%以上得0分。</div>
            </div>

            <div class="model-list-box">
                <div class="model-list-title">连续12个月增值税申报应纳税额为零占比率</div>
                <div class="model-list-text">对网格内自行申报户增值税申报情况进行考核，满分10分。占比率低于50%得满分，每高3个百分点扣1分，高于80%得零分。</div>
            </div>
            <div class="model-list-box">
                <div class="model-list-title">新增税费风险纳税人</div>
                <div class="model-list-text">网格内每新增税费风险纳税人，扣10分（自然人异议等未涉及税款的风险点不计算在内）</div>
            </div>
            <div class="model-list-box">
                <div class="model-list-title">连续6个月增值税申报应补退税额为零占比率</div>
                <div class="model-list-text">对网格内自行申报户增值税申报税款情况进行考核，满分10分。占比率低于50%得满分，每高3个百分点扣1分，高于80%得零分。</div>
            </div>
            <div class="model-list-box">
                <div class="model-list-title">纳税人满意度</div>
                <div class="model-list-text">
                    通过网络问卷、电话访问等方式对网格内纳税人满意度进行取样调查，根据纳税人满意程度进行评分。满分10分，满意度100%得满分，满意度每下降2个点扣一分，满意度低于80%得零分。这个提供个入口录入。
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import homeMap from '@/components/home/homeMap.vue';
import { defineComponent } from "vue";
export default defineComponent({
    components: {
        homeMap
    },
    data() {
        return {
            dialogVisible: false,
            // 顺序["源东乡","傅村镇","孝顺镇","澧浦镇","岭下镇","江东镇","多湖街道","东孝街道","赤松镇","曹宅镇","塘雅镇"]
            lineArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        };
    },
    computed: {
        lineStyle() {
            // enum addressLine {
            //     'yuandong-line',
            //     'fucun-line',
            //     'xiaosun-line',
            //     'linpu-line',
            //      'linxia-line',
            //      'jiangdong-line',
            //      'duohu-line',
            //      'dongxiao-line',
            //      'cisong-line',
            //      'caozai-line',
            //      'tangya-line'
            // }
            if (this.lineArr[0]) {
                return 'yuandong-line';
            }else if(this.lineArr[1]){
                return 'fucun-line'
            }else if(this.lineArr[2]){
                return 'xiaosun-line'
            }else if(this.lineArr[3]){
                return 'linpu-line'
            }else if(this.lineArr[4]){
                return 'linxia-line'
            }else if(this.lineArr[5]){
                return 'jiangdong-line'
            }else if(this.lineArr[6]){
                return 'duohu-line'
            }else if(this.lineArr[7]){
                return 'dongxiao-line'
            }else if(this.lineArr[8]){
                return 'cisong-line'
            }else if(this.lineArr[9]){
                return 'caozai-line'
            }else if(this.lineArr[10]){
                return 'tangya-line'
            }
        }
    },
    methods: {
        showRule() {
            this.dialogVisible = true;
        },
        closeModal() {
            this.dialogVisible = false;
        },
        clickMap(mapObj: any): void {
            // 对象定义
			interface ObjArr {
				[index: string]: number[]
			};
            let objArr: ObjArr = {
                "源东乡":[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "傅村镇":[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                "孝顺镇":[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                "澧浦镇":[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                "岭下镇":[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                "江东镇":[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                "多湖街道":[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                "东孝街道":[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                "赤松镇":[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                "曹宅镇":[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                "塘雅镇":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
            };
            this.lineArr = objArr[mapObj.name];
        }
    }
});
</script>
<style lang="less" scoped>
.top-box {
    position: absolute;
    width: 700px;
    height: 236px;
    overflow: hidden;
    background: url('../../assets/img/bg_zhongjian.png') center no-repeat;
    left: 320px;
    top: 60px;
    .top-content-box {
        width: 100%;
        height: 100%;
        position: relative;
    }
}
.common-box {
    position: relative;
    overflow: hidden;
    padding: 20px;
    height: 100%;
    box-sizing: border-box;
    color: #fff;
    /deep/.el-dialog {
        height: 700px;
        background-color: rgba(22, 77, 220, 0.5);
    }
    /deep/.el-dialog__header {
        padding: 0;
    }
    /deep/.el-dialog__body {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
.map-box {
    position: absolute;
    width: 1330px;
    height: 300px;
    overflow: hidden;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transform: skewX(-45);
}
.time-box {
    position: absolute;
    left: 40px;
    top: 87px;
    width: 190px;
    height: 62px;
    background-color: #016af8;
    border-radius: 12px;
    font-size: 30px;
    color: #fff;
    line-height: 62px;
    padding: 0 14px;
    box-sizing: border-box;
    text-align: left;
    img {
        position: absolute;
        margin-left: 8px;
        width: 34px;
        height: 34px;
        top: 13px;
    }
}
.circle-box {
    position: absolute;
    right: 30px;
    top: 79px;
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
.center-content {
    position: absolute;
    left: 300px;
    top: 52px;
    width: 230px;
    height: 130px;
    overflow: hidden;
    text-align: left;
}
.center-title {
    font-size: 30px;
    color: #01ffff;
    margin-bottom: 20px;
    overflow: hidden;
}
.center-list {
    font-size: 18px;
    color: #ffffff;
    overflow: hidden;
    margin-bottom: 10px;
}
.da-fen-box {
    position: absolute;
    right: 80px;
    bottom: 0;
    font-size: 16px;
    color: #01ffff;
    text-decoration: underline;
    cursor: pointer;
}
.model-list-box {
    width: 48%;
    color: #fff;
    text-align: left;
    overflow: hidden;
    margin-bottom: 25px;
    .model-list-title {
        font-size: 20px;
        margin-bottom: 12px;
        overflow: hidden;
    }
    .model-list-text {
        font-size: 16px;
        overflow: hidden;
    }
}
.close-img {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    background: url('../../assets/img/guanbi1.png') center no-repeat;
}
.blue-line {
    position: absolute;
    left: 671px;
    top: 290px;
    width: 3px;
    height: 450px;
    background: #01ffff;
    z-index: 9999;
    transform: rotate(-33deg);
    transform-origin: 0 0;
}
.yuandong-line {
    height: 368px;
    transform: rotate(-12deg);
}
.tangya-line {
    height: 462px;
    transform: rotate(-6deg);
}
.caozai-line {
    height: 420px;
    transform: rotate(2deg);
}
.cisong-line {
    height: 470px;
    transform: rotate(21deg);
}
.dongxiao-line {
    height: 510px;
    transform: rotate(16deg);
}
.duohu-line {
    height: 545px;
    transform: rotate(16deg);
}
.jiangdong-line {
    height: 560px;
    transform: rotate(6deg);
}
.linxia-line {
    height: 560px;
    transform: rotate(-12deg);
}
.linpu-line {
    height: 520px;
    transform: rotate(-14deg);
}
.xiaosun-line {
    height: 505px;
    transform: rotate(-31deg);
}
.fucun-line {
    height: 450px;
    transform: rotate(-33deg);
}
</style>
