import React from 'react';
import '../../../../styles/main.scss';
import SearchByPhone from '../../../../img/searching-by-phone.svg';
import Pro from '../../../../img/phone.svg';
import Free from '../../../../img/mechanical-gears.svg';
import Security from '../../../../img/phone-security.svg';
import Software from '../../../../img/programming.svg';
import İnfo from '../../../../img/information.svg';

const Service = () => {
	return (
		<section className='service-section'>
			<a	name="service"></a>
			<h1 className='service-title'>Hizmetlerimiz</h1>
			<div className='container'>
				<div className='services'>
					<div className='service'>
						<div className='service-img'>
							<img src={SearchByPhone} className='service-img-img' alt='' />
						</div>
						<div className='service-title'>
							<h2 className='service-title-h'>Cihaz Takibi</h2>
						</div>
						<div className='service-content'>
							<p className='service-content-p'>
								Teknik servisimizdeki cihazların onarım süreci web sitemizde,
								müşterilerimiz tarafından 7/24 takip edilebilir.
							</p>
						</div>
					</div>
					<div className='service'>
						<div className='service-img'>
							<img src={Pro} alt='' className='service-img-img' />
						</div>
						<div className='service-title'>
							<h2 className='service-title-h'>Profesyonel Onarım</h2>
						</div>
						<div className='service-content'>
							<p className='service-content-p'>
								Cihazlarınız, servisimiz bünyesindeki eğitimli kadromuzla, uzman
								ellerde işlem görür.
							</p>
						</div>
					</div>
					<div className='service'>
						<div className='service-img'>
							<img src={Free} alt='' className='service-img-img' />
						</div>
						<div className='service-title'>
							<h2 className='service-title-h'>Ücretsiz Arıza Tespiti</h2>
						</div>
						<div className='service-content'>
							<p className='service-content-p'>
								Teknik servisimize gelen cihazların arıza tespiti ücretsiz
								olarak yapılır.
							</p>
						</div>
					</div>
					<div className='service'>
						<div className='service-img'>
							<img src={Security} alt='' className='service-img-img' />
						</div>
						<div className='service-title'>
							<h2 className='service-title-h'>Cihaz Güvenliği</h2>
						</div>
						<div className='service-content'>
							<p className='service-content-p'>
								Teknik servisimize gelen cihazlar, özel kutularda muhafaza
								edilerek kamera kaydı altında işlem görür.
							</p>
						</div>
					</div>
					<div className='service'>
						<div className='service-img'>
							<img src={Software} alt='' className='service-img-img' />
						</div>
						<div className='service-title'>
							<h2 className='service-title-h'>Güncel Yazılımlar</h2>
						</div>
						<div className='service-content'>
							<p className='service-content-p'>
								Teknik servisimize teslim edilen cihazlar en güncel yazılımlarla
								desteklenir.{' '}
							</p>
						</div>
					</div>
					<div className='service'>
						<div className='service-img'>
							<img src={İnfo} alt='' className='service-img-img' />
						</div>
						<div className='service-title'>
							<h2 className='service-title-h'>Bilgilendirme</h2>
						</div>
						<div className='service-content'>
							<p className='service-content-p'>
								Teknik servisimizde bulunan cihazların servis durumları SMS,
								e-mail veya telefonla, anlık olarak bildirilir.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Service;
