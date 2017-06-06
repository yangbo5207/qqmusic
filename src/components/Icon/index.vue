<template>

<i :class="classes"></i>

</template>

<script>

export default {
    name: 'icon',
    props: {
        type: String
    },
    computed: {
        classes () {
            return {
                'qqmusic-icon': true,
                'qqmusic-icon-spin': this.type === 'loading',
                [`qqmusic-icon-${this.type}`]: true
            }
        }
    }
}

</script>

<style lang="scss" scoped>
@import './style'
</style>
