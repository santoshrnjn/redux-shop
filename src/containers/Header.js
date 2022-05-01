import { Container, Navbar, FormControl, Dropdown, Badge, Nav } from 'react-bootstrap'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const state = useSelector((state) => state.handleCart)
    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Nav >
                    <Link to='/profile'>
                        <FaUserCircle color="white" fontSize="25" />
                    </Link>
                </Nav>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle>
                            <FaShoppingCart color="white" fontSize="25" />
                            <Badge>{state.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 300 }}>
                            <span style={{ padding: 10 }}>Cart is Empty!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;