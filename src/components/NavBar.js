import React, { useContext} from 'react'
import {Context} from '../index';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {observer} from 'mobx-react-lite'
import Container from 'react-bootstrap/Container';

const NavBar = observer( () => {
    const {user} = useContext(Context);
    return (
        <div>
        <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Text></Navbar.Text>
            {user.isAuth ? 
            <Nav className='ml-auto' style={{color: 'white'}}>
                <Button variant={'outline-light'}>Control panel</Button>
                <Button variant={'outline-light'} style={{marginLeft: 5}}>Exit</Button>
            </Nav>
        :
            <Nav className='ml-auto' style={{color: 'white'}}>
                <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Authorization</Button>
                <Button variant={'outline-light'} style={{marginLeft: 5}}>Registration</Button>
            </Nav>}
        </Container>
        </Navbar>
    </div>
    )
})

export default NavBar