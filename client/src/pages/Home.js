import React from 'react';
import { useQuery } from '@apollo/client';
import Nav from '../components/Nav'
import NavBar from '../components/Navbar'

import NewsList from '../components/NewsList';

// import { QUERY_NEWS } from '../utils/queries';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_NEWS);
//   const news = data?.news || [];
const news = []
  return (
    <>
    <NavBar> </NavBar>
      <container>
    <main>
        
      {/* <div >
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <NewsList
              news={news.latest}
            />
          )}
        </div>
      </div> */}
    </main>
  </container>
  </>
  );
};

export default Home;



