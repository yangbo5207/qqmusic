<template>
    <span>{{ message }}</span>
</template>

<script>
    export default {
        name: 'child',
        props: {
            message: String
        }
    }
</script>
