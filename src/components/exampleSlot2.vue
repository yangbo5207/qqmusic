<template>
    <div class="child">
        <p>作用域插槽</p>
        <slot text="hello from child"></slot>
    </div>
</template>

<script>
    export default {
        name: 'exampleSlot2'
    }
</script>
