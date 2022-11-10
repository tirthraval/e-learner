import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CgProfile} from 'react-icons/cg';
import {FiSettings} from 'react-icons/fi';
import {AiOutlineHistory} from 'react-icons/ai';
import {FaRegCalendarTimes} from 'react-icons/fa';
import {MdLogout} from 'react-icons/md';
//import 'bootstrap/dist/css/bootstrap.min.css';  
import { Dropdown} from 'react-bootstrap';  

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
                   <Dropdown>  
                    <Dropdown.Toggle variant=" primary" id="dropdown-basic">  
                    <Nav.Link><CgProfile/></Nav.Link>
                    </Dropdown.Toggle>  
  
                    <Dropdown.Menu>  
                        <Dropdown.Item href="#/action-1"><FaRegCalendarTimes/>My Appointments</Dropdown.Item>  
                        <Dropdown.Item href="#/action-2"><AiOutlineHistory/>My History</Dropdown.Item>  
                        <Dropdown.Item href="#/action-3"><FiSettings/>Settings</Dropdown.Item>  
                        <Dropdown.Item href="#/action-3"><MdLogout/>Logout</Dropdown.Item>  
                    </Dropdown.Menu>  
                    </Dropdown>  
                    </Nav>
                </Container>
            </Navbar>
      
    </>

    );

}

export default Header;



