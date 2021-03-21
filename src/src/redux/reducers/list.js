import {
    ADD_TO_LIST, 
    REMOVE_FROM_LIST, 
    ADD_TO_ABANDON,
    ADD_TO_INPROGRESS,
    ADD_TO_DONE 
} from '../constants/list';

const initialState = {
  list: ['Doing my homework', 'Clean bathroom', 'Go to shop'],    
  inProgress: ['Clean kitchen', 'Go to school'],    
  abandon: ['Playing football'],    
  done: ['Clean my room']    
};

export default (state = initialState, action) => {
  switch (action.type) {      
    case ADD_TO_LIST: {
      const { work } = action;
      const list = state.list;        
      list.push(work);      
      return { ...state, list };
    }
    case REMOVE_FROM_LIST: {
      const { listId } = action;
      const list = state.list;
      list.splice(listId, 1);    
      return { ...state, list };
    }
    case ADD_TO_INPROGRESS: {
        const { listId } = action;
        const list = state.list;   
        const inProgress = state.inProgress     
        const removed = list.splice(listId, 1);
        inProgress.push(removed)
        return { ...state, list, inProgress };
    } 
    case ADD_TO_ABANDON: {
        const { listId } = action;        
        const inProgress = state.inProgress   
        const abandon = state.abandon;     
        const removed = inProgress.splice(listId, 1);
        abandon.push(removed)
        return { ...state, inProgress, abandon };
    }
    case ADD_TO_DONE: {
        const { listId } = action;        
        const inProgress = state.inProgress   
        const done = state.done;     
        const removed = inProgress.splice(listId, 1);
        done.push(removed)
        return { ...state, inProgress, done };
    }             
    default: {
      return state;
    }
  }
};