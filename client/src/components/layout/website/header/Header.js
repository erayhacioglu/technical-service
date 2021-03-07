import React, { useState } from 'react';
import '../../../../styles/main.scss';
import { Link } from 'react-router-dom';
import Logo from '../../../../img/logo.jpeg';

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<nav className='nav' id='navbar'>
					<div className='hamburger'>
						<button type='button' className='nav-btn fas fa-bars'></button>
					</div>
					<div className='logo' id='logo'>
						<a href='/'>
							<img src={Logo} alt='logo' className='logo-img' />
						</a>
					</div>
					<ul className='nav-links'>
						<li>
							<a href='http://localhost:3000/#about' className='nav-link'>
								Hakkımızda
							</a>
						</li>
						<li>
							<a href='http://localhost:3000/#service' className='nav-link'>
								Hizmetlerimiz
							</a>
						</li>
						<li>
							<a href='http://localhost:3000/#brand' className='nav-link'>
								Markalar
							</a>
						</li>
						<li>
							<a href='http://localhost:3000/#contact' className='nav-link'>
								İletişim
							</a>
						</li>
					</ul>
					<div className='btn'>
						<Link to='/arama' className='search-btn'>
							Arıza Takip
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
