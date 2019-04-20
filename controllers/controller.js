const axios = require('axios')
const swapi = require('swapi-node');


//Character List
exports.people =(req, res)=>{
    axios.get(`https://swapi.co/api/people`)
        .then(({data})=>{
            res.send(data)
        }).catch((err) =>{
            res.status(500).send(err);
        })
}
//Individual Character 
exports.people_id = (req,res)=>{
    axios.get(`https://swapi.co/api/people/ ${req.params.id}`)
        .then( ({ data })=>{
            res.send(data)
        }).catch((err)=>{
            res.status(500).send(err)
        })

    
}

//Planets
exports.planets = (req, res)=>{
    axios.get('https://swapi.co/api/planets')
        .then( ({ data })=>{
            res.send(data)
        }).catch(err =>{
            res.status(500).send(err)
        })
}

//Individual Planets
exports.planets_id = (req,res) =>{
    axios.get(`https://swapi.co/api/planets/${req.params.id}`)
        .then(( { data } )=>{
            console.log(data)
            res.send(data)
        }).catch(err =>{
            res.status(500).send(err)
        })
}
//Character Page
// exports.paginate = (req,res)=>{
//     axios.get(`https://swapi.co/api/people/?page=${req.params.id}`)
//         .then(({ data }) =>{
//             console.log(data)
//             res.send(data)
//         }).catch((err) =>{
//             res.status(500).send(err);
//         })
// }