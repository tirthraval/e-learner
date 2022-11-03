import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CgProfile} from 'react-icons/cg';

const Header =  () =>{
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Nav >
                    <img src ="./img/logo.png" style={{ width:"50px", marginLeft:"5px"}} alt ="logo"></img>
                </Nav>
                <Navbar.Brand href="#home" style={{ marginLeft:"5px"}}>E-Lerener</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About us</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="profile"><CgProfile/></Nav.Link>  
                    </Nav>
                </Container>
            </Navbar>
      
    </>

    );

}

export default Header;



