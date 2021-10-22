import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap/';
import { useQuery } from '@apollo/client';
import { QUERY_ARTICLES_CATEGORY } from '../utils/queries';

function LatestNews() {
    useEffect(() => {
        console.log(articles)
    })

    const { loading, data } = useQuery(QUERY_ARTICLES_CATEGORY, {
        // pass URL parameter
        variables: { articleCategory: "Latest News" },
    });

    const articles = data?.articleByCategory || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Card style={{ width: '18rem', height: 'auto', justifyContent: 'center', margin: '15px'}}>
                <Card.Body className = "newscard">LATEST NEWS</Card.Body>
            </Card>
            {articles.map(article => (
                <Card style={{ width: '18rem', height: 'auto', justifyContent: 'center', margin: '15px' }}>
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
    )
}

export default LatestNews;