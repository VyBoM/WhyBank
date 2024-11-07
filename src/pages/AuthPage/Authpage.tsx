import styles from './AuthPage.module.scss';
import { supabase } from '../../supabase/client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import logo from '../../assets/img/Logo.svg';

export function AuthPage() {
	const navigate = useNavigate();

	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		const checkIsAuth = async () => {
			const { data } = await supabase.auth.getSession();
			console.log(data.session);

			if (data.session !== null) {
				navigate('/main.html');
			}
		};
		checkIsAuth();
	}, [isAuth]);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: ''
		}
	});

	const onSubmit: SubmitHandler<Inputs> = async (userData) => {
		const { email, password } = userData;
		const { data, error } = await supabase.auth.signInWithPassword({ email, password });
		console.log(error);
		console.log(data);
		console.log(email);
		if (data.session !== null) {
			setIsAuth(true);
		}
	};
	console.log(errors);

	interface Inputs {
		nickname: string;
		password: string;
		email: string;
	}

	return (
		<div className={styles.content}>
			<img src={logo} alt='logo' className={styles.logo} />
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.form_div}>
					<input type='email' placeholder='Email' {...register('email', {})} />
					<input type='password' placeholder='Password' {...register('password', {})} />

					<input type='submit' className={styles.input_button} />
				</div>
			</form>
		</div>
	);
}
