import React from 'react'
import { useGetData } from '../hooks/useData'
import { useParams  } from "react-router-dom";
import { Container, Card, Button, CardGroup } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

export const Lessons = () => {
    
    const param = useParams();
    const data = useGetData(`http://localhost:4000/${param.title}`)

  return (

    <Container className="main_page">
      <CardGroup>

        {data.map(obj =>

          <div className="card_main" key={obj._id}>
            <LinkContainer to={obj.title}>
              <Card style={{ width: "10%" }}>

                <Card.Body>

                  <Card.Title>{obj.title}</Card.Title>

                  <Button variant="primary">Go somewhere</Button>

                </Card.Body>

                <Card.Footer>
                  <small className="text-muted">Created at {obj.createdAt}</small>
                </Card.Footer>

              </Card>
            </LinkContainer>
          </div>

        )}
      </CardGroup>
    </Container>
  )
}
