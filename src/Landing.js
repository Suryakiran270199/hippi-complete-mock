import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';

function Landing() {
    return (
        <div className="landing">
            <div className="navbar">
                <Navbar bg="light" variant="light">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="signin.html" style={{marginLeft:"1300px"}} >SignOut</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <h1 style={{textAlign:"center",marginTop:"300px",color:"orange"}}>Landing Screen</h1>
        </div>
    )
}

export default Landing;
