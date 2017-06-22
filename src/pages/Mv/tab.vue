<template>
	<div>
		<ul>
			<li>
				<icon class="qqmusic-icon-rank icon-1"></icon>
				榜单
			</li>
			<li>
				<icon class="qqmusic-icon-play icon-2"></icon>
				直播
			</li>
			<li>
				<icon class="qqmusic-icon-mv icon-3"></icon>
				频道
			</li>
		</ul>
	</div>
</template>

<script>
	import icon from 'components/icon'

	export default {
    components: {icon}
	}
</script>

<style lang="scss">
	ul{
		padding:0;
		text-align:center;
		li{
			list-style:none;
			display:inline-block;
			margin-left:60px;
			font-size:18px;
			&:first-child {
				margin-left:-5px;
			}
			.icon-1 {
				font-size:30px;
				position:relative;
				top:5px;
			}
			.icon-2 {
				font-size:22px;
			}
			.icon-3 {
				font-size:26px;
			}
		}
	}
</style>
