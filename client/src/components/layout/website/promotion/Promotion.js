import React from 'react';
import '../../../../styles/main.scss';
import PromotionLogo from '../../../../img/promotion.png';

const Promotion = () => {
	return (
		<section id='pro-section'>
			<div className='container'>
				<div className='promotion'>
					<div className='pro-left'>
						<h1 className='pro-left-title'>Ücretsiz Teklif Al</h1>
						<p className='pro-left-p'>
							Cihaz durumunuzu belirtin ve anında, ücretsiz teklif alın.
						</p>
						<a href='#' className='teklif-btn'>
							Teklif Al
						</a>
					</div>
					<div class='pro-right'>
						<img src={PromotionLogo} alt='' className='pro-right-img' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Promotion;
