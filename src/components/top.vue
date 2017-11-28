<template>
    <div>
        <div class="top">

            <div class="img">
                <img src="../assets/1.jpg" width="160">
            </div>

            <div class="menu1">
                <ul>
                    <li><a href="http://www.imooc.com/course/list">课程 </a></li>
                    <li><a href="#">职业路径</a></li>
                    <li><a href="#">实战</a></li>
                    <li><a href="#">猿问</a></li>
                    <li><a href="#">手记</a></li>
                </ul>
            </div>

            <div class="search">
                <a href="#">前端入门</a>
                <!--<a href="#">Java入门</a>-->
            </div>

            <div class="download" @mouseover="ondownload" @mouseout="offdownload"><a>下载APP</a></div>

            <div class="img_1"><img src="../assets/2.png" width="35px"></div>

            <div class="shopcar" @mouseover="onshopcar" @mouseout="offshopcar">
                <a >购物车</a>
            </div>
        </div>
        <div v-show="isdownload" class="idownload" @mouseover="ondownload" @mouseout="offdownload">
            <img src="../assets/3.png" style="height: 108px">
            <div>
                <p>扫描在线慕课网APP</p>
                <a href="#">App store下载</a>
                <a href="#">Android下载</a>
            </div>
        </div>
        <div v-show="isshopcar" class="ishopcar" @mouseover="onshopcar" @mouseout="offshopcar"></div>
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
                isshopcar: false,
                isdownload: false
            }
        },
        methods: {
            onshopcar(){
                this.isshopcar = true
            },
            offshopcar(){
                this.isshopcar = false
            },
            ondownload(){
                this.isdownload = true
            },
            offdownload(){
                this.isdownload = false
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        padding: 0;
        margin: 0;;
    }

    .top {
        width: 100%;
        height: 72px;
        background-color: #fff;
    }

    .img {
        padding: 9px 30px;
        float: left;
        display: block;
    }

    .menu1 li {
        float: left;
        list-style-type: none;
        padding-left: 20px;
        padding-right: 10px;
        text-align: center;
        line-height: 72px;
        display: block;
    }

    .menu1 a:link, .menu1 a:visited {
        text-decoration: none;
        color: #555;
        font-size: large;
    }

    .menu1 a:hover, .menu1 a:active {
        color: #000;
        font-family: Avenir;

    }

    .search {
        padding-left: 100px;
        height: 72px;
        width: 200px;
        float: left;
        line-height: 72px;
    }

    .shopcar {
        padding-right: 50px;
        height: 72px;
        float: right;
        line-height: 72px;
    }

    .search a {
        height: 35px;
        border: 1px solid;
        border-radius: 35px;
        background: #eee;
        text-decoration: none;
        font-size: smaller;
        padding: 5px 10px;
        color: #666;
        /*float: left;*/
    }

    .download {
        float: left;
        width: 150px;
        height: 72px;
        line-height: 72px;
    }

    .download a {
        padding-left: 50px;
        color: #333;
    }

    .shopcar a {
        height: 35px;
        border: 1px solid;
        border-radius: 35px;
        background: #eee;
        text-decoration: none;
        font-size: medium;
        padding: 10px 30px;
        color: #666;
    }

    .img_1 {
        padding: 20px 50px;
        float: right;
    }

    .ishopcar {
        width: 350px;
        height: 400px;
        left: 830px;
        background-color: #fff;
        position: absolute;
        z-index: 1;
    }
    .idownload {
        width: 300px;
        height: 150px;
        left: 710px;
        position: absolute;
        background-color: #fff;
        /*box-shadow: 0 5px 20px #aaa;*/
        z-index: 9999;
    }
    .idownload img {
        /*width: 108px;*/
        margin: 20px;
        float: left;
    }
    .idownload p{

    }
    .idownload a{
        width: 132px;
        height: 36px;
        line-height: 36px;
        margin-top: 10px;
        border-radius: 18px;
        margin-right: 20px;
        background: #4d555d;
        color: #fff;
        text-decoration: none;
        display: block;
        float:right;
        position: relative;
    }
    .idownload a:hover{
        background: #000;
    }
</style>