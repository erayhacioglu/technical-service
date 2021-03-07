import React from 'react';
import '../../../../styles/main.scss';

const Contact = () => {
	return (
		<section id='contact' className='offer-section'>
			<div className='container'>
				<div className='free-offer'>
					<h1 className='free-offer-title'>Ücretsiz Teklif Alın</h1>
					<form className='offer-form'>
						<div className='fields'>
							<label for='ad_soyad'>Ad Soyad</label>
							<input
								type='text'
								id='ad_soyad'
								name='ad_soyad'
								placeholder='ad soyad giriniz...'
							/>
						</div>
						<div className='fields'>
							<label for='tel'>Telefon</label>
							<input
								type='text'
								id='tel'
								name='tel'
								placeholder='telefon numaranızı giriniz...'
							/>
						</div>
						<div className='fields'>
							<label for='ad_soyad'>Arızanız</label>
							<textarea
								name='sorun'
								id=''
								cols=''
								rows=''
								placeholder='cihazınızın arızasını giriniz...'
							></textarea>
						</div>
						<div className='fields'>
							<button type='submit' class='offer-btn'>
								Teklif Al
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
