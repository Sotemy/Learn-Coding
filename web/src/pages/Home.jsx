import React from 'react'
import { Container } from 'react-bootstrap'

import { TopicItems } from '../components/TopicItems';
import { useGetData } from '../hooks/useData';


export const Home = () => {

  const data = useGetData(process.env.REACT_APP_API_URL)
  console.log(process.env, process.env.REACT_APP_API_URL)

  return (
    <Container className="main_page">
      <TopicItems data = {data} />
    </Container>
  )
}