<template>

<div class="hotdiss-container">
    <div class="hotdiss-header">热门歌单</div>
    <div class="hotdiss-body">
        <div class="hotdiss-item-box" v-for="item in disslist">
            <router-link to="/">
                <div class="diss-cover" :style="item.style"></div>
                <div class="info-mask">
                    <div class="diss-name">{{ item.dissname }}</div>
                    <div class="listennum">已播放{{ item.listennum }}次</div>
                </div>
            </router-link>
        </div>
    </div>
</div>

</template>

<script>

export default {
    name: 'hotdidss',
    props: [ 'disslist' ]
}

</script>
