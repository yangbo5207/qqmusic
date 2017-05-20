<template>
    <button v-on:click="increment">{{ counter }}</button>
</template>

<script>
    export default {
        name: 'Counter',
        data () {
            return {
                counter: 0
            }
        },
        methods: {
            increment () {
                this.counter += 1
                this.$emit('increment')
            }
        }
    }
</script>
