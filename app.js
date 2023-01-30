const app = Vue.createApp({
    // template: "<h1> hello {{firstName}}</h1>",
    data(){
        return{
            firstName:"Amppari",
            lastName:"Code",
            email:"AmppariCode@google.com",
            gender:"male",
            img:"https://picsum.photos/200/300"
        }
    }
})

app.mount("#app")