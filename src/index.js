import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import JobApplicationReducer from './Components/JobApplicationReducer';


const loadState = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if(serializedState === null){
            return undefined
        }
        return JSON.parse(serializedState);
    } catch(error){
        return undefined;
    }
};


const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState)
    } catch(error){
        return undefined
    }
};

const preloadedState = loadState()

const store = configureStore({
    reducer: {
        jobs: JobApplicationReducer
    }, 
    preloadedState: preloadedState   
});

store.subscribe(()=>{
    saveState(store.getState())
})



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);