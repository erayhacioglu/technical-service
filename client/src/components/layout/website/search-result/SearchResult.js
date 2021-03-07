import React from 'react';
import '../../../../styles/main.scss';

const SearchResult = () => {
	return (
		<section>
			<div className='container'>
				<div className='search-result'>
					<div className='search-result-detail'>
						<div className='search-result-detail-field'>
							<span>Kayıt No:</span>&nbsp;<p>253697402395</p>
						</div>
						<div className='search-result-detail-field'>
							<span>Ad Soyad:</span>&nbsp;<p>Eray Hacıoğlu</p>
						</div>
						<div className='search-result-detail-field'>
							<span>Marka-Model:</span>&nbsp;<p>Apple İphone 6s</p>
						</div>
						<div className='search-result-detail-field'>
							<span>İmei No:</span>&nbsp;<p>253697dzfdg402395adfsdf44 4</p>
						</div>
						<div className='search-result-detail-field'>
							<span>Arıza:</span>&nbsp;<p>Telefon ekran değişimi</p>
						</div>
					</div>
					<div className='search-result-status'>
						<span className='status status-red'>Devam Ediyor</span>
						<span className='status status-green'>Tamamlandı</span>
						<button className='download-btn fas fa-download'></button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SearchResult;
