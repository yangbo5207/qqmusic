<template>
    <div class="container">
        <header>
            <h1>巨魔紫巨剑</h1>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <div>footer</div>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'exampleSlot1'
    }
</script>
