<template>
    <div class="album-list-container">
        <div class="mod-tag" id="tag-list">  
           <div class="tag-list">
                <h3 class="tag-tit">语种</h3>
                <a href="javascript:;" class="tag-item " :class="{ tagselect: activeB == index }" v-for="(item,index) in tag.language" :key="{index}"  @click="selectedB(index)">
                {{item.name}} 
                </a>
            </div>           
            <div class="tag-list">
                <h3 class="tag-tit">流派</h3>
                <a href="javascript:;" class="tag-item " :class="{ tagselect: activeA == index }" v-for="(item,index) in tag.genre"  @click="selectedA(index)">
                {{item.name}} 
                </a>
            </div> 
             <div class="tag-list">
                <h3 class="tag-tit">价格</h3>
                <a href="javascript:;" class="tag-item " :class="{ tagselect: activeC == index }" v-for="(item,index) in tag.pay"  @click="selectedC(index)">
                {{item.name}} 
                </a>
            </div> 
            <div class="tag-filter">
                <h3>筛选</h3>
                <ul>
                    <li>
                        <select v-model="selectedType">
                            <option disabled value="">类 别</option>
                            <option  v-for="(item,index) in tag.type" :value="item.id">    
                                <a href="javascript:;">{{item.name}} </a>
                            </option>
                        </select>
                    </li>
                    <li>
                        <select v-model="selectedYear">
                            <option disabled value="">年 代</option>
                            <option  v-for="(item,index) in tag.year" :value="item.id" >    
                                <a href="javascript:;">{{item.name}} </a>
                            </option>
                        </select>
                    </li>
                    <li>
                        <select v-model="selectedCompany">
                            <option disabled value="">公 司</option>
                            <option  v-for="(item,index) in tag.company" :value="item.id">    
                                <a href="javascript:;">{{item.name}} </a>
                            </option>
                        </select>
                    </li>
                </ul>
            </div> 
        </div>
        <div class="mod-part-detail">
	        <div class="part-detail-hd">
		        <h2 class="part-detail-tit">全部专辑</h2>
		        <div class="part-switch js-sort" >
		            <a href="javascript:;" class="part-switch-item " v-bind:class="{switchSelect: isActive== index}" @click="onActive(index)" v-for="(item,index) in partSort">{{item}}</a>		          
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
    									<a href="javascript:;" class="js-singer" >{{value.singer_name}}</a>
    								</div>
    								<div class="playlist-other">
    								    {{value.public_time}}
    								</div>
    							</div>
                            </router-link>
						</li>
		    		</ul>
                     <p v-if="playlist.length > 0 && nomore" class="nomore">我是有底线的哦~</p>
                     <p v-else-if ="playlist.length == 0" class="nomore">啊，没有结果，换个筛选条件吧</p>
		    	</div>
		    </div>
		</div>
    </div>
</template>

<script>
import * as request from 'utils/request'
export default {
    name: 'album-list',
    data () {
        return {
            tag: {},
            playlist: [],
            partSort: ['最新', '最热'],
            newpage: 0,
            activeA: 0,
            activeB: 0,
            activeC: 0,
            isActive: 0,
            selectedType: '',
            selectedYear: '',
            selectedCompany: '',
            nomore: false
        }
    },
    created () {
        request.getAlbumList().then(resp => {
            this.tag = resp.tag
            this.showlist()
        })
    },
    mounted () {
        document.querySelector('.album-list-container').addEventListener('scroll', this.scrollWindow)
    },
    watch: {
        selectedType: function (val) {
            request.defaultConfig.type = val
            this.init()
        },
        selectedYear: function (val) {
            request.defaultConfig.year = val
            this.init()
        },
        selectedCompany: function (val) {
            request.defaultConfig.company = val
            this.init()
        }
    },
    methods: {
        showlist () {
            let that = this
            request.defaultConfig.page = this.newpage
            request.getAlbumList({cmd: 'get_album_info'}).then(resp => {
                let pagesum = Math.ceil(resp.sum / resp.pagesize)
                if (request.defaultConfig.page < pagesum) {
                    this.nomore = false
                    document.querySelector('.album-list-container').addEventListener('scroll', this.scrollWindow)
                    this.newpage++
                } else if (request.defaultConfig.page >= pagesum) {
                    document.querySelector('.album-list-container').removeEventListener('scroll', this.scrollWindow)
                    this.newpage = pagesum
                    this.nomore = true
                }
                var data = that.playlist
                that.playlist = data.concat(resp.albumlist.map(item => {
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
        init () {
            this.playlist = []
            this.newpage = 0
            this.showlist(this.newpage)
        },
        selectedA (index) {
            this.activeA = index
            request.defaultConfig.genre = this.tag.genre[index].id
            this.init()
        },
        selectedB (index) {
            this.activeB = index
            request.defaultConfig.language = this.tag.language[index].id
            this.init()
        },
        selectedC (index) {
            this.activeC = index
            request.defaultConfig.pay = this.tag.pay[index].id
            this.init()
        },
        onActive (index) {
            this.isActive = index
            request.defaultConfig.sort = index + 1
            request.getAlbumList().then(resp => {
                this.playlist = resp.albumlist.map(item => {
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
        scrollWindow () {
            let dom = document.querySelector('.album-list-container')
            if (dom.offsetHeight + dom.scrollTop >= dom.scrollHeight) {
                this.showlist(this.newpage)
            }
        }
    }
}

</script>

<style lang="scss">
@import "./style"
</style>

