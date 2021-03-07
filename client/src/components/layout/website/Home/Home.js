import React from 'react';
import Promotion from '../promotion/Promotion';
import About from '../about/About';
import Services from '../services/Service';
import Marquee from '../marquee/Marquee';
import Map from '../map/Map';
import Contact from '../contact/Contact';
import Slogan from '../slogan/Slogan';

const Home = () => {
	return (
		<>
			<Promotion />
			<About />
			<Services />
			<Marquee />
			<Contact />
			<Slogan />
			<Map />
		</>
	);
};

export default Home;
