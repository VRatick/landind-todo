import { connect } from 'react-redux';
import { addToList, removeFromList, addToInProgress, addToAbandon, addToDone } from '../actions/list';
import App from '../../../App'

const mapStateToProps = ( {list} ) => ({
    list: list.plan,
    inProgress: list.inProgress,    
    abandon: list.abandon,    
    done: list.done    
  });

const mapDispatchToProps = (dispatch) => ({    
    addToList: (task) => dispatch(addToList(task)),
    removeFromList: (listId) => dispatch(removeFromList(listId)),
    addToInProgress: (listId) => dispatch(addToInProgress(listId)),
    addToAbandon: (listId) => dispatch(addToAbandon(listId)),
    addToDone: (listId) => dispatch(addToDone(listId)),    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(App);