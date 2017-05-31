<template>

<div id="app">
    <nav>
        <router-link to="/">主页</router-link>
        <router-link to="/profile">我的</router-link>
        <router-link to="/discover">发现</router-link>
    </nav>
     <div class="content">
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </div>

</div>

</template>

<script>

export default {
    name: 'app'
}

</script>

<style lang="scss">
    @import "./style"
</style>
