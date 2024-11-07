import { Link } from 'react-router-dom';

import ok from '../../assets/img/Ok.png';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<>
			<footer>
				<div className={styles.footer_container}>
					<div className={styles.footer}>
						<div className={styles.logo}>
							<img alt='logo' src='src\assets\img\Logo.svg' />
						</div>
						<div className={styles.support}>
							<span className={styles.support_text}>
								Поддержка по России:
								<p className={styles.support_media}>8 (914) 414-50-03</p>
							</span>
							<img src='src\assets\img\Support.png' alt='support' />
						</div>
					</div>
					<p className={styles.cookies}>
						АО «WhyBank» использует файлы «cookie», с целью персонализации сервисов и повышения удобства
						пользования веб-сайтом. «Cookie» представляют собой небольшие файлы, содержащие информацию о предыдущих
						посещениях веб-сайта. Если вы не хотите использовать файлы «cookie», измените настройки браузера.
					</p>

					<div className={styles.line}></div>
					<div className={styles.footer_end}>
						<p className={styles.text_end}>
							© 2024—2024, АО «WhyBank», официальный сайт, универсальная лицензия ЦБ РФ № 7172
						</p>
						<ul className={styles.social}>
							<Link to='https://vk.com/'>
								<img src='src\assets\img\VK.png' alt='Вк' />
							</Link>
							<Link to='https://web.telegram.org/'>
								<img src='src\assets\img\Telegram.png' alt='Телеграм' />
							</Link>
							<Link to='https://ok.ru/'>
								<img src={ok} alt='Одноклассники' />
							</Link>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};
