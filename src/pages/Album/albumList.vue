<template>

<div class="mod-part-detail">
    <div class="part-detail-hd">
        <h2 class="part-detail-tit">全部专辑</h2>
        <div class="part-switch js-sort" @click="active">
            <a class="part-switch-item" :class="{switchSelect:isActive == index}" @click="onActive(index)" v-for="(item,index) in partSort">
                {{item}}
            </a>               
        </div>
    </div>
    <div class="mod-playlist mod-playlist-all">
        <div class="playlist-list">
            <ul>
                <li class="playlist-item" v-for="value in playlist" >
                    <router-link :to="{path:'/',params:{id:value.album_mid}}">
                        <div class="playlist-item-box">
                            <div class="playlist-cover mod-cover">
                                <a href="javascript:;" class="js-album">
                                    <img :src="value.myimg">
                                    <i class="mod-cover-icon js-play"></i>
                                </a>
                            </div>
                            <h4 class="playlist-title">
                                <span class="playlist-title-txt">
                                    <a href="javascript:;" class="js-album">{{value.album_name}}</a>
                                </span>
                            </h4>
                            <div class="playlist-author">
                                <a href="javascript:;" class="js-singer">{{value.singer_name}}</a>
                            </div>
                            <div class="playlist-other">{{value.public_time}}</div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: 'albumlist',
    props: ['playlist'],
    data () {
        return {
            partSort: ['最新', '最热'],
            isActive: 0,
            nomore: false,
            sort: 1
        }
    },
    created () {
    },
    methods: {
        active () {
            this.$emit('active', {sort: this.sort})
        },
        onActive (index) {
            this.isActive = index
            this.sort = index + 1
        }
    }
}
</script>

