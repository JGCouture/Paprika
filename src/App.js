import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CityStatePage from './pages/CityStatePage';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/:city/:state" element={<CityStatePage />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App; 

