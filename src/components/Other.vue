<template>
    <div class="other">{{ counter }}</div>
</template>
<script>
    export default {
        name: 'Other',
        props: ['trans'],
        data () {
            return {
                counter: this.trans
            }
        }
    }
</script>
