import { Outlet } from 'react-router-dom';

import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout = () => (
	<>
		<Header />
		<Outlet />
		<Footer />
	</>
);
