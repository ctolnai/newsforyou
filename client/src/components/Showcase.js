import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'


const Showcase = ({ news }) => {
  // if (!news.length) {
  //   return <h3>No News</h3>;
  // }

  return (
      <div className="showcaseBody">
        {/* {
          news.map((article) => (
            <div key={article._id} >
              <div>
                <h4>
                  {article.name} <br />
                </h4>
                <p>{ article.body }</p>
                <Link
              
                  to={`/news/${article._id}`}
                >
                </Link>
              </div>
            </div>
          ))} */}
      </div>
  );
};

export default Showcase;
