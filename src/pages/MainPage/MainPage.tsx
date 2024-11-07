import { Link } from 'react-router-dom';

import styles from './MainPage.module.scss';

import panorama from '../../assets/img/Panorama.png';
import panoramaCard from '../../assets/img/Panorama-card.png';
import panoramaCardMobile from '../../assets/img/Panorama-card-mobile.png';

export const MainPage = () => {
	return (
		<>
			<main>
				<div className={styles.content}>
					<h1>Главная</h1>
					<Link to='https://www.utorrent.com/intl/ru/downloads/win/'>
						<img src={panorama} alt='Панорама' className={styles.panorama} />
					</Link>
					<div className={styles.panorama_card_div}>
						<img src={panoramaCard} alt='Панорама' className={styles.panorama_card} />
						<img src={panoramaCardMobile} alt='Панорама' className={styles.panorama_card_mobile} />
						<Link to='/card.html' className={styles.button_main}>
							Оформить карту
						</Link>
					</div>
					<h1 className={styles.h2}>ЛЮБЛЮ ТЕБЯ НАДЯ!❤️</h1>
				</div>
			</main>
		</>
	);
};
