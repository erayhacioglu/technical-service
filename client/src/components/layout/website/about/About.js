import React from 'react';
import '../../../../styles/main.scss';

const About = () => {
	return (
		<section id='about' className='about-section'>
			<div className='container'>
				<div className='about'>
					<h1 className='about-title'>Hakkımızda</h1>
					<div className='about-content'>
						<p className='about-content-bold'>
							KVK Teknik Servis (KVK TS) ; 14 servis noktası, 500'e yakın
							tecrübeli personeli, yılda bir milyona yakın cihaz onarım hacmi
							ile Türkiye'de GSM akıllı cep telefon, tablet, modem gibi
							teknoloji ürünleri servis onarım pazarının öncülerindendir.
						</p>
						<p className='about-content'>
							Yüksek kaliteli hizmeti ve müşteri memnuniyetini birinci önceliği
							haline getirmiş olan KVK TS, bu anlamda gerekli tüm yatırım ve
							bilgi birikimine sahiptir. Tüm üreticilerin prosedürlerine uygun
							hizmet sağlayan esnek ve gelişmiş kalite yönetim sistemi ile mobil
							cihazlar tamir servis işinin tüm gerekliliklerini fazlası ile
							yerine getirmiştir.
						</p>
						<p className='about-content'>
							KVK Teknik Servis'in en önemli kaynağı çalışanlarıdır. En yeni
							teknolojileri ve müşteri hizmetleri gerekliliklerini yakınen takip
							etmekte olan şirketimiz pratik ve yaratıcı çözümler üretmektedir.
						</p>
						<p className='about-content'>
							Vizyonumuz: “Her geçen yıl bir önceki yıldan daha çok, bağlılığı
							yüksek yeni müşteriler yaratmak, daima daha iyiyi ve ilkleri
							sunarak...”
						</p>
						<p className='about-content'>
							Tüm taahhütlerini gerçekleştirmek adına KVK TS; Kalite Yönetim
							Sistemi ISO 9001, Müşteri Memnuniyeti Yönetim Sistemi ISO 10002,
							Çevre Yönetim Sistemi ISO 14001 ve İşçi Sağlığı ve İş Güvenliği
							ISO 18001 sertifikalarını American Global Standards’tan
							edinmiştir.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
