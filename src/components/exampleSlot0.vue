<template>
    <div>
        <h2>我是子组件的标题</h2>
        <slot>
            只有在没有要分发的内容时，才会显示我
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'exampleSlot0'
    }
</script>
