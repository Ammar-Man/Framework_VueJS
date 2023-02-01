<template>
    <header :class="$style.app_header">
        <h1>
            {{title}}
            <!-- BankApp -->
        </h1>
    </header>
</template>

<script>
export default{
    name:"Header",
    props: {
        title: String
    }
}
</script>

<style module>
.app_header {
    /* display: flex; */
    background-color: #efefef;
    padding: 20px;
}
</style>