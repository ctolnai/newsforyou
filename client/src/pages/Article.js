import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap/';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ARTICLE } from '../utils/queries';

import NavBar from '../components/Navbar'
import Header from '../components/Header'



function Article() {

    useEffect(() => {
        console.log(data)
    })

    const {articleId} = useParams();
    

    const { loading, data } = useQuery(QUERY_SINGLE_ARTICLE, {
        // pass URL parameter
        variables: { articleId: articleId },
    });

    const article = data?.articleById || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavBar />
            <Header />
  
                <Card style={{ width: 'auto', height: 'auto', justifyContent: 'space-between', margin: '15px'}}>
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>
                            {article.article_body}
                        </Card.Text>
                    </Card.Body>
                </Card>                      
            </div>

    )
}

export default Article;