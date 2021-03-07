import React from 'react';
import NotFound from '../../../../img/not-found.svg';

const NotFoundPage = () => {
	return (
		<section class='notpage-section'>
			<div className='container'>
				<h1 style={{ marginBottom: '25px', fontSize: '35px' }}>
					Sayfa Bulunamadı
				</h1>
				<img src={NotFound} alt='not-found' className='notfound-img' />
			</div>
		</section>
	);
};

export default NotFoundPage;
