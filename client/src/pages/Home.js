import React from 'react';
import { useQuery } from '@apollo/client';
import NavBar from '../components/Navbar'
import Showcase from '../components/Showcase'
import '../style.css'


import NewsList from '../components/NewsList';

// import { QUERY_NEWS } from '../utils/queries';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_NEWS);
//   const news = data?.news || [];
const news = []
  return (
    <>
    <NavBar> </NavBar>
   <Showcase> </Showcase>
  </>
  );
};

export default Home;



