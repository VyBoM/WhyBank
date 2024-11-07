import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../assets/img/Logo.svg';
import profile from '../../assets/img/Profile.svg';

export const Header = () => {
	return (
		<>
			<header>
				<div className={styles.header_container}>
					<div className={styles.logo}>
						<Link to='/main.html'>
							<img alt='logo' src={logo} />
						</Link>
					</div>
					<div className={styles.nav_list}>
						<Link to='./card.html' className={styles.nav_link}>
							Криптокарты
						</Link>
					</div>
					<Link to='./profile.html' className={styles.profile}>
						<span className={styles.profile_text}>Личный кабинет</span>
						<img src={profile} alt='profile' />
					</Link>
				</div>
			</header>
		</>
	);
};
