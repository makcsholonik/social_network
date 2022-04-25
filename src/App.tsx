import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { routes } from './components/routes/dataRoutes';

export const App : FC = () => {
	return (
		<Layout>
			<Routes>
				{ routes.map ( route => (
					<Route path={ route.path } element={ <route.element/> }/>
				) ) }
			</Routes>
		</Layout>
	);
};
