<template>

<div class="album-list-container">
    <mvheader></mvheader>
    <slider></slider>
    <tab></tab>
    <mvsection></mvsection>
</div>

</template>

<script>
import mvheader from './mvheader.vue'
import slider from 'components/slider'
import mvlist from './mvlist.json'
import tab from './tab.vue'
import mvsection from './mvsection.vue'

export default {
    name: 'mv-list',

    components: {slider, tab, mvsection, mvheader},

    data () {
        return {
            mvlist: mvlist
        }
    }
}

</script>

<style lang="scss">
@import "./style"

</style>
