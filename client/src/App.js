import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/website/footer/Footer';
import Header from './components/layout/website/header/Header';
import Home from './components/layout/website/Home/Home';
import Search from './components/layout/website/search/Search';
import NotFoundPage from './components/layout/website/notfound/NotFoundPage';
import './styles/main.scss';

const App = () => {
	return (
		<div id='wrapper'>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/arama' component={Search} />
					<Route component={NotFoundPage} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
