<template>

<div class="album-container">
    <div class="album-header">
        <div class="title">新歌速递</div>
        <router-link to="/album" class="link">
            <span class="arrow"></span>
        </router-link>
    </div>
    <div class="album-body">
        <div class="album-item-box" v-for="item in albumList">
            <router-link to="/">
                <div class="album-cover" :style="item.album_cover_style"></div>
                <div class="info-mask">
                    <div class="album-name">{{ item.album_name }}</div>
                    <div class="singer">{{ item.singer_name }}</div>
                </div>
            </router-link>
        </div>
    </div>
</div>

</template>

<script>
import * as request from 'utils/request'

export default {
    name: 'album',
    data () {
        return {
            albumList: []
        }
    },
    mounted () {
        request.getAlbumList({ cmd: 'get_album_info', pagesize: 6 }).then(resp => {
            this.albumList = resp.albumlist.map(item => {
                item.album_cover_style = {
                    backgroundImage: `url(https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg)`
                }
                return item
            })
        })
    }
}

</script>
