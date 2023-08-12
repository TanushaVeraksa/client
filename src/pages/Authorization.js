import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import {NavLink, useLocation} from 'react-router-dom'
import { REGISTRATION_ROUTE } from '../utils/consts';

function Authorization() {
    const location = useLocation()
    console.log(location)
  return (
    <Container 
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}
    >
        <Card className='p-3' style={{width: '55%'}}>
            <h3 className="m-auto">Autorization</h3>
            <Form className='d-flex flex-column'>
                <Form.Control 
                    className='mt-2'
                    placeholder='Enter email'
                />
                 <Form.Control 
                    className='mt-2'
                    placeholder='Enter name'
                />
                 <Form.Control 
                    className='mt-2'
                    placeholder='Enter password'
                />
                <Row className='d-flex justify-content-around align-items-center mt-2 flex-row'>
                <Button 
                        variant={'outline-secondary'} 
                        className='mt-2'
                        style={{width: "40%", alignItems: "end"}}>
                    <NavLink to={REGISTRATION_ROUTE}
                        style={{width: "50%", alignItems: "end"}}>
                        Registration
                    </NavLink>
                    </Button>
                    
                    <Button 
                        variant={'outline-success'} 
                        className='mt-2'
                        style={{width: "40%", alignItems: "end"}}>
                        Enter
                    </Button>
                </Row>
            </Form>
        </Card>
    </Container>
  )
}

export default Authorization