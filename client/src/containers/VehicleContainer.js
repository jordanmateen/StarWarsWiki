import { connect } from 'react-redux'
import Vehicle from '../components/Vehicle'

const mapStateToProps =(state)=>{
    return {
        vehicles : state.vehicles
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        loadVehicles : (vehicles) => dispatch({type : "LOAD_STARSHIPS", vehicles: vehicles})
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Vehicle)