<template>
<div class="container">
    <TheSlidebar></TheSlidebar>
    <TheHeader></TheHeader>
    <TheMain></TheMain>
</div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheSlidebar from './TheSlidebar.vue';
import TheMain from './TheMain.vue';
export default {
    name:"TheContainer",
    components:{
        TheSlidebar,TheHeader,TheMain
    }
}
</script>

<style scoped>
    
</style>