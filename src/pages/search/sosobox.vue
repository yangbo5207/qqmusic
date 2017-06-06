<template>

<div class="sosobox-container">
    <div class="input">
        <input type="text">
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
