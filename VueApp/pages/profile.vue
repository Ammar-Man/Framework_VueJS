<script setup>
const data = ref(0);

async function getProfile() {
    const json = await $fetch('https://randomuser.me/api');
    if (json) {
        data.value = json.results[0];
    }
}

onMounted(() => {
    getProfile();
});
</script>

<template>
    <div v-if="data">
        <p>{{ data.gender }}</p>
        <p>{{ data.location.city }}</p>
        <p>{{ data.email }}</p>
        <img :src="data.picture.large" />
        <button @click="getProfile">Refetch!</button>
        <hr>
        <pre>
            {{ data }}
        </pre>
    </div>
</template>