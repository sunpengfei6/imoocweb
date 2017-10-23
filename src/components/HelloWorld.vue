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
    export default {
        components:{iTop,iMiddle},

        data () {
            return {

            }
        },
        methods:{}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
