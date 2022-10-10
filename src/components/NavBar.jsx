import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faNotes,faCakeSlice } from '@fortawesome/sharp-solid-svg-icons'


const NavBar = () => {
    return(
        <Navbar bg="danger" variant="light">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className='text-white text-decoration-none mx-2'><FontAwesomeIcon icon={faHouse} style={{fontSize:"1em"}} className="mx-2"/>Home</Link>
            <Link to="/Contacto" className='text-white text-decoration-none mx-2' ><FontAwesomeIcon icon={faNotes} style={{fontSize:"1em"}} className="mx-2" />Contacto</Link>
          </Nav>
          <Navbar.Brand className='text-light'><FontAwesomeIcon icon={faCakeSlice} style={{fontSize:"1em"}} className="mx-2"/>Happy Cake</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default NavBar;