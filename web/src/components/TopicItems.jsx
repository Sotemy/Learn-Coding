import React from 'react'
import { Accordion, ListGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { useSpinner } from '../hooks/useSpinner';

export const TopicItems = ({ data }) => {

    const spin = useSpinner(data)
    return (
        <div>
            {spin}
            <Accordion flush>
                {data.map(obj => (
                    <Accordion.Item eventKey={obj._id} key={obj._id}>

                        <Accordion.Header>
                            <h3>{obj.title}</h3>
                        </Accordion.Header>

                        <Accordion.Body>

                            <ListGroup variant="flush">

                                {obj.lessons.map(lesson => (

                                    <LinkContainer to={`/${obj.title}/${lesson.title}`} key={lesson._id}>
                                        <ListGroup.Item>{lesson.title}</ListGroup.Item>
                                    </LinkContainer>

                                ))}

                            </ListGroup>

                        </Accordion.Body>

                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    )
}

