<template>

<div class="slider-container">
    <div class="slides">
        <!-- 不循环 -->
        <template v-if="!options.loop">
            <template v-for="(item, i) in pages">
                <a class="slide" :href="item.url" :style="item.style">{{ item.title }}</a>
            </template>
        </template>
    </div>
</div>

</template>

<script>
import moveTo from 'utils/moveTo'
import { getTransform } from 'utils/requestAnimationFrame'

const pages = [{
    url: 'xxx',
    style: {
        backgroundColor: 'orange'
    },
    title: 'Banner1'
}, {
    url: 'xxx',
    style: {
        backgroundColor: 'pink'
    },
    title: 'Banner2'
}, {
    url: 'xxx',
    style: {
        backgroundColor: '#cccccc'
    },
    title: 'Banner3'
}]
const options = {
    duration: 600, // 页面切换过渡时间
    direction: 1, // 页面切换方向 0水平  1竖直
    start: 0, // 默认显示页面
    loop: false, // 是否循环切换
    transition: 'slide', // 切换方式
    autoplay: false,  // 是否自动切换
    interval: 3000   // 播放时间间隔
}

const deviceWidth = document.body.clientWidth
const styleTransform = getTransform()
const ismobile = 'ontouchstart' in document

let startX = 0
let targetSourceX = 0
let disX = 0

export default {
    name: 'slider',
    props: {
        pages: {
            type: Array,
            // required: true,
            default () {
                return pages
            }
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
            isAnimation: false,  // 是否在运动中
            isCanStart: true,   // 是否可以开始，isAnimation的控制，当运动结束之后，可以跳过touchstart而直接触发touchmove，因此需要另外一个参数辅助控制
            startX: 0,
            targetSourceX: 0,
            index: 0
        }
    },
    computed: {

    },
    mounted () {
        const target = this.$el.children[0]

        startX = 0
        targetSourceX = 0

        target.style.width = target.children.length * deviceWidth + 'px'

        if (ismobile) {
            target.addEventListener('touchstart', this.handlerMousedown, false)
            target.addEventListener('touchmove', this.handlerMousemove, false)
            target.addEventListener('touchend', this.handlerMouseup, false)
        } else {
            target.addEventListener('mousedown', this.handlerMousedown, false)
        }
    },
    destory () {
        const target = this.$el.children[0]
        target.removeEventListener('touchstart', this.handlerMousedown, false)
        target.removeEventListener('touchmove', this.handlerMousemove, false)
        target.removeEventListener('touchend', this.handlerMouseup, false)
    },
    methods: {
        handlerMousedown (event) {
            if (this.isAnimation) {
                return
            }
            event.preventDefault()
            console.log('start')
            this.isCanStart = true
            startX = ismobile ? event.changedTouches[0].pageX : event.clientX

            if (!ismobile) {
                document.addEventListener('mousemove', this.handlerMousemove, false)
                document.addEventListener('mouseend')
            }
        },
        handlerMousemove (event) {
            if (this.isAnimation || !this.isCanStart) {
                return
            }
            event.preventDefault()
            console.log('move')
            const currentX = ismobile ? event.changedTouches[0].pageX : event.clientX
            disX = currentX - startX
            const targetCurrentX = targetSourceX + disX
            this.$el.children[0].style[styleTransform] = `translate(${targetCurrentX}px, 0)`
        },
        handlerMouseup (event) {
            if (this.isAnimation || !this.isCanStart) {
                return
            }
            console.log('end')
            const self = this
            this.isAnimation = true
            this.isCanStart = false

            let destination = 0  // 目的地

            if (disX <= 50 || disX >= -50) {
                destination = targetSourceX
            }

            if (disX > 50) {
                if (this.index > 0) {
                    this.index -= 1
                }
                destination = -this.index * deviceWidth
            }

            if (disX < -50) {
                if (this.index < this.$el.children[0].children.length - 1) {
                    this.index += 1
                }
                destination = -this.index * deviceWidth
            }

            moveTo(this.$el.children[0], destination, function () {
                targetSourceX = destination
                self.isAnimation = false
            })
        }
    },
    watch: {
        pages (newPages) {
            this.$el.children[0].style.width = newPages.length * deviceWidth + 'px'
        }
    }
}

</script>

<style lang="scss" scoped>
@import "./style"
</style>
