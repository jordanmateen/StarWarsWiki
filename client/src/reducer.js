let initialState = {
    characters : [],
    vehicles : [],
    planets: [],
    people :[],
    individualCharacter : {},
    individualPlanet : {},
    individualVehicle : {},
    homeworld: '',
    species: '',

    tags : [
        {id : 1, content : 'Tag Item'},
        {id : 2, content : 'Jedi'}
    ]
}


let reducer = (state = initialState, actions) => {
    let { type, characters, character, homeworld, planets, species, planet , people, vehicles, vehicle, tags, newTags} = actions

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

        case "ADD_TAG":
        return{
            ...state,
            tags : tags
        }

        case "REMOVE_TAG":
        return{
            ...state,
            tags : newTags
        }
        default:
        return {
            ...state
          };
    }
}

export default reducer;