<template>

<div class="page-wrap">
    <div class="title">this is a test component.</div>
    <div class="test">{{ message }}</div>
    <div class="counter">{{ counter }}</div>
</div>


</template>

<script>
import * as request from 'utils/request'

export default {
    name: 'index',
    data () {
        return {
            message: 'this is a message',
            focus: [],  // banner轮播
            hotdissList: [],
            shoubomv: {},
            toplist: [] // 排行榜
        }
    },
    computed: {
        counter () {
            return 20 + 30
        }
    },
    created () {
        request.getRecomList().then(resp => {
            console.log(resp)
            this.focus = resp.focus
            this.hotdissList = resp.hotdiss.list
            this.shoubomv = resp.shoubomv
            this.toplist = resp.toplist
        })
    },
    mounted () {
        console.log(this.$el)
    }
}

</script>

<style lang="scss" scoped>
@import './style'
</style>
