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
    <h2>Profile</h2>
    <div v-if="data">
        <img :src="data.picture.large" :class="$style.avatar" />
        <p>{{ data.gender }}</p>
        <p>{{ data.location.city }}</p>
        <p>{{ data.email }}</p>
        <br>
        <button @click="getProfile">Refetch!</button>
    </div>
</template>

<style module>
.avatar {
    border-radius: 50%;
}
</style>