import React from 'react'
import { useGetData } from '../hooks/useData'
import { useParams } from "react-router-dom";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";

export const Lesson = () => {

    const param = useParams();
    const data = useGetData(`http://localhost:4000/${param.title}/${param.lesson}`)

    return (
        // <Container>
        <Row>
        <Col sm={2}>
        <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
        </Col>
        <Col>
        <Container className="main_page">
                        <Card className="text-center">
                            <Card.Header>{data.createdAt}</Card.Header>
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                    {data.text}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">{data.createdAt}</Card.Footer>
                        </Card>
                    </Container>
        </Col>
        </Row>
        // </Container>
    )
}

// <Container>
// <Row>
// <Col sm={4}>
// <ListGroup variant="flush">
//                 <ListGroup.Item>Cras justo odio</ListGroup.Item>
//                 <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//                 <ListGroup.Item>Morbi leo risus</ListGroup.Item>
//                 <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
//             </ListGroup>
// </Col>
// <Col>
// <Container className="main_page">
//                 <Card className="text-center">
//                     <Card.Header>{data.createdAt}</Card.Header>
//                     <Card.Body>
//                         <Card.Title>{data.title}</Card.Title>
//                         <Card.Text>
//                             {data.text}
//                         </Card.Text>
//                     </Card.Body>
//                     <Card.Footer className="text-muted">{data.createdAt}</Card.Footer>
//                 </Card>
//             </Container>
// </Col>
// </Row>
// </Container>

// <div>
// <ListGroup variant="flush">
//     <ListGroup.Item>Cras justo odio</ListGroup.Item>
//     <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//     <ListGroup.Item>Morbi leo risus</ListGroup.Item>
//     <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
// </ListGroup>
// <Container className="main_page">
//     <Card className="text-center">
//         <Card.Header>{data.createdAt}</Card.Header>
//         <Card.Body>
//             <Card.Title>{data.title}</Card.Title>
//             <Card.Text>
//                 {data.text}
//             </Card.Text>
//         </Card.Body>
//         <Card.Footer className="text-muted">{data.createdAt}</Card.Footer>
//     </Card>
// </Container>

// </div>