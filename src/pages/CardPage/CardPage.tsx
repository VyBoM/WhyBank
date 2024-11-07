import styles from './CardPage.module.scss';
import { Cardswiper } from '../../components/Swiper';

export const CardPage = () => {
	return (
		<>
			<main>
				<div className={styles.content}>
					<h1 className={styles.h1}>Выбери карту для своего бизнеса</h1>
					<div className={styles.swiper_media}>
						<Cardswiper />
					</div>
					<div className={styles.attention_text}>
						<span>Для оформления карты, прийдите по адресу: Тихоокеанская улица, 139А</span>
					</div>
					<div className={styles.description}>
						<span className={styles.description_title}>Описание карт:</span>
						<ul className={styles.description_card_list}>
							<li>KRIPTO- Карта предназначена для покупки криптовалюты и обмена с другими пользователями</li>
							<li>METAL- Карта предназначена для покупки металлов и отслеживания их хранения</li>
							<li>LUXURY- Карта предназначена для скрытых манипуляциях с деньгами</li>
						</ul>
					</div>
				</div>
			</main>
		</>
	);
};
