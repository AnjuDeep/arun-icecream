import React, { useState,useEffect } from 'react'
import { Container,Card} from 'react-bootstrap'

const IBarMiniFlav = () => {
    const [ibarminis,setPosts] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/ibarmini/')
        .then((response) => response.json())
        .then(ibarminis => setPosts(ibarminis));
    },[])

   
  return( 
  <div>
      <Container>
      <h1 className='bg-dark text-white text-center'>IBARMINI FLAVOURS</h1>
      {ibarminis.map((ibarmini)=>(
        <div className='d-inline-flex' style={{ textAlign: 'center'}} key={ibarmini.id}>
        <Card className="shadow p-3 mb-3 bg-body-tertiary rounded" style={{ width: '23.2rem'}}>
        <Card.Img variant="top" src={ibarmini.ibarmini_image} />
        <Card.Body>
          <Card.Title>{ibarmini.title}</Card.Title>
          <Card.Text>
            {ibarmini.description}
          </Card.Text>
          <h5>Price: ₹ {ibarmini.price}</h5>
        </Card.Body>
        </Card>
        </div>
      ))}
      </Container>
    </div>
  )

}

export default IBarMiniFlav