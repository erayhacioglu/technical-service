import React from 'react';
import '../../../../styles/main.scss';

const Search = () => {
	return (
		<section>
			<div className='container'>
				<div className='search'>
					<h1 className='search-title'>Cihaz Durumu Sorgulama</h1>
					<form className='search-form'>
						<img
							src='https://img.icons8.com/pastel-glyph/2x/search--v2.png'
							alt=''
							class='icon'
						/>
						<input type='search' placeholder='kayıt no giriniz...' />
					</form>
				</div>
			</div>
		</section>
	);
};

export default Search;
