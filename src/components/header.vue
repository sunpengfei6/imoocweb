<template>
    <div class="header" id="header">
        <div class="header-inner">
            <ul>
                <li></li>
                <li></li>
            </ul>
         <div class="subnav" >

         </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {}
        }
    }
</script>

<style>
    *{
        margin: 0;
        padding:0;
    }
    .header{
        width: 100%;
        height: 84px;
        left:0;
        position: absolute;
        z-index: 99;
        background: rgba(0,0,0,0.7);
        display: block;
}
    .subnav{
        width: 100%;
        top: 84px;
        height: 204px;
        left:0;
        position: absolute;
        z-index: 3;
        background: rgba(0,0,0,0.4);
    }
</style>
