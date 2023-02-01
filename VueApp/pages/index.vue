<script setup>
const count = useCounter();
const auth = useAuth();

definePageMeta({
    title: "Home"
})
</script>

<template>
    <div>
        <h2>Index sida</h2>
        <p>Counter {{ count }}</p>
        <button @click="count++">Knapp</button>
        <button @click="auth = !auth">Logged in ({{ !!auth }})</button>
    </div>
</template>