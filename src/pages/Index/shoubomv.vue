<template>

<div class="shoubomv-container">
    <div class="shoubomv-header">
        <div class="title">首播MV</div>
        <router-link to="/mv" class="link">
            <span class="arrow"></span>
        </router-link>
    </div>
    <div class="shoubomv-body">
        <div class="shoubomv-item-box" v-for="item in mvlist">
            <a :href="item.url">
                <div class="mv-cover" :style="item.style"></div>
                <div class="info-mask">
                    <div class="mv-title">{{ item.mvtitle }}</div>
                    <div class="mv-singer">{{ item.singer_name }}</div>
                    <div class="listennum">已播放{{item.listennum}}次</div>
                </div>
            </a>
        </div>
    </div>
</div>

</template>

<script>

export default {
    name: 'shoubomv',
    props: ['mvlist']
}

</script>
