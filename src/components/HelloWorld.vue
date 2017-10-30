<template>
    <div>
        <div class="top">
            <iTop></iTop>
        </div>
        <div class="middle">
            <iMiddle></iMiddle>
        </div>
        <div>

        </div>

    </div>
</template>

<script>
    import iTop from './top.vue'
    import iMiddle from './middle.vue'
    export default {
        components:{iTop,iMiddle},

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
    }
    .middle{
        box-shadow: 0 5px 20px #aaa;
    }

</style>
