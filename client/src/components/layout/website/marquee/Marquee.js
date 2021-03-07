import React from 'react';
import '../../../../styles/main.scss';
import Apple from '../../../../img/apple.png';
import Samsung from '../../../../img/samsung.png';
import Oppo from '../../../../img/oppo.png';
import Xiaomi from '../../../../img/xiaomi.png';
import Huawei from '../../../../img/huawei.png';
import Hp from '../../../../img/hp.png';
import Lenovo from '../../../../img/lenovo.png';
import Dell from '../../../../img/dell.png';
import Casper from '../../../../img/casper.png';
import Acer from '../../../../img/acer.png';

const Marquee = () => {
	return (
		<section id='brand' class='section-brand'>
			<div class='container'>
				<h1 class='section-brand-title'>Hizmet Verilen Markalar</h1>
				<div class='marquee-brand'>
					<marquee behavior='scroll' direction='left' scrollamount='7'>
						<img src={Apple} alt='' className='marquee-img' />
						<img src={Samsung} alt='' className='marquee-img' />
						<img src={Huawei} alt='' className='marquee-img' />
						<img src={Xiaomi} alt='' className='marquee-img' />
						<img src={Oppo} alt='' className='marquee-img' />
						<img src={Hp} alt='' className='marquee-img' />
						<img src={Lenovo} alt='' className='marquee-img' />
						<img src={Casper} alt='' className='marquee-img' />
						<img src={Dell} alt='' className='marquee-img' />
						<img src={Acer} alt='' className='marquee-img' />
					</marquee>
				</div>
			</div>
		</section>
	);
};

export default Marquee;
