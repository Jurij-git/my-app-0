import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}



export const initializedSuccess = () =>{
    return {
        type: INITIALIZED_SUCCESS
    }
}

//thunk
export const initializeApp = () => (dispatch) => {
    //get promise here to make sure dispatch finished
    let promise = dispatch(getAuthUserData());
    //forall promises
    Promise.all([promise])
        .then(()=>{
            dispatch(initializedSuccess());
        });


}

export default appReducer;