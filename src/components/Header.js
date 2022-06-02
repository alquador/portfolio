import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: 'black',
    textDecoration: 'none',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontFamily: 'Chalkboard',
}

const backgroundStyle = {
	marginLeft: '2em',
}

const headerOptions = (
	<>
		<Nav.Item className="m-4" >
			<Link to='/about' style={linkStyle}>
				About
			</Link>
		</Nav.Item>
		<Nav.Item className="m-4">
			<Link to='/projects' style={linkStyle}>
				Work
			</Link>
		</Nav.Item>
		<Nav.Item className="m-4">	
			<a target="_blank" rel="noopener noreferrer" href='https://github.com/alquador' style={linkStyle}>
				github
			</a>
		</Nav.Item>
		<Nav.Item className="m-4">
		<a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/allisonquador' style={linkStyle}>
				LinkedIn
			</a>
		</Nav.Item>
		
	</>
)

const Header = () => (

	<Navbar header-color expand='md' className='header-color' style={backgroundStyle}>
		<Navbar.Brand>
			<Link to='/' style={linkStyle}>
				<h2>Home</h2>
	 		</Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto' style={{marginLeft: "2em"}}>
				{headerOptions}
			</Nav>	
		</Navbar.Collapse>
	</Navbar>
)

export default Header