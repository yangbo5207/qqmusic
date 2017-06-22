<template>
	<div class="header">
		<icon class="qqmusic-icon-arrow-left icon-row"></icon>
		视频MV
	</div>
</template>

<script>
	import icon from 'components/icon'

	export default{
    components: {icon}
	}
</script>

<style lang="scss">
	.header {
		height:40px;
		line-height:40px;
		background:#3ac17e;
		color:#fff;
		text-align:center;
		font-size:20px;
		position:relative;
		.icon-row {
			position:absolute;
			left:5px;
			font-size:30px;
			line-height:40px;
		}
	}
	// &-search:before { content: '\e602' };
 //    &-loading:before { content: '\e611'};
 //    &-arrow-left:before { content: '\e60d'};
 //    &-headset:before { content: '\e6ce'};
 //    &-camera:before { content: '\e6c2'};
 //     &-play:before { content: '\e601'};
 //    &-arrow:before { content: '\e8f4'};
 //    &-singer:before { content: '\e674'};
 //     &-rank:before { content: '\e600'};
 //    &-classify:before { content: '\e612'};
 //    &-album:before { content: '\e60e'};
 //    &-diantai:before { content: '\e6f4'};
 //     &-mv:before { content: '\e61a'};

 //    &-spin {
</style>
