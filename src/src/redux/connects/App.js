import { connect } from 'react-redux';
import { addToList, removeFromList, addToInProgress, addToAbandon, addToDone } from '../actions/products';
import App from '../../App'

const mapStateToProps = ( state ) => ({
    list: state.list,
    inProgress: state.inProgress,    
    abandon: state.abandon,    
    done: state.done    
  });

const mapDispatchToProps = (dispatch) => ({    
    addToList: (work) => dispatch(addToList(work)),
    removeFromList: (listId) => dispatch(removeFromList(listId)),
    addToInProgress: (listId) => dispatch(addToInProgress(listId)),
    addToAbandon: (listId) => dispatch(addToAbandon(listId)),
    addToDone: (listId) => dispatch(addToDone(listId)),    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(App);