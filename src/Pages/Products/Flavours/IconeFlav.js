import React, { useState,useEffect } from 'react'
import { Container,Card} from 'react-bootstrap'

const IconeFlav = () => {
    const [icones,setPosts] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/icone/')
        .then((response) => response.json())
        .then(icones => setPosts(icones));
    },[])

   
  return( 
  <div>
      <Container>
      <h1 className='bg-dark text-white text-center'>ICONE FLAVOURS</h1>
      {icones.map((icone)=>(
        <div className='d-inline-flex' style={{ textAlign: 'center'}} key={icone.id}>
        <Card className="shadow p-3 mb-3 bg-body-tertiary rounded" style={{ width: '23.2rem', height:'24rem'}}>
        <Card.Img variant="top" src={icone.icone_image} />
        <Card.Body>
          <Card.Title>{icone.title}</Card.Title>
          <Card.Text>
            {icone.description}
          </Card.Text>
          <h5>Price: ₹ {icone.price}</h5>
        </Card.Body>
        </Card>
        </div>
      ))}
      </Container>
    </div>
  )

}

export default IconeFlav