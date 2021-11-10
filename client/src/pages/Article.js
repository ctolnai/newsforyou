import React, { useEffect } from 'react';
import { Card, Button} from 'react-bootstrap/';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ARTICLE } from '../utils/queries';

import NavBar from '../components/Navbar'
import Header from '../components/Header'
import CommentForm from '../components/CommentForm'
import CommentDisplay from '../components/CommentDisplay'




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
                    {/* <Card.Img variant="top" src={article.thumbnail}  width="200" height="200"/> */}
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>
                            {article.article_body}
                        </Card.Text>
                        {/* <Button variant="primary">View Full Article</Button> */}
                    </Card.Body>
                </Card>                      
                <CommentForm articleId={article._id}/>
                <CommentDisplay comments={article.comments}/>
                
            </div>
            

    )
}

export default Article;