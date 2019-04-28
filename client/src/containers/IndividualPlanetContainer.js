import IndividualPlanet from '../components/IndividualPlanet'
import { connect } from 'react-redux'


const mapStateToProps = (state) =>{
    return {
        individualPlanet : state.individualPlanet,
        people : state.people
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        loadPlanetInfo : (planet)=> dispatch({type: "LOAD_PLANET", planet : planet}),
        loadPeople : (people)=> dispatch({type: "LOAD_PEOPLE", people: people})
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndividualPlanet)