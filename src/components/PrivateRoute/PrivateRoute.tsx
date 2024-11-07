import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { supabase } from '../../supabase/client';

export const PrivateRoute = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		const checkIsAuth = async () => {
			const { data } = await supabase.auth.getSession();
			console.log(data);

			if (data.session == null) {
				navigate('/', {
					state: location.pathname
				});
			} else {
				setIsAuth(true);
			}
		};
		checkIsAuth();
	}, []);

	if (isAuth) {
		return <Outlet />;
	}

	return <></>;
};
