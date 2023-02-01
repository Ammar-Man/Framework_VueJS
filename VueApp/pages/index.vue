<script setup>
const count = useCounter();

function countAdd() {
    count.value += 1;
}
</script>

<template>
    <div>
        <h2>Index sida</h2>
        <p>Counter {{ count }}</p>
        <button @click="countAdd">Knapp</button>
    </div>
</template>

<style module>

</style>