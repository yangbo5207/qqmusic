<template>

<button :type="htmlType" :class="classes" @click="clickHandler">
    <icon v-if="icon" :type="icon" />
    <slot></slot>
</button>

</template>

<script>
import icon from '../icon'
import { isTheone } from 'utils/tool'

const prefixcls = 'qqmusic-button'

export default {
    name: 'qbutton',
    components: { icon },
    props: {
        type: {
            default: 'primary',
            validator (value) {
                return isTheone(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error'])
            }
        },
        htmlType: {
            default: 'button',
            validator (value) {
                return isTheone(value, ['button', 'submit', 'reset'])
            }
        },
        icon: String,
        shape: {
            validator (value) {
                return isTheone(value, ['circle', 'circle-outline'])
            }
        }
    },
    computed: {
        classes () {
            return {
                [prefixcls]: true,
                [`${prefixcls}-${this.type}`]: !!this.type
            }
        }
    },
    methods: {
        clickHandler (event) {
            this.$emit('click', event)
        }
    }

}
</script>

<style lang="scss">
@import './style'
</style>
