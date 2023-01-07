<template>
    <div class="slidebar">
            <div class="navbar">
                <div class="navbar__header">
                </div>
                <div class="navbar__content">
                    <div class="navbar__content--item">
                        <router-link to="/home" ><div class="item1"></div></router-link>
                        <router-link to="/customers" ><div class="item2 item2--active"></div></router-link>
                        <router-link to="/employees" ><div class="item3"></div></router-link>
                        <router-link to="/reports" ><div class="item4"></div></router-link>
                        <router-link to="/settings" ><div class="item5"></div></router-link>
                        <router-link to="/home" ><div class="item6"></div></router-link>
                        <router-link to="/home" ><div class="item7"></div></router-link>
                    </div>                
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:"TheSlidebar",
}
</script>

<style scoped>
    @import url(../../css/layout/slidebar.css);
</style>