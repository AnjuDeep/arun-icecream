import React, { useEffect, useState } from 'react'
import { Image,Container,Card,Form,Button } from 'react-bootstrap'
import '../Css/contactStyle.css'
// import ContactForm from '../Component/ContactForm'
import API from './API'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [comment, setComment] = useState("");
  

  useEffect(() => {
    refreshContact();

  }, []);


  const refreshContact = () => {
    API.get("/")
      .then((res) => {
        setName("");
        setEmail("");
        setPhno("");
        setComment("");
      })
      .catch(console.error);

    }; 

   
    const onSubmit = (e) => {
      e.preventDefault();
      let item = { name, email, phno, comment };
      API.post("/", item).then(() => refreshContact());
    };

  return (
    <div>
    <Container>
           
      <h1 className="contactHead">Contact Us</h1>
      <div className="left">
      <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>HATSUN AGRO PRODUCT LTD</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Plot No. 14,</Card.Subtitle>
        <Card.Text>
        Tamil Nadu Housing Board "A" Road,
        Sholinganallur, Chennai - 600 119, India.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Text>
        To learn more about our services and offerings,
        Telephone Number: 044-24501622.
        Fax Number: 044-24501422.
        Mail ID: info@hap.in
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Text>
        For Feedback / Complaints / Contact
        E - mail: customerservice@hap.in
        Call Toll Free: 1800-120-3355
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='right'>
    <h3 className='contactSub'>Any Other</h3>
    <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="mt-2" />
        <Form.Control type="email" placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2"/>
        <Form.Control type="number" placeholder="Phone Number" value={phno} onChange={(e) => setPhno(e.target.value)} className="mt-2"/>
        <Form.Control
          as="textarea" className="mt-2"
          placeholder="Leave a comment here"
          value={comment} onChange={(e) => setComment(e.target.value)}
          style={{ height: '120px' }}
        />
        <Form.Text className="text-muted">
          We'll never share your email/phone number with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="danger" onClick={onSubmit} type="submit">
        Submit
      </Button>
    </Form>

    </div>
    <div className='right'>
      <Image className="contactImage m-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJ2RStLVWZfbcKI9AlmepQGIEccHjonlALw&usqp=CAU"></Image>
    </div>
    
    </Container>
    </div>
  )
}



export default Contact