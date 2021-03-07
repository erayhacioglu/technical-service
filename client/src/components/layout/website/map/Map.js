import React from 'react';
import '../../../../styles/main.scss';

const Map = () => {
	return (
		<section className='map-section'>
			<div className='container'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.849332029258!2d28.97633692723135!3d41.03701760405418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBHw7xtw7zFn3N1eXUsIDM0NDM1IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1614819239256!5m2!1str!2str'
					style={{ border: 0 }}
					height='300px'
					allowfullscreen=''
					loading='lazy'
				></iframe>
			</div>
		</section>
	);
};

export default Map;
