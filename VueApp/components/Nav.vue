<script setup>
const auth = useAuth();

const routes = [
    { path: '/', name: "Home" },
    { path: 'about', name: "About", useAuth: true },
    { path: 'profile', name: "Profile", }
];
</script>

<template>
    <nav id="site-nav">
        <ul>
            <li v-for="route in routes" :key="route.path" :class="{ hidden: route.useAuth && !auth }">
                <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style>
#site-nav {
    padding: 8px;
    margin-top: 8px;
    background-color: #efefef;
}

#site-nav .hidden {
    display: none;
}

#site-nav ul {
    padding: 0;
    margin: 0px 8px;
    list-style: none;
    display: flex;
    gap: 12px;
}

#site-nav li {
    margin: 4px;
    text-transform: capitalize;
}

#site-nav a.router-link-exact-active {
    border-bottom: 2px solid rgb(17, 114, 218);
}

#site-nav a {
    text-decoration: none;
    color: rgb(0, 110, 255);
}
</style>