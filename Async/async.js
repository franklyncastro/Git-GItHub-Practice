const axios = require('axios')


async function app(){
    try{
        const response =  axios('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then(response => response.data)
        .then(data => {
            
           console.log(data)
        })
    }
    catch(err){
        console.log(err)
    }
}

app()