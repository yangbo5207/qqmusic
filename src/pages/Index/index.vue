<template>

<div class="page-wrap">
    <slider :pages="focus"></slider>
    <album></album>
</div>


</template>

<script>
import * as request from 'utils/request'
import slider from 'components/slider'
import album from './album'

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
    components: { slider, album },
    computed: {
        counter () {
            return 20 + 30
        }
    },
    created () {
        request.getRecomList().then(resp => {
            this.focus = resp.focus.map(item => {
                return {
                    url: item.jumpurl ? item.jumpurl : `https://y.qq.com/n/yqq/album/${item.id}.html`,
                    style: {
                        backgroundImage: `url(${item.pic})`
                    }
                }
            })
            this.hotdissList = resp.hotdiss.list
            this.shoubomv = resp.shoubomv
            this.toplist = resp.toplist
        })
    }
}

</script>

<style lang="scss">
@import './style'
</style>
