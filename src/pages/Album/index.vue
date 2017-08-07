<template>

    <div class="album-list-container">
        <taglist :tagname='tag' v-on:selectedOn="init"></taglist>
        <albumlist :playlist='boxlist' v-on:active="onActive"></albumlist>
        <p v-if="boxlist.length > 0 && nomore" class="nomore">我是有底线的哦~</p>
        <p v-else-if ="boxlist.length == 0" class="nomore">啊，没有结果，换个筛选条件吧</p>
    </div>

</template>

<script>

import * as request from 'utils/request'
import albumlist from './albumList'
import taglist from './tagList'

export default {
    name: 'album-list',
    data () {
        return {
            tag: {},
            boxlist: [],
            myparams: {},
            newpage: 0,
            nomore: false,
            sort: 1
        }
    },
    components: {
        albumlist,
        taglist
    },
    created () {
        request.getAlbumList().then(resp => {
            this.tag = resp.tag
            this.showlist()
        })
    },
    mounted () {
        document.querySelector('.album-list-container').addEventListener('scroll', this.throttle(this.scrollWindow, 500, 1000))
    },
    methods: {
        showlist () {
            let that = this
            request.getAlbumList({cmd: 'get_album_info', page: this.newpage, ...this.myparams, ...this.sort}).then(resp => {
                let pagesum = Math.ceil(resp.sum / resp.pagesize)
                if (resp.page < pagesum) {
                    this.nomore = false
                    this.newpage++
                } else if (resp.page >= pagesum) {
                    this.nomore = true
                    this.newpage = pagesum
                }
                var data = that.boxlist
                that.boxlist = data.concat(resp.albumlist.map(item => {
                    item = {
                        myimg: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`,
                        album_name: item.album_name,
                        singer_name: item.singer_name,
                        public_time: item.public_time
                    }
                    return item
                }))
            })
        },
        init (tagChange) {
            this.myparams = tagChange
            this.boxlist = []
            this.newpage = 0
            this.showlist()
        },
        onActive (sort) {
            this.sort = sort
            request.getAlbumList({...this.myparams, ...this.sort}).then(resp => {
                this.boxlist = resp.albumlist.map(item => {
                    item = {
                        myimg: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`,
                        album_name: item.album_name,
                        singer_name: item.singer_name,
                        public_time: item.public_time
                    }
                    return item
                })
            })
        },
        throttle (func, wait, mustRun) {
            let timeout
            let startTime = new Date()
            return function () {
                let context = this
                let args = arguments
                let curTime = new Date()
                clearTimeout(timeout)
                if (curTime - startTime >= mustRun) {
                    func.apply(context, args)
                    startTime = curTime
                } else {
                    timeout = setTimeout(func, wait)
                }
            }
        },
        scrollWindow () {
            let dom = document.querySelector('.album-list-container')
            if (dom.offsetHeight + dom.scrollTop >= dom.scrollHeight) {
                if (!this.nomore) {
                    this.showlist(this.newpage)
                }
            }
        }
    }
}
</script>

<style lang="scss">
@import "./style"
</style>
