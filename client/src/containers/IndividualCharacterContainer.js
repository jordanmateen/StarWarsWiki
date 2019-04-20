import IndividiualChracter from '../components/IndividualCharacter'
import { connect } from  'react-redux'


const mapStateToProps =(state)=>{
    return {
        individualCharacter : state.individualCharacter,
        homeworld : state.homeworld,
        species : state.species
    }
}

const mapDispatchtoProps =(dispatch)=>{
    return{
        loadCharacter : (character) =>dispatch({type: "LOAD_CHARACTER", character: character}),
        loadHomeWorldName : (homeworld) => dispatch ({type : "LOAD_HOMEWORLD_NAME", homeworld : homeworld}),
        loadSpeciesName : (species)=> dispatch({type: "LOAD_SPECIES_NAME", species : species})
    }
}

export default connect( mapStateToProps, mapDispatchtoProps )(IndividiualChracter)