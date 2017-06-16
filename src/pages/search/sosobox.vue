<template>

<div class="sosobox-container">
    <div class="search-input">
        <input class="search-input-input" type="text" value="xxxx" />
        <qbutton icontype="serach" type="primary">sss</qbutton>
    </div>
    <div class="cancel"></div>
</div>


</template>

<script>
import icon from 'components/icon'
import qbutton from 'components/Button'

export default {
    name: 'sosobox',
    components: { icon, qbutton },
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
