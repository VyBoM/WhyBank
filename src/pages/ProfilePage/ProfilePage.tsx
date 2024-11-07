import { supabase } from '../../supabase/client';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
	const navigate = useNavigate();

	const [nick, setNick] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [cvs, setCvs] = useState('');

	const handleLogOut = async () => {
		const { error } = await supabase.auth.signOut();
		navigate('/');
	};

	useEffect(() => {
		const getProfile = async () => {
			const getSessionResponse = await supabase.auth.getSession();

			const userId = getSessionResponse.data.session?.user.id;

			const { data } = await supabase.from('users').select('nick,phone,email,cvs').eq('user_id', userId);
			data?.forEach((element) => {
				for (const [key, value] of Object.entries(element)) {
					if (key == 'nick') {
						setNick(value);
					}
					if (key == 'phone') {
						setPhone(value);
					}
					if (key == 'email') {
						setEmail(value);
					}
					if (key == 'cvs') {
						setCvs(value);
					}
				}
			});
		};
		getProfile();
	}, []);

	return (
		<>
			<main>
				<div className={styles.content}>
					<h1 className={styles.h1}>Профиль</h1>
					<div className={styles.block_profile}>
						<div className={styles.profile_edit}>
							<div className={styles.profile_icon}>
								<img src='src/assets/img/Question.png' alt='Ава' className={styles.question} />
							</div>
						</div>
						<div className={styles.data}>
							<span>Никнейм</span>
							<div className={styles.data_block}>{nick}</div>
							<span>Номер телефона</span>
							<div className={styles.data_block}>{phone}</div>
							<span>Почта</span>
							<div className={styles.data_block}>{email}</div>
						</div>
					</div>
					<div className={styles.data_CVs_block}>
						<span className={styles.data_CVs}>CVs Code</span>
						<div className={styles.data_block_CVs}>{cvs}</div>
						<span className={styles.attention_text}>
							CVs Code - этот код предназначен для аутентификация пользователя карты, ни в коем случае не сообщаете его!
						</span>
					</div>
					<div className={styles.button_block}>
						<button className={styles.button_profile} onClick={handleLogOut}>
							Выйти
						</button>
					</div>
				</div>
			</main>
		</>
	);
};
