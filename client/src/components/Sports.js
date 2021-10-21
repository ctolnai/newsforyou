import React, {useEffect} from 'react';
import { Card, Button } from 'react-bootstrap/';
import { useQuery } from '@apollo/client';
import { QUERY_ARTICLES_CATEGORY } from '../utils/queries';

function Sports() {
    useEffect(()=>{
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
            {articles.map(article => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={article.thumbnail} />
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>
                            {article.description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))
            }
        </div>
    )
}

export default Sports;