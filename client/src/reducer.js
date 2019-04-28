let initialState = {
    characters : [
        {
            name:"Retriving Data...",
            birth_year : "getting data...",
            gender : "getting data..."
        }],
    vehicles : [],
    planets: [
        {
            name:"Retriving Data...",
            
        }
    ],
    people :[],
    individualCharacter : {},
    individualPlanet : {},
    individualVehicle : {},
    homeworld: '',
    species: '',
}


let reducer = (state = initialState, actions) => {
    let { type, characters, character, homeworld, planets, species, planet , people, vehicles, vehicle} = actions

    switch (type) {
        case "GET_CHARACTERS":
            return{
                ...state,
                characters : characters
                
                
            }
        
        case "LOAD_CHARACTER" : 
            return{
                ...state,
                individualCharacter : character
            }

        case "LOAD_HOMEWORLD":
            return {
                //something
            }

        case "LOAD_HOMEWORLD_NAME" :
            return {
                ...state,
                homeworld: homeworld
            }

        case "LOAD_SPECIES_NAME" :
        return {
            ...state,
            species : species
        }

        case "GET_PLANETS" :
            return {
                ...state,
                planets : planets
            }
        
        case "LOAD_PLANET":
            return{
                ...state,
                individualPlanet : planet
            }
        case "LOAD_PEOPLE" :
            return{
                ...state,
                people : people
            }

        case "LOAD_VEHICLES" :
            return{
                ...state,
                vehicles : vehicles
            }

        case "GET_VEHICLE" : 
        return{
            ...state,
            individualVehicle : vehicle
        }
        default:
        return {
            ...state
          };
    }
}

export default reducer;