import React from 'react';
import { useQuery } from '@apollo/client';
import Nav from '../components/Nav'

import NewsList from '../components/NewsList';

import { QUERY_NEWS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_NEWS);
  const news = data?.news || [];

  return (
      <>
      <Nav> </Nav>
    <main>
        
      <div className="flex-row justify-center">
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <NewsList
              news={news}
            />
          )}
        </div>
      </div>
    </main>
  </>
  );
};

export default Home;



