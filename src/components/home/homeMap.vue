<template>
    <div :id="echartsId" class="chartBox"></div>
</template>

<script>
import shandong from '@/assets/jinhuajindong.json';
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            myChart: null,
            nameMap: '山东省',
            dataList: [
                { name: '东孝街道', value: 66 },
                { name: '多湖街道', value: 22 },
                { name: '江东镇', value: 88 },
                { name: '岭下镇', value: 75 },
                { name: '澧浦镇', value: 21 },
                { name: '孝顺镇', value: 91 },
                { name: '傅村镇', value: 79 },
                { name: '赤松镇', value: 34 },
                { name: '源东乡', value: 63 },
                { name: '塘雅镇', value: 3 },
                { name: '曹宅镇', value: 66 }
            ]
        };
    },
    props: {
        echartsId: {
            type: String,
            require: true
        }
    },
    mounted() {
        this.loadChart();
    },
    methods: {
        loadChart() {
            this.$echarts.registerMap(this.nameMap, shandong);
            this.myChart = this.$echarts.init(document.getElementById(this.echartsId));
            /**
             * 图标所需数据
             */
            let option = (option = {
                visualMap: [
                    {
                        //地图上的颜色
                        min: 0,
                        max: 100,
                        show: false,
                        realtime: false,
                        calculable: false,
                        inRange: {
                            color: ['#c74332', '#c7b432', '#32c77c', '#3286c7', '#324bc7']
                        }
                    },
                    {
                        //比例尺
                        min: 0,
                        max: 100,
                        seriesIndex: 3,
                        show: true,
                        splitNumber: 5,
                        right: '0%',
                        bottom: '10%',
                        show: true,
                        inRange: {
                            color: ['#c74332', '#c7b432', '#32c77c', '#3286c7', '#324bc7']
                        },
                        textStyle: {
                            //图例文字的样式
                            color: '#fff',
                            fontSize: 14
                        },
                        formatter: function(value) {
                            let listArr = {
                                '0': '< 60',
                                '20': '60-70',
                                '40': '70-80',
                                '60': '80-90',
                                '80': '> 90'
                            };
                            return listArr[value];
                        }
                    }
                ],
                geo: {
                    map: this.nameMap,
                    show: true,
                    roam: true,
                    aspectScale: 3.4, //长宽比
                    zoom: 1.1,
                    itemStyle: {
                        normal: {
                            areaColor: '#013C62',
                            shadowColor: '#182f68',
                            shadowOffsetX: 0,
                            shadowOffsetY: 15
                        }
                    },
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    }
                },
                series: [
                    {
                        // 地图块的相关信息
                        type: 'map',
                        map: this.nameMap,
                        aspectScale: 3.4, //长宽比
                        zoom: 1.1,
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: 'rgb(255,255,255) '
                                }
                            }
                        },
                        data: this.dataList
                    }
                ]
            });
            this.myChart.setOption(option);
            this.myChart.on('click', params => {
                this.$emit("clickMap",params.data)
            });
        }
    },
    beforeUnmount() {
        this.myChart = null;
        // emitter.off('responseData');
    }
});
</script>

<style scoped>
.chartBox {
    width: 100%;
    height: 100%;
}
</style>
