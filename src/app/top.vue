<template>

<div id="app">
    <transition>
        <router-view keep-alive></router-view>
    </transition>
</div>

</template>

<script>

export default {
    name: 'top'
}

</script>
