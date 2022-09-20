import React, { useRef, useState } from 'react'
import { Button,FormGroup, Form, Row, Col,  Label, Input, Container } from 'reactstrap'

function SubmitPost() {
    //const name = useRef('')
    //const title = useRef('')
    //const body = useRef('')

    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
      console.log(name?.current?.value)
      console.log(title?.current.value)
      console.log(body?.current?.value)
    }

  return (
    <Container >
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Row>

                <Col xs={12} md={6}>
                    <FormGroup>
                        <Label>Name</Label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="enter your name" name="myname"/>
                    </FormGroup>
                </Col>

                <Col xs={12} md={6}>
                    <FormGroup>
                        <Label>title</Label>
                        <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="enter article title" name="title"/>
                    </FormGroup>
                </Col>

                <Col xs={12}>
                    <FormGroup>
                        <Label>Body</Label>
                        <textarea className="form-control"  value={body} onChange={(e) => setBody(e.target.value)} placeholder="enter article description" name="body"/>
                    </FormGroup>
                </Col>

                <Button type='submit' color='primary'>Submit post</Button>
            </Row>
        </Form>
    </Container>
  )
}

export default SubmitPost