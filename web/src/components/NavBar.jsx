import React from 'react'
import { Container, Navbar } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              LearnCode
            </Navbar.Brand>
          </LinkContainer>
        </Container>
    </Navbar>
  )
}
