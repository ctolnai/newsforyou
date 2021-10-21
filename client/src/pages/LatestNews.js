import React, { useEffect } from 'react';
import { Card, Button} from 'react-bootstrap/';
import { useQuery } from '@apollo/client';
import { QUERY_ARTICLES_CATEGORY_NO_LIMIT } from '../utils/queries';

import NavBar from '../components/Navbar'
import Header from '../components/Header'

function LatestNews() {
    useEffect(() => {
        console.log(articles)
    })

    const { loading, data } = useQuery(QUERY_ARTICLES_CATEGORY_NO_LIMIT, {
        // pass URL parameter
        variables: { articleCategory: "Latest News" },
    });

    const articles = data?.articleByCategory || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavBar />
            <Header />
           
            <Card style={{ width: '18rem', height: 'auto', justifyContent: 'center', margin: '15px', display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                <Card.Body style={{ backgroundColor: 'red' }}>Latest News</Card.Body>
            </Card> 
            <div style={{justifyContent: 'center', margin: '15px', display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            {articles.map(article => (
                <Card style={{ width: '18rem', height: 'auto', justifyContent: 'space-between', margin: '15px'}}>
                    <Card.Img variant="top" src={article.thumbnail} />
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>
                            {article.description}
                        </Card.Text>
                        <Button variant="primary">View Full Article</Button>
                    </Card.Body>
                </Card>
                
            ))
            }
            </div>
        </div>
    )
}

export default LatestNews;