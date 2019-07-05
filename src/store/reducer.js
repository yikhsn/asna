import * as actionTypes from './actionTypes';

const initialState = {
    user: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
    }
}

export default reducer;