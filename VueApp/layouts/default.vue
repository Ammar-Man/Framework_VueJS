<template>
    <Header />
    <Nav />
    <main id="site-main">
        <slot />
    </main>
    <Footer />
</template>

<style>
#site-main {
    padding: 0 18px;
}
</style>