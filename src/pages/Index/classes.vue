<template>

<div class="classes-container">
    <router-link :to="item.path" class="classes-item-box" v-for="(item, i) in classes" key="i">
        <icon class="classes-icon" :type="item.icontype" />
        {{ item.title }}
    </router-link>
</div>

</template>

<script>
import icon from 'components/icon'

const classes = [
    {
        icontype: 'singer',
        title: '歌手',
        path: '/singer'
    },
    {
        icontype: 'rank',
        title: '排行榜',
        path: '/rank'
    },
    {
        icontype: 'classify',
        title: '分类歌单',
        path: '/classify'
    },
    {
        icontype: 'album',
        title: '专辑',
        path: '/album'
    },
    {
        icontype: 'mv',
        title: '视频MV',
        path: '/mv'
    },
    {
        icontype: 'diantai',
        title: '电台',
        path: 'diantai'
    }
]

export default {
    name: 'classes',
    computed: {
        classes () {
            return classes
        }
    },
    components: { icon }
}

</script>
