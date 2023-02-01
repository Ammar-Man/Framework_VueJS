<script setup>
const props = defineProps({
    title: {
        type: String,
        required: false,
        default: 'App'
    }
});
</script>

<template>
    <header id="site-header">
        <h1>{{ props.title }}</h1>
    </header>
</template>

<style>
#site-header {
    background-color: #efefef;
    padding: 18px;
}

#site-header h1 {
    margin: 0;
    font-size: 26px;
}
</style>