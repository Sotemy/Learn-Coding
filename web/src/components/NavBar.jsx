import React from 'react'
import { Container, Navbar } from "react-bootstrap"

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            LearnCode
        </Navbar.Brand>
        </Container>
    </Navbar>
  )
}
