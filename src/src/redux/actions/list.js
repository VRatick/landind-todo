import * as Constants from '../constants/list';

export const addToList = (work) => ({
    type: Constants.ADD_TO_LIST,
    work
});

export const removeFromList = (listId) => ({
    type: Constants.REMOVE_FROM_LIST,
    listId
  });
  
export const addToInProgress = (listId) => ({
    type: Constants.ADD_TO_INPROGRESS,
    listId,
});

export const addToAbandon = (listId) => ({
    type: Constants.ADD_TO_ABANDON,
    listId,
});

export const addToDone = (listId) => ({
    type: Constants.ADD_TO_DONE,
    listId,
});