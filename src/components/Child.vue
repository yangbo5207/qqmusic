<template>
    <span class="reds">{{ message }}</span>
</template>

<script>
    export default {
        name: 'child',
        props: {
            message: String
        }
    }
</script>

<style lang="scss" scoped>
    @import './style.scss';
</style>
