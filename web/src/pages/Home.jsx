import React from 'react'
import { Container } from 'react-bootstrap'

import { TopicItems } from '../components/TopicItems';
import { useGetData } from '../hooks/useData';


export const Home = () => {

  const data = useGetData('http://localhost:4000/')

  return (
    <Container className="main_page">
      <TopicItems data = {data} />
    </Container>
  )
}