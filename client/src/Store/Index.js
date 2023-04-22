import {createStore, applyMiddleware } from 'redux'
import {combineReducers} from "redux"
import thunkMiddleware from "redux-thunk"
import authReducer from './Reducers/authReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension';
import PostReducer from './Reducers/PostReducer';
import fetchReducer from './Reducers/fetchReducer.js';
import updateReducer from './Reducers/updateReducer.js';
import profileReducer from './Reducers/profileReducer.js';
import awardsReducer from "./Reducers/awardsReducer.js"

const rootreducer  = combineReducers(
    {
        authReducer,
        profileReducer,
        fetchReducer,
        PostReducer,
        updateReducer,
        awardsReducer
    }
);


const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;