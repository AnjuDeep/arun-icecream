import React from 'react'
import './contactFormStyle.css'
import { Button,Form } from 'react-bootstrap'
import API from 'API'

const ContactForm = () => {
  return (
    <>
    <h3 className='contactSub'>Any Other</h3>
    <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="mt-2" />
        <Form.Control type="email" placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2"/>
        <Form.Control type="number" placeholder="Phone Number" value={phno} onChange={(e) => setPhno(e.target.value)} className="mt-2"/>
        <Form.Control
          as="textarea" className="mt-2"
          placeholder="Leave a comment here"
          value={message} onChange={(e) => setMessage(e.target.value)}
          style={{ height: '120px' }}
        />
        <Form.Text className="text-muted">
          We'll never share your email/phone number with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={onSubmit} type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default ContactForm