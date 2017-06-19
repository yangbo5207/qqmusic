<template>
    <div class="search-container">
        <sosobox />
    </div>
</template>

<script>
import * as request from 'utils/request'
import sosobox from './sosobox'

export default {
    name: 'serach',
    components: { sosobox },
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
