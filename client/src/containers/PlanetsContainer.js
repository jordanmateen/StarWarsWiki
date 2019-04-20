import Planets from '../components/Planets'
import { connect } from 'react-redux'


const mapStateToProps =(state)=>{
    return {
        planets : state.planets
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        loadPlanets : (planets)=> dispatch({type: "GET_PLANETS", planets: planets})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Planets)