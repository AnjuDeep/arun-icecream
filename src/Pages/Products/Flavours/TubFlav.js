import React, { useState,useEffect } from 'react'
import { Container,Card} from 'react-bootstrap'

const TubFlav = () => {
    const [tubs,setPosts] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/tubs/')
        .then((response) => response.json())
        .then(tubs => setPosts(tubs));
    },[])

   
  return( 
  <div>
      <Container>
      <h1 className='bg-dark text-white text-center'>TUBS FLAVOURS</h1>
      {tubs.map((tub)=>(
        <div className='d-inline-flex' style={{ textAlign: 'center'}} key={tub.id}>
        <Card className="shadow p-3 mb-3 bg-body-tertiary rounded" style={{ width: '23.2rem', height:'24rem'}}>
        <Card.Img variant="top" src={tub.tub_image} />
        <Card.Body>
          <Card.Title>{tub.title}</Card.Title>
          <Card.Text>
            {tub.description}
          </Card.Text>
          <h5>Price: ₹ {tub.price}</h5>
        </Card.Body>
        </Card>
        </div>
      ))}
      </Container>
    </div>
  )

}

export default TubFlav