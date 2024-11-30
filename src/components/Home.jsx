import React, { useState } from 'react';

import Banner from './Banner';
import Main from './Main';
import Nav from './Nav';
import { useLoaderData } from 'react-router-dom';
import Footer from './Footer';
const Home = () => {
    const loadData = useLoaderData()
    const [coffees, setCoffees] = useState(loadData)
    console.log(coffees);
    return (
        <div>
    
            <Banner></Banner>
            <Main coffees={loadData} coffeee= {coffees} setCoffees = {setCoffees}></Main>
        
        </div>
    );
};

export default Home;