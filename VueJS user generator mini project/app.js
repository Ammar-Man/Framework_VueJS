const app = Vue.createApp({
    // template: "<h1> hello {{firstName}}</h1>",
    data(){
        return{
            firstName:"Amppari",
            lastName:"Code",
            email:"AmppariCode@google.com",
            gender:"male",
            country:"Norway",
            img:"https://randomuser.me/api/portraits/men/78.jpg"
        }
    },
    methods:{
       async getUser(){
            const res = await fetch("https://randomuser.me/api")
            const {results } = await res.json()
            console.log(results)
            this.firstName = results[0].name.first,
            this.lastName =results[0].name.last,
            this.email =results[0].email,
            this.gender =results[0].gender,
            this.country = results[0].location.country
            this.img = results[0].picture.large
        }
    }
})

app.mount("#app")