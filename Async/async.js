const axios = require('axios');

async function api(){
    try{
        const res = await axios('https://jsonplaceholder.typicode.com/users')
        const dataApi = res.dataApi
        console.log(dataApi)
    }
    catch(err){
        console.log(err)
    }
}