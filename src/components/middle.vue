<template>
    <div class="middle">
        <div class="menu-box">
            <ul>
                <li @click="toFrontEnd" @mouseenter="onFrontEnd" @mouseleave="offFrontEnd">前端开发</li>
                <li @click="toBackEnd" @mouseover="onBackEnd" @mouseout="offBackEnd">后端开发</li>
                <li @click="toMoveEnd" @mouseenter="onMoveEnd" @mouseleave="offMoveEnd">移动开发</li>
                <li @click="toFrontEnd" @mouseenter="onFrontEnd" @mouseleave="offFrontEnd">数据库</li>
                <li @click="toFrontEnd" @mouseenter="onFrontEnd" @mouseleave="offFrontEnd">云计算&大数据</li>
                <li @click="toFrontEnd" @mouseenter="onFrontEnd" @mouseleave="offFrontEnd">运维&测试</li>
                <li @click="toFrontEnd" @mouseenter="onFrontEnd" @mouseleave="offFrontEnd">UI设计</li>
            </ul>
            <div v-show="isFrontEnd" class="inner" @mouseover="inFrontEnd" @mouseout="outFrontEnd">
                <p>基础</p>
                <a href="#">HTML/CSS</a>
                <a href="#">JavaScript</a>
                <a href="#">JQuery</a>
                <p>进阶</p>
                <a href="#">Html5</a>
                <a href="#">CSS3</a>
                <a href="#">Node.js</a>
                <a href="#">Angularjs</a>
                <a href="#">Vue.js</a>
            </div>
            <div v-show="isBackEnd" class="inner" @mouseover="inBackEnd" @mouseout="outBackEnd">
                <p>全部</p>
                <a href="#">PHP</a>
                <a href="#">Java</a>
                <a href="#">Python</a>
                <a href="#">C</a>
                <a href="#">C++</a>
            </div>
            <div v-show="isMoveEnd" class="inner" @mouseover="inMoveEnd" @mouseout="outMoveEnd">
                <p>全部</p>
                <a href="#">Android</a>
                <a href="#">IOS</a>
                <a href="#">Unity 3D</a>
            </div>
        </div>
        <div class="content">
            <!--<img src="../assets/2.jpg">-->
            <div class="swipe" @mouseover="stop" @mouseout="move">
                <div class="swipeshow">
                    <ul>
                        <li v-for="(img,index) in imgArray" v-show="index===mark" :key="index">
                            <img :src='img'>
                        </li>
                    </ul>
                </div>
                <div class="bar">
                    <span v-for="(item,index) in imgArray" :class="{ 'active':index===mark }" :key="index" @click="change(index)"></span>
                </div>
            </div>
            <div class="banner">
                <a href="#">
                    <p class="tit">Web前端工程师</p>
                    <p class="desc">互联网最火爆的技术</p>
                </a>
                <a href="#">
                    <p class="tit">Java工程师</p>
                    <p class="desc">健壮、安全、适用广泛</p>
                </a>
                <a href="#">
                    <p class="tit">Android工程师</p>
                    <p class="desc">移动设备市场份额第一</p>
                </a>
                <a href="#">
                    <p class="tit">PHP工程师</p>
                    <p class="desc">世界上最好的语言</p>
                </a>
                <a href="#">
                    <p class="tit">iOS工程师</p>
                    <p class="desc">可能是全球最好的系统</p>
                </a>
            </div>
        </div>
    </div>

</template>

<script>

    //    import rdSwipe from '../../node_modules/vue-slide/vue-slide'
    export default {

        components: {},

        data(){
            return {
                timer: null,
                mark: 0,
                imgArray: [
                    '../static/2.jpg',
                    '../static/3.jpg',
                    '../static/4.jpg'
                ],
                isFrontEnd: false,
                isBackEnd: false,
                isMoveEnd: false,
            }
        },

        methods: {
            onFrontEnd(){
                this.isFrontEnd = true
            },
            offFrontEnd(){
                this.isFrontEnd = false
            },
            inFrontEnd(){
                this.isFrontEnd = true
            },
            outFrontEnd(){
                this.isFrontEnd = false
            },
            onBackEnd(){
                this.isBackEnd = true
            },
            offBackEnd(){
                this.isBackEnd = false
            },
            inBackEnd(){
                this.isBackEnd = true
            },
            outBackEnd(){
                this.isBackEnd = false
            },
            onMoveEnd(){
                this.isMoveEnd = true
            },
            offMoveEnd(){
                this.isMoveEnd = false
            },
            inMoveEnd(){
                this.isMoveEnd = true
            },
            outMoveEnd(){
                this.isMoveEnd = false
            },
            toFrontEnd(){
                this.$router.push("/header")
            },
            toBackEnd(){
                alert('跳转到后端')
            },
            toMoveEnd(){
                alert('跳转')
            },
            autoPlay () {
                this.mark++;
                if (this.mark === 3)
                { //当遍历到最后一张图片置零
                    this.mark = 0
                }
            },
            play () {
                setInterval(this.autoPlay, 4000)
            },
            change (i) {
                this.mark = i
            },
            stop(){
                clearInterval(this.timer)
            },
            move(){
                this.timer = setInterval(this.autoPlay,2500)
            }
        },
        created () {
            this.play()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    * {
        padding: 0;
        margin: 0;
    }

    .menu-box {
        width: 216px;
        height: 444px;
        padding-top: 12px;
        background: #2b333b;
        border-bottom-left-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
        float: right;
        position: absolute;
    }

    .swipe ul {
        margin: 0;
        padding: 0;
    }

    .swipe li {
        margin: 0;
        padding: 0;
    }

    .menu-box ul {
        margin: 0;
        padding: 0;
    }

    .menu-box ul li {
        padding: 20px;
        margin-left: 10px;
        color: rgba(255, 255, 255, .3);
        border-bottom-left-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
        font-weight: 900;
        font-size: 16px;
        list-style: none;
    }

    .menu-box ul li:hover {
        color: white;
        background-color: rgba(255, 255, 255, .3);
        cursor: pointer;
    }

    .inner {
        width: 768px;
        height: 456px;
        background-color: white;
        position: absolute;
        font-size: 15px;
        float: left;
        left: 216px;
        top: 0;
        z-index: 999;
    }

    .inner p {
        margin: 40px 40px;
    }

    .inner a {
        text-decoration: none;
        color: #555;
        margin-left: 40px;
        z-index: 0;
    }

    .middle {
        width: 1152px;
        margin: 30px auto;
    }

    .content {
        width: 936px;
        height: 440px;
        background: #fff;
        float: right;
        position: relative;
    }

    .swipe {
        width: 936px;
        height: 300px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
    }

    .swipeshow {
        width: 936px;
        height: 300px;
    }

    .swipeshow li {
        position: absolute;
    }

    .swipeshow img {
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        position: absolute;
        width: 936px;
        height: 300px;
    }

    .bar {
        position: absolute;
        width: 100%;
        bottom: 10px;
        margin: 0 auto;
        z-index: 10;
        text-align: center;
    }

    .bar span {
        width: 20px;
        height: 5px;
        border: 1px solid;
        background: white;
        display: inline-block;
        margin-right: 10px;
    }

    .banner {
        width: 936px;
        height: 140px;
        background-color: white;
        display: block;
    }

    .banner a {
        width: 180px;
        height: 128px;
        display: block;
        float: left;
        text-decoration: none;
    }

    .tit {
        margin-top: 50px;
        font-size: large;
        color: black;
    }

    .desc {
        font-size: smaller;
        color: #888888;
    }


</style>