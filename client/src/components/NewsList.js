import React from 'react';
import { Link } from 'react-router-dom';

const NewsList = ({ news }) => {
  if (!news.length) {
    return <h3>No News</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {
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
          ))}
      </div>
    </div>
  );
};

export default NewsList;
