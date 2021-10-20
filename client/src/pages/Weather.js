import React from 'react';
import { useQuery } from '@apollo/client';
import Nav from '../components/Nav'

import NewsList from '../components/NewsList';

// import { QUERY_WEATHER } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_NEWS);
  const news = data?.news || [];

  return (
      <>
      <Nav> </Nav>
    <main>
        
      <div className>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <NewsList
              news={news.latest}
            />
          )}
        </div>
      </div>
    </main>
  </>
  );
};

export default Home;



