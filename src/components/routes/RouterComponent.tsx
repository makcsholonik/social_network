import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { routes } from './dataRoutes';

export const RouterComponent : FC = () => {


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
