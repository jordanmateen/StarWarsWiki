let initialState = {
    characters : [
        {
            name:"Retriving Data...",
            birth_year : "getting data...",
            gender : "getting data..."
        }],
    residents : [],
    planets: [],
    individualCharacter : {},
    individualPlanet : {},
    homeworld: '',
    species: '',
    people :[]
    
}


let reducer = (state = initialState, actions) => {
    let { type, characters, character, homeworld, planets, species, planet , residents} = actions

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
            people : residents
        }

        default:
        return {
            ...state
          };
    }
}

export default reducer;