import React from 'react';

import Banner from './Banner';
import Main from './Main';
import Nav from './Nav';
import { useLoaderData } from 'react-router-dom';
import Footer from './Footer';
const Home = () => {
    const loadData = useLoaderData()
    return (
        <div>
           <Nav></Nav>
            <Banner></Banner>
            <Main coffees={loadData}></Main>
            <Footer></Footer>
        </div>
    );
};

export default Home;