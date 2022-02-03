import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './../components/Header';
import Main from '../components/Main';

const Index = ({handleChange, state, handleSubmit}) => (
    <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route  path='/' element={<Main  handleChange={handleChange} handleSubmit={handleSubmit} state={state} />} />
        </Routes>
    </BrowserRouter>
);

export default Index;
