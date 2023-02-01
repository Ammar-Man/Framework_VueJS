export default defineNuxtRouteMiddleware(() => {
    const auth = useAuth(); // composable/store.js
    if (!auth.value)
        return navigateTo({ path: "/" });
    
    return true;
})