<template>
    <div>
        <div class="top">
            <iTop></iTop>
        </div>
        <div class="middle">
            <iMiddle></iMiddle>
        </div>
    </div>
</template>

<script>
    import iTop from './top.vue'
    import iMiddle from './middle.vue'
    import iHeader from './header.vue'
    export default {
        components:{iTop,iMiddle,iHeader},

        data () {
            return {

            }
        },
        methods:{}
    }

</script>

<style>
    .top{
        box-shadow: 0 5px 20px #aaa;
        display: block;
    }
    .middle{
        box-shadow: 0 5px 20px #aaa;
        display: block;
    }
    .header{
        display: block;
        box-shadow: 0 5px 20px #aaa;
    }

</style>
