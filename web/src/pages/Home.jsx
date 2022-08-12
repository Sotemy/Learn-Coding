import React from 'react'
import { Button, Card, Container, Accordion } from 'react-bootstrap'
import { useGetData } from '../hooks/useData'
import CardGroup from 'react-bootstrap/CardGroup';
import { LinkContainer } from 'react-router-bootstrap'


export const Home = () => {

  const data = useGetData('http://localhost:4000/')

  return (
    <Container className="main_page">
      <CardGroup>

        {data.map(obj =>

          <div className="card_main" key={obj._id}>
            <LinkContainer to={obj.title}>
              <Card style={{ width: '18rem' }}>

                <Card.Img variant='top' src={obj.img} />
                <Card.Body>

                  <Card.Title>{obj.title}</Card.Title>

                  <Card.Text>
                    {obj.text}<br></br>
                    {obj.__v} new lessons
                  </Card.Text>

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


// <Container className="main_page">
// <CardGroup>

//   {data.map(obj =>

//     <div className="card_main" key={obj._id}>
//       <LinkContainer to={obj.title}>
//         <Card style={{ width: "10%" }}>

//           <Card.Img variant='top' src={obj.img} />
//           <Card.Body>

//             <Card.Title>{obj.title}</Card.Title>

//             <Card.Text>
//               {obj.text}
//             </Card.Text>

//             <Button variant="primary">Go somewhere</Button>

//           </Card.Body>

//           <Card.Footer>
//             <small className="text-muted">Created at {obj.createdAt}</small>
//           </Card.Footer>

//         </Card>
//       </LinkContainer>
//     </div>

//   )}
// </CardGroup>
// </Container>