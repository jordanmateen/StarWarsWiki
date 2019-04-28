import IndividualVehicle from '../components/IndividualVehicle'
import { connect } from  'react-redux'

const mapStateToProps = (state) =>{
    return{
        individualVehicle : state.individualVehicle,
        people :state.people
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        loadVehicle : (vehicle)=>dispatch({type: "GET_STARSHIP", vehicle: vehicle}),
        loadPeople : (people) =>dispatch({type: "LOAD_PEOPLE", people: people})
    }
        
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndividualVehicle)