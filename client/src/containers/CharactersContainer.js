import { connect } from 'react-redux'
import Characters from '../components/Characters'

const mapStateToProps =(state)=>{
    return{
        characters : state.characters,
        pageNumber : state.pageNumber
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        loadCharacters : (characters) => dispatch({type: "GET_CHARACTERS" , characters : characters})
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Characters)