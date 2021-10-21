import React from 'react';
import { useQuery } from '@apollo/client';
import NavBar from '../components/Navbar'
import Showcase from '../components/Showcase'
import Header from '../components/Header'
import '../style.css'



// import { QUERY_NEWS } from '../utils/queries';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_NEWS);
//   const news = data?.news || [];
const news = []
  return (
    <>
    <NavBar/> 
    <Header/>
   <Showcase/>
  </>
  );
};

export default Home;



