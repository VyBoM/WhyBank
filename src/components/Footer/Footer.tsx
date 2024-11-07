import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import logo from '../../assets/img/Logo.svg';
import support from '../../assets/img/Support.png';
import vk from '../../assets/img/VK.png';
import tg from '../../assets/img/Telegram.png';
import ok from '../../assets/img/Ok.png';

export const Footer = () => {
	return (
		<>
			<footer>
				<div className={styles.footer_container}>
					<div className={styles.footer}>
						<div className={styles.logo}>
							<img alt='logo' src={logo} />
						</div>
						<div className={styles.support}>
							<span className={styles.support_text}>
								Поддержка по России:
								<p className={styles.support_media}>8 (914) 414-50-03</p>
							</span>
							<img src={support} alt='support' />
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
								<img src={vk} alt='Вк' />
							</Link>
							<Link to='https://web.telegram.org/'>
								<img src={tg} alt='Телеграм' />
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
