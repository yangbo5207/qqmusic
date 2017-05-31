<template>

<div id="app">
    <nav>
        <router-link
            v-for="(tab, i) in tabs"
            :to="tab.path"
            :class="{active: index === i}"
            @click.native="linkTo(i)"
            key="{i}"
        >
            {{ tab.title }}
        </router-link>
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
    name: 'app',
    data () {
        return {
            tabs: [
                { path: '/', title: '主页' },
                { path: '/profile', title: '我的' },
                { path: '/discover', title: '发现' }
            ],
            index: 0
        }
    },
    methods: {
        linkTo (index) {
            this.index = index
        }
    }
}

</script>

<style lang="scss">
    @import "./style"
</style>
