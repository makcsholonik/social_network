import React, { FC } from 'react';
import { Header } from './header/Header';
import { Sidebar } from './sidebar/Sidebar';

export const Layout : FC = () => {
	return (
		<div>
			<Header/>
			<Sidebar/>
		</div>
	);
};
