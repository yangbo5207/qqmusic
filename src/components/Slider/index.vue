<template>

<div class="slider-container">
    <div class="sliders">
        <!-- 不循环 -->
        <template v-if="!options.loop">
            <template v-for="(item, i) in pages">
                <a class="slide" :href="item.url" :style="item.style"></a>
            </template>
        </template>
    </div>
</div>

</template>

<script>

const pages = [{url: 'xxx', img: 'xxxx'}, {url: 'xxx', img: 'xxxx'}]
const options = {
    duration: 600, // 页面切换过渡时间
    direction: 1, // 页面切换方向 0水平  1竖直
    start: 0, // 默认显示页面
    loop: false, // 是否循环切换
    transition: 'slide', // 切换方式
    autoplay: false,  // 是否自动切换
    interval: 3000   // 播放时间间隔
}

export default {
    name: 'slider',
    props: {
        pages: {
            type: Array,
            required: true
        },
        options: {
            type: Object,
            default () {
                return options
            }
        }
    },
    data () {
        return {
            isAnimationend: false
        }
    },
    computed: {

    }
}

</script>

<style lang="scss" scoped>
@import "./style"
</style>
