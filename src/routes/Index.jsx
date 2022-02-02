import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './../components/Header';
import Main from '../components/Main';

const Index = () => (
    <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Main />} />
        </Routes>
    </BrowserRouter>
);

export default Index;
