<template>
	<div class="section">
		<div class="section-wrapper cle">
			<h3>最新<i class="icon-right"></i></h3>

			<div class="top">
				<img class="img" v-bind:src="topList.picurl" alt="">
				<div class="info-wrapper">
					<div class="title">{{topList.mvtitle}}-{{topList.singername}}</div>
					<div class="desc">{{topList.publictime}}</div>
				</div>
			</div>
		
			<div v-for="(item, index) in bottomList" v-bind:class="index%2 ? 'bottom' : 'bottom right'">
				<img v-bind:src="item.picurl" alt="" class="img">
				<div class="info-wrapper">
					<div class="title">{{item.mvtitle}}-{{item.singername}}</div>
					<div class="desc">{{item.publictime}}</div>
				</div>
			</div>
		</div>
		
		<div class="section-wrapper cle">
			<h3>最热<i class="icon-right"></i></h3>

			<div class="top">
				<img class="img" v-bind:src="topList.picurl" alt="">
				<div class="info-wrapper">
					<div class="title">{{topList.mvtitle}}-{{topList.singername}}</div>
					<div class="desc">{{topList.publictime}}</div>
				</div>
			</div>
		
			<div v-for="(item, index) in bottomList" v-bind:class="index%2 ? 'bottom' : 'bottom right'">
				<img v-bind:src="item.picurl" alt="" class="img">
				<div class="info-wrapper">
					<div class="title">{{item.mvtitle}}-{{item.singername}}</div>
					<div class="desc">{{item.publictime}}</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import mvlist from './mvlist.json'
import * as request from 'utils/request'
// console.log(getMvlist)
export default {
    data () {
        return {
            mvlist: mvlist,
            topList: {},
            bottomList: {}
        }
    },
    components: {},
    created: function () {
        request.getMvlist().then(resp => {
            console.log(resp)
            this.topList = resp.mvlist.shift()
            this.bottomList = resp.mvlist
            console.log(this.topList, this.bottomList)
        })
    }
}
</script>

<style lang="scss">
	.cle:after{
		display:block;
		clear:both;
		content:"";
		visibility:hidden;
		height:0;
	}
	.cle{zoom:1}  
	h3 {
		text-align:center;
		position:relative;
		.icon-right {
			position:absolute;
			top:1px;
			right:15px;
			display:inline-block;
			width:25px;
			height:25px;
			background:url(./row-right.png) no-repeat;
			background-size:100% 100%;
		}
	}
	.top, .bottom {
		.img {
			width:100%;
		}
		.info-wrapper {
			padding-left:15px;
			line-height:20px;
			margin-bottom:15px;
			.title {
				width:90%;
				overflow:hidden;
				white-space:nowrap;
				text-overflow:ellipsis;
				color:#000;
			}
			.desc {
				color:#9b9b9b;
			}
		}
	}
	.bottom {
		width:49%;float:left;
		&.right {
			float:right;
		}
	}
</style>
