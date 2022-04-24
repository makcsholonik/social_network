import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Home } from '@mui/icons-material';

export const RouterComponent : FC = () => {


	return (
		<Layout>
			<Routes>
				<Route path={'/'} element={<Home/>}/>
			</Routes>
		</Layout>
	);
};
