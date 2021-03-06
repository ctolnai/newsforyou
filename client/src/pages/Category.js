import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap/';
import { useQuery } from '@apollo/client';
import { QUERY_ARTICLES_CATEGORY_NO_LIMIT } from '../utils/queries';
import { Link, useParams  } from 'react-router-dom';

import NavBar from '../components/Navbar'
import Header from '../components/Header'

function Category() {
    useEffect(() => {
    })

    const {category} = useParams();
    
    const { loading, data } = useQuery(QUERY_ARTICLES_CATEGORY_NO_LIMIT, {
        // pass URL parameter
        variables: { articleCategory: category },
    });

    const articles = data?.articleByCategory || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavBar />
            <Header />
            <Card className="mx-auto" style={{ width: '18rem', height: 'auto', justifyContent: 'center', margin: '15px', display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                <Card.Body className='newscard' style={{ backgroundColor: 'red', fontSize: '2rem'  }}>{category}</Card.Body>
            </Card> 
            <div style={{justifyContent: 'center', margin: '15px', display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            {articles.map(article => (
                <Card style={{ width: '18rem', height: 'auto', justifyContent: 'space-between', margin: '15px'}}>
                    <Card.Img variant="top" src={article.thumbnail}  width="200" height="200"/>
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>
                            {article.description}
                        </Card.Text>
                        <Link to={`/article/${article._id}`} variant="primary">View Full Article</Link>
                    </Card.Body>
                </Card>
                
            ))
            }
            </div>
        </div>
    )
}

export default Category;