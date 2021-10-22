import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap/';
import { useQuery } from '@apollo/client';
import { QUERY_ARTICLES_CATEGORY } from '../utils/queries';
import '../style.css';


function Sports() {
    useEffect(() => {
        console.log(articles)
    })

    const { loading, data } = useQuery(QUERY_ARTICLES_CATEGORY, {
        // pass URL parameter
        variables: { articleCategory: "Sports" },
    });

    const articles = data?.articleByCategory || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Card style={{ width: '18rem', height: 'auto', justifyContent: 'space-evenly', margin: '15px'}} className = "newscardheader">
                <Card.Body className = "newscard">SPORTS</Card.Body>
            </Card>
            {articles.map(article => (
                <Card style={{ width: '18rem', height: 'auto', justifyContent: 'center', margin: '15px' }}>
                    <Card.Img variant="top" src={article.thumbnail}width="200" height="200" />
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
    )
}

export default Sports;