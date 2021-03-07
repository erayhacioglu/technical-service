import React from 'react';
import '../../../../styles/main.scss';
import Logo from '../../../../img/logo.jpeg';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer id='footer'>
			<div className='container'>
				<div className='footer'>
					<div className='footer-content'>
						<div className='footer-left'>
							<img src={Logo} alt='' className='footer-logo' />
							<p className='footer-p'>Demo Teknik Servis</p>
						</div>
						<div className='footer-mid'>
							<h1 className='footer-title'>Hızlı Linkler</h1>
							<ul className='footer-links'>
								<li>
									<a href='#' className='footer-link'>
										Hakkımızda
									</a>
								</li>
								<li>
									<a href='#' className='footer-link'>
										Hizmetlerimiz
									</a>
								</li>
								<li>
									<a href='#' className='footer-link'>
										Markalar
									</a>
								</li>
								<li>
									<a href='#' className='footer-link'>
										Ücretsiz Teklif
									</a>
								</li>
							</ul>
							<Link to='/arama' className='f-ariza-btn'>
								Arıza Sorgula
							</Link>
						</div>
						<div className='footer-right'>
							<h1 className='footer-right-title'>İletişim</h1>
							<div className='footer-field fas fa-map-marker-alt'>
								&nbsp;&nbsp;Barbaros Mah. Temmuz Sok. No: 6 Atasehir / Istanbul
							</div>
							<div className='footer-field fas fa-phone-alt'>
								&nbsp;&nbsp;(555) 555 5555
							</div>
							<div className='footer-field fas fa-envelope'>
								&nbsp;&nbsp;demo@info.com
							</div>
						</div>
					</div>
					<div className='footer-copyright'>
						<p className='copy'>
							&copy; &nbsp;Demo Teknik Servis | Tüm Hakları Saklıdır
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
