export const initialState = {
    isStateTrue: false,
    };
    
export const actionTypes = {
    SET_TRUE: 'SET_TRUE',
    SET_FALSE: 'SET_FALSE',
};

export const stateReducer = (state, action) => {
    switch (action.type) {
    case actionTypes.SET_TRUE:
        return { ...state, isStateTrue: true };
    case actionTypes.SET_FALSE:
        return { ...state, isStateTrue: false };
    default:
        return state;
    }
};