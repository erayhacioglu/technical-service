import React from 'react';
import '../../../../styles/main.scss';
import { Link } from 'react-router-dom';

const Slogan = () => {
	return (
		<section className='query-section'>
			<div className='container'>
				<div className='query'>
					<p className='query-p'>Cihazınızın arıza durumunu sorgulayın</p>
					<Link to='/arama' className='query-btn'>
						Arıza Sorgula
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Slogan;
