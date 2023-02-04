<template>
    <Header title="Custom-admin" />
    <Nav />
    <main id="site-main">
        <slot />
    </main>
    <Footer />
</template>


<style module>
#site-main {
    padding: 0 18px;
    background-color:red ;
}
</style>