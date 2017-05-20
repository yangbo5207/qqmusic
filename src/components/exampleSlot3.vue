<template>
    <ul>
        <slot name="item" v-for="item in items" :text="item.text"></slot>
    </ul>
</template>

<script>
    export default {
        name: 'exampleSlot3',
        data () {
            return {
                items: [
                    { text: 'xxxxxxxx' },
                    { text: 'yyyyyyyy' },
                    { text: 'zzzzzzzz' }
                ]
            }
        }
    }
</script>
