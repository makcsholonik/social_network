import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './list';

export const Router : FC = () => {

	const isAuth = true;

	return (
		<Routes>
			{ routes.map ( route => {
				if (route.auth && !isAuth) {
					return false;
				}
				return (
					<Route
						key={ `route ${ route.path }` }
						path={ route.path }
						// exact={ route.exact }
					>
						<route.component/>
					</Route>
				);
			} ) }
			<Route element={ <Error404/> }/>;
		</Routes>
	);
};
