<template>
  <div class="home">
        <comHead />
        <leftOne class="left-com-box left-one" :class="bgActiveArr[0] ? 'left-active-bg' : ''" @click.stop="showLeftSecondMenu('leftOne')" />
        <leftTwo class="left-com-box left-two" :class="bgActiveArr[1] ? 'left-active-bg' : ''" @click.stop="showLeftSecondMenu('leftTwo')" />
        <leftThree class="left-com-box left-three" :class="bgActiveArr[2] ? 'left-active-bg' : ''" @click.stop="showLeftSecondMenu('leftThree')" />
        <leftFour class="left-com-box left-four" :class="bgActiveArr[3] ? 'left-active-bg' : ''" @click.stop="showLeftSecondMenu('leftFour')" />
        <leftFive class="left-com-box left-five" :class="bgActiveArr[4] ? 'left-active-bg' : ''" @click.stop="showLeftSecondMenu('leftFive')" />
        <rightOne class="right-one-box" :class="bgActiveArr[5] ? 'right-one-active-bg' : ''" @click.stop="showRightSecondMenu('rightOne')" />
        <rightTwo class="right-two-box" :class="bgActiveArr[6] ? 'right-two-active-bg' : ''" @click.stop="showRightSecondMenu('rightTwo')" />
        <rightThree class="right-three-box" />
        <rightFour class="right-four-box" />
        <centerMap class="center-map-box" />
        <secondMenu ref="secondMenu" class="second-menu-box" :class="!leftMenu ? 'right-menu' : ''" />
  </div>
</template>

<script lang="ts">
import comHead from "@/components/head.vue";
import leftOne from '@/components/home/leftOne.vue';
import leftTwo from '@/components/home/leftTwo.vue';
import leftThree from '@/components/home/leftThree.vue';
import leftFour from '@/components/home/leftFour.vue';
import leftFive from '@/components/home/leftFive.vue';
import rightOne from '@/components/home/rightOne.vue';
import rightTwo from '@/components/home/rightTwo.vue';
import rightThree from '@/components/home/rightThree.vue';
import rightFour from '@/components/home/rightFour.vue';
import centerMap from '@/components/home/centerMap.vue';
import secondMenu from '@/components/home/secondMenu.vue';
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  data(){
      	return{
          	leftMenu: true,
            bgActiveArr: [0, 0, 0, 0, 0, 0]
      	}
  },
  components: {
    comHead,
    leftOne,
    leftTwo,
    leftThree,
    leftFour,
    leftFive,
    rightOne,
    rightTwo,
    rightThree,
    rightFour,
    centerMap,
    secondMenu
  },
  mounted() {
        document.addEventListener('click', this.closeMenus);
    },
    beforeUnmount() {
        window.removeEventListener('click', this.closeMenus);
    },
    methods: {
        closeMenus() {
            if (this.$refs.secondMenu) {
                this.bgActiveArr = [0, 0, 0, 0, 0, 0, 0];
                (this.$refs.secondMenu as any).close();
            }
        },
		// 无返回值的函数，给他一个类型注解void,如果这样定义后，你再加入任何返回值，程序都会报错。
        showLeftSecondMenu(num: string): void{
			// 对象定义
			interface Rulelist {
				[index: string]: number[]
			};
            const ruleList: Rulelist  = {
                'leftOne': [1, 0, 0, 0, 0, 0, 0],
                'leftTwo': [0, 1, 0, 0, 0, 0, 0],
                'leftThree': [0, 0, 1, 0, 0, 0, 0],
                'leftFour': [0, 0, 0, 1, 0, 0, 0],
                'leftFive': [0, 0, 0, 0, 1, 0, 0]
            };
            this.bgActiveArr = ruleList[num];
            this.leftMenu = true;
			(this.$refs.secondMenu as any).open();
        },
        showRightSecondMenu(num: string): void {
			// 对象定义
			interface Rulelist {
				[index: string]: number[]
			};
            const ruleList: Rulelist = {
                rightOne: [0, 0, 0, 0, 0, 1, 0],
                rightTwo: [0, 0, 0, 0, 0, 0, 1]
            };
            this.bgActiveArr = ruleList[num];
            this.leftMenu = false;
            (this.$refs.secondMenu as any).open();
        }
    }
});
</script>
<style lang="less" scoped>
.home {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: url('../assets/img/bg.png') center no-repeat;
}
.left-com-box {
    width: 370px;
    height: 180px;
    overflow: hidden;
    background: url('../assets/img/bg1.png') center no-repeat;
    z-index: 11;
}
.left-one {
    position: absolute;
    left: 20px;
    top: 135px;
}
.left-two {
    position: absolute;
    left: 20px;
    top: 325px;
}
.left-three {
    position: absolute;
    left: 20px;
    top: 515px;
}
.left-four {
    position: absolute;
    left: 20px;
    top: 705px;
}
.left-five {
    position: absolute;
    left: 20px;
    top: 895px;
}
.right-one-box {
    position: absolute;
    right: 20px;
    top: 135px;
    width: 530px;
    height: 180px;
    overflow: hidden;
    background: url('../assets/img/bg2.png') center no-repeat;
    z-index: 11;
}
.right-two-box {
    position: absolute;
    right: 20px;
    top: 325px;
    width: 530px;
    height: 337px;
    overflow: hidden;
    background: url('../assets/img/bg3.png') center no-repeat;
    z-index: 11;
}
.right-three-box {
    position: absolute;
    right: 20px;
    top: 672px;
    width: 256px;
    height: 180px;
    overflow: hidden;
    background: url('../assets/img/bg4.png') center no-repeat;
    z-index: 11;
}
.right-four-box {
    position: absolute;
    right: 20px;
    top: 862px;
    width: 256px;
    height: 180px;
    overflow: hidden;
    background: url('../assets/img/bg4.png') center no-repeat;
    z-index: 11;
}
.center-map-box {
    width: 1495px;
    height: 910px;
    overflow: hidden;
    margin-left: 200px;
    top: 20px;
}
.second-menu-box {
    position: absolute;
    left: 420px;
    top: 135px;
    max-height: 936px;
    width: 400px;
    background-color: rgba(22, 77, 220, 0.8);
    box-shadow: 0px 0px 10px 0px rgba(105, 145, 250, 0.34);
}
.right-menu {
    left: 940px;
}
.left-active-bg {
    background: url('../assets/img/bg1_active.png') center no-repeat;
}
.right-one-active-bg {
    background: url('../assets/img/bg2_active.png') center no-repeat;
}
.right-two-active-bg {
    background: url('../assets/img/bg3_active.png') center no-repeat;
}
</style>
