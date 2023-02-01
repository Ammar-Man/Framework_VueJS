<script setup>
const { getRoutes } = useRouter();

const routes = getRoutes().map((route) => {
    return {
        path: route.path,
        name: route.name
    }
})
</script>

<template>
    <nav :class="$style.app_nav">
        <ul :class="$style.app_ul">
            <li v-for="route in routes" :key="route.path">
                <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style module>
.app_nav {
    font-size: 15px;
}

.app_ul {
    list-style: none;
}
</style>