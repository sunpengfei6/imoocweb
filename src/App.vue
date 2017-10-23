<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                isFrontEnd: false
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
