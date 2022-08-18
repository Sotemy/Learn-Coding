import React from 'react'
import { useParams } from "react-router-dom";
import { Container, Breadcrumb, Card, Spinner } from "react-bootstrap";
import parse from 'html-react-parser';

import { useGetData } from '../hooks/useData'
import { LinkContainer } from 'react-router-bootstrap';


export const Lesson = () => {

    const param = useParams();
    const data = useGetData(`http://localhost:4000/${param.title}/${param.lesson}`)

    return (

        data.length === 0 ? (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        ) : (
            <Container>
<Breadcrumb>

<LinkContainer to={`/`}>
    <Breadcrumb.Item>
        Home
    </Breadcrumb.Item>
</LinkContainer>

<LinkContainer to={`/${data.topic}/${data.title}`}>
    <Breadcrumb.Item active>
        {data.title}
    </Breadcrumb.Item>
</LinkContainer>

</Breadcrumb>

<Card>
    <Card.Header>{data.title}</Card.Header>
    <Card.Body>
        <Card.Text >
        {parse(data.text)}
        </Card.Text>
    </Card.Body>
</Card>

</Container>
        )

    )
}