import {
    ADD_TO_LIST, 
    REMOVE_FROM_LIST, 
    ADD_TO_ABANDON,
    ADD_TO_INPROGRESS,
    ADD_TO_DONE 
} from '../constants/list';

const initialState = {
  plan: ['Doing my homework', 'Clean bathroom', 'Go to shop'],    
  inProgress: ['Clean kitchen', 'Go to school'],    
  abandon: ['Playing football'],    
  done: ['Clean my room']    
};

export default (state = initialState, action) => {
  switch (action.type) {      
    case ADD_TO_LIST: {
      const { task } = action;
      const plan = state.plan;        
      plan.push(task);      
      return { ...state, plan };
    }
    case REMOVE_FROM_LIST: {
      const { listId } = action;
      const plan = state.plan;
      plan.splice(listId, 1);    
      return { ...state, plan };
    }
    case ADD_TO_INPROGRESS: {
        const { listId } = action;
        const plan = state.plan;   
        const inProgress = state.inProgress     
        const removed = plan.splice(listId, 1).join('');
        inProgress.push(removed)
        return { ...state, plan, inProgress };
    } 
    case ADD_TO_ABANDON: {
        const { listId } = action;        
        const inProgress = state.inProgress   
        const abandon = state.abandon;     
        const removed = inProgress.splice(listId, 1).join('');
        abandon.push(removed)
        return { ...state, inProgress, abandon };
    }
    case ADD_TO_DONE: {
        const { listId } = action;        
        const inProgress = state.inProgress   
        const done = state.done;     
        const removed = inProgress.splice(listId, 1).join('');
        done.push(removed)
        return { ...state, inProgress, done };
    }             
    default: {
      return state;
    }
  }
};