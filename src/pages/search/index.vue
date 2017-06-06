<template>
    <div class="classify-list-container">
        搜索页面
    </div>
</template>

<script>
import * as request from 'utils/request'

export default {
    name: 'serach',
    mounted () {
        request.getHotSearchKeysmod().then(resp => {
            console.log(resp)
        })
    }
}

</script>

<style lang="scss">
@import "./style"
</style>
