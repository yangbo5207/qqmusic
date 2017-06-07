<template>

<div class="sosobox-container">
    <div class="search-input">
        <input class="search-input-input" type="text" value="xxxx">
        <icon></icon>
    </div>
    <div class="cancel"></div>
</div>


</template>

<script>
import icon from 'components/icon'

export default {
    name: 'sosobox',
    components: { icon },
    data () {
        return {
            keyword: ''
        }
    },
    mounted () {
        console.log('xxx')
    }
}

</script>
