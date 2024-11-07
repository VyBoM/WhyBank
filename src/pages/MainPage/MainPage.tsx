import { Link } from 'react-router-dom';

import styles from './MainPage.module.scss';

export const MainPage = () => {
	return (
		<>
			<main>
				<div className={styles.content}>
					<h1>Главная</h1>
					<Link to='https://www.utorrent.com/intl/ru/downloads/win/'>
						<img src='src\assets\img\Panorama.png' alt='Панорама' className={styles.panorama} />
					</Link>
					<div className={styles.panorama_card}>
						<Link to='/card.html' className={styles.button_main}>
							Оформить карту
						</Link>
					</div>
					<h1 className={styles.h2}>С нашей картой ты не пропадешь</h1>
				</div>
			</main>
		</>
	);
};
