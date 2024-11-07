import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { MainPage } from '../../pages/MainPage';
import { CardPage } from '../../pages/CardPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { Layout } from '../Layout/Layout';
import { AuthPage } from '../../pages/AuthPage/Authpage';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<AuthPage />} />
			<Route element={<Layout />}>
				<Route element={<PrivateRoute />}>
					<Route path='/card.html' element={<CardPage />} />
					<Route path='/main.html' element={<MainPage />} />
					<Route path='/profile.html' element={<ProfilePage />} />
				</Route>
			</Route>
			<Route path='*' element={<>Не найдено</>} />
		</>
	)
);

export const Router = () => <RouterProvider router={router} />;
