import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SubPage from './SubPage';

function App() {
    return (
        <>
            <MainPage />
            <SubPage />
        </>
    );
}

export default App;
